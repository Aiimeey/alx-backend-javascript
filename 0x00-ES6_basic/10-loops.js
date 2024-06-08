export default function appendToEachArrayValue(array, appendString) {
  const Arr = [];
  for (const items of array) {
    Arr.push(appendString + items);
  }

  return New;
}
