function reverseArray(arr) {
  const size = arr.length;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[size - 1 - i] = temp;
  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4]));
