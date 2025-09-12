import clamp from "@/helpers/clamp";
import { useState } from "react";

export default function useClamped(initialValue: number, min: number, max: number): [number, (newValue: number) => void] {
  const [value, setValue] = useState(initialValue);

  function setClampedValue(newValue: number) {
    setValue(clamp(newValue, min, max));
  }

  return [value, setClampedValue];
}
