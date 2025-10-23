"use client";

import { ChangeEvent, HTMLAttributes, useState } from "react";

interface DataListOption {
  value: string,
  priority?: true,
}

interface OptionsState {
  state: "loading" | "idle",
  data: DataListOption[],
}

interface InputWithSuggestProps extends HTMLAttributes<HTMLInputElement> {
  defaultOptions?: DataListOption[],
  listId: string,
  placeholder?: string,
  type: "text",
  name: string,
  value: string,
}

export default function InputWithSuggest(props: InputWithSuggestProps) {
  const {
    defaultOptions = [
      { value: "Москва", priority: true, },
      { value: "Мурино" },
      { value: "Санкт Петербург", priority: true, },
      { value: "Нижнекамск" },
      { value: "Нижневартовск" },
      { value: "Нижний Тагил" },
      { value: "Нижний Новгород", priority: true, },
      { value: "Владивосток", priority: true, },
      { value: "Вышний Волочек" },
      { value: "Пекин", priority: true, },
      { value: "Берлин", priority: true, },
      { value: "Биробиджан" },
      { value: "Лондон", priority: true, },
    ],
    listId,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState("");

  const [optionsState, setOptionsState] = useState<OptionsState>({
    state: "idle",
    data: defaultOptions.filter((o) => o.priority),
  });

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setInputValue(value);

    if (value.length < 2) {
      setOptionsState({
        state: "idle",
        data: defaultOptions.filter((o) => o.priority),
      })
      return;
    }

    setOptionsState({
      state: "idle",
      data: [...defaultOptions],
    });
  }

  return <>
    <input autoComplete="off" list={listId} {...rest} value={inputValue} onChange={handleInputChange} />
    <datalist id={listId}>
      {optionsState.data.map(({value}) => <option value={value} key={value.replaceAll(" ", "-")} />)}
    </datalist>
  </>;
}
