/*
Use reduce to compute the sum of the squares of all of the numbers in an array:
*/

let array = [3, 5, 7];

let sumOfSquares = array.reduce((acc, idx) => acc + idx ** 2, 0);

console.log(sumOfSquares);