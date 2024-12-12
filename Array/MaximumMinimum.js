function findMinMax(arr) {
  if (arr.length === 0) {
    console.log("Array is Empty");
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
const arr = [3, 2, 1, 56, 10000, 167];
const result = findMinMax(arr);
console.log(result);
