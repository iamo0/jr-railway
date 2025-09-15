import styles from "./labelled-radio-button.module.css";

import { EventHandler, PropsWithChildren, type MouseEvent } from "react";

interface LabelledRadioButtonProps extends 
  React.InputHTMLAttributes<HTMLInputElement>, 
  PropsWithChildren {
  id: string,
  onClick?: EventHandler<MouseEvent>,
}

export default function LabelledRadioButton({
  children,
  defaultChecked,
  name,
  value,
  id,
  style = {},
  onClick = () => {},
}: LabelledRadioButtonProps) {
  return <>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      className={styles.radio}
    />

    <label
      htmlFor={id}
      className={styles.label}
      style={style}
      onClick={onClick}
    >{children}</label>
  </>;
}
