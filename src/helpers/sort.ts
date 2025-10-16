export default function sort(...args: number[]) {
  const newArr = [...args];
  newArr.sort(function(a, b) {
    return a - b;
  });
  return newArr;
}
