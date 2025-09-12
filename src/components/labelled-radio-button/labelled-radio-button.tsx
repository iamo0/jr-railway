"use client";

import styles from "./labelled-radio-button.module.css";

import { PropsWithChildren } from "react";

interface LabelledRadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement>, PropsWithChildren {
  id: string,
}

export default function LabelledRadioButton({
  children,
  defaultChecked,
  name,
  value,
  id,
  style = {},
}: LabelledRadioButtonProps) {
  return <>
    <input
      type="radio" id={id} name={name} value={value} defaultChecked={defaultChecked}
      className={styles.radio}
    />
    <label htmlFor={id} className={styles.label} style={style}>{children}</label>
  </>;
}
