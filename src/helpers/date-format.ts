import { addLeadingZero } from "./number-format";

export function formatToYYYYMMDD(date: Date) {
  return `${
    date.getFullYear()
  }-${
    addLeadingZero(date.getMonth() + 1)
  }-${
    addLeadingZero(date.getDate())
  }`;
}
