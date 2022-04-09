/*
In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.
*/

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// Using forEach

myArray.forEach(arr => arr.forEach(num => {
  if (num % 2 === 0) {
  console.log(num);
  }
}));

// Using filter

myArray.forEach(arr => {
  arr.filter(num => num % 2 === 0).forEach(elem => console.log(elem));
});