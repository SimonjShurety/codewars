// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
const arr = [2, 3, 4, 5]

function grow(x){
   const sum = x.reduce(( a, b) => a * b)
   return sum
}

grow(arr);