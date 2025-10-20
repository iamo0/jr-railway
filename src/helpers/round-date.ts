export function roundDate(date: Date | number | string) {
  let milliseconds;

  if (date instanceof Date) {
    milliseconds = date.getTime();
  } else if (typeof date === "number") {
    milliseconds = date;
  } else if (typeof date === "string") {
    const d = new Date(date);
    milliseconds = d.getTime();
  }

  const newDate = new Date(milliseconds!);
  newDate.setHours(0, 0, 0, 0);
  return newDate.getTime();
}

export function now() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.getTime();
}
