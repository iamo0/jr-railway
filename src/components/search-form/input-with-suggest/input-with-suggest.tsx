"use client";

import styles from "./input-with-suggest.module.css";

import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";

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
    className = "",
    defaultOptions = [
      { value: "Москва" },
      { value: "Санкт Петербург" },
      { value: "Нижний Новгород" },
      { value: "Владивосток" },
      { value: "Пекин" },
      { value: "Берлин" },
      { value: "Лондон" },
    ],
    listId,
    onChange = () => {},
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState("");

  const [optionsState, setOptionsState] = useState<OptionsState>({
    state: "idle",
    data: defaultOptions.filter((o) => o.priority),
  });

  useEffect(function () {
    if (inputValue.length < 2) {
      setOptionsState({
        state: "idle",
        data: [...defaultOptions],
      });
      return;
    }

    setOptionsState({
      ...optionsState,
      state: "loading",
    });

    fetch(`/api/cities/?search=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setOptionsState({
          state: "idle",
          data,
        });
      });
  }, [inputValue]);

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setInputValue(value);
    onChange(evt);
  }

  return <>
    <input className={`${className} ${styles.input} ${optionsState.state === "loading" ? styles.inputLoading : ``}`} autoCapitalize="off" autoComplete="off" autoCorrect="off" list={listId} {...rest} value={inputValue} onChange={handleInputChange} />
    <datalist id={listId}>
      {optionsState.data.map(({ value }) => <option value={value} key={value.replaceAll(" ", "-")} />)}
    </datalist>
  </>;
}
