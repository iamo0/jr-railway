"use client";

import styles from "./numeric-input.module.css";
import useClamped from "@/hooks/use-clamped";

interface NumericInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string,
  step: number,
  min: number,
  max: number,
  defaultValue: number,
}

export default function NumericInput(props: NumericInputProps) {
  const {
    className,
    defaultValue = 0,
    step = 1,
    min = -Infinity,
    max = Infinity,
    ...rest
  } = props;

  const [value, setValue] = useClamped(defaultValue, min, max);

  return <div className={`${styles.numericInput} ${className ?? ""}`}>
    <input className={styles.input} type="number" step={step} min={min} max={max} {...rest} value={value} readOnly />
    <button disabled={value === min} type="button" onClick={() => setValue(value - step)} className={`${styles.controlButton} ${styles.controlButtonDecrease}`}>Decrease</button>
    <button disabled={value === max} type="button" onClick={() => setValue(value + step)} className={`${styles.controlButton} ${styles.controlButtonIncrease}`}>Increase</button>
  </div>;
};
