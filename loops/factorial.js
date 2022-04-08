/*
Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive.
*/

let readline = require("readline-sync");

let num = readline.question("Write the number you want to know factorial: ");

let factorial = function(num) {
  let calc = 1;
  for (let i = 1; i <= num; i += 1){
    calc *= i;
  }
  return calc;
}

console.log(factorial(num));

/*
let factorial = 1;

for (let i = 1; i <= num; i += 1) {
  factorial *= i;
}

console.log(factorial);
*/