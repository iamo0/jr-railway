import { HTMLAttributes } from "react";

interface DataListOption {
  value: string,
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
      { value: "Москва" },
      { value: "Санкт Петербург" },
      { value: "Нижний Новгород" },
      { value: "Вышний Волочек" },
      { value: "Пекин" },
      { value: "Берлин" },
      { value: "Лондон" },
    ],
    listId,
    ...rest
  } = props;

  return <>
    <input autoComplete="off" list={listId} {...rest} />
    <datalist id={listId}>
      {defaultOptions.map(({value}) => <option value={value} key={value.replaceAll(" ", "-")} />)}
    </datalist>
  </>;
}
