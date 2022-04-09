/*
Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).
*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddValues = arr.map(str => str.length).filter(num => num % 2 !== 0);

console.log(oddValues);