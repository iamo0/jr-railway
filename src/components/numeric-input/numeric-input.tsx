"use client";

import { useState } from "react";
import styles from "./numeric-input.module.css";
import clamp from "@/helpers/clamp";

interface NumericInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  id: string,
  step: number,
  min: number,
  max: number,
  defaultValue?: number,
  value?: number,
  onChange?: (value: number) => void,
}

export default function NumericInput(props: NumericInputProps) {
  const {
    className,
    defaultValue = 0,
    step = 1,
    min = -Infinity,
    max = Infinity,
    onChange = () => {},
    value,
    ...rest
  } = props;

  const [currentValue, setValue] = useState(value || defaultValue);

  function setClampedValue(newValue: number) {
    const clampedValue = clamp(newValue, min, max);
    setValue(clampedValue);
    onChange(clampedValue);
  }

  return <div className={`${styles.numericInput} ${className ?? ""}`}>
    <input className={styles.input} type="number" step={step} min={min} max={max} {...rest} value={currentValue} readOnly />
    <button disabled={currentValue === min} type="button" onClick={() => setClampedValue(currentValue - step)} className={`${styles.controlButton} ${styles.controlButtonDecrease}`}>Decrease</button>
    <button disabled={currentValue === max} type="button" onClick={() => setClampedValue(currentValue + step)} className={`${styles.controlButton} ${styles.controlButtonIncrease}`}>Increase</button>
  </div>;
};
