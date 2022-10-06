const arr = [1, 2, 3, 8, 1];

function findLargestEl(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
}
console.log(findLargestEl(arr));
