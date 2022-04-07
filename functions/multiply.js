let readline = require("readline-sync");

function multiply(a, b) {
  return a * b;
}

function ask(question) {
  return Number(readline.question(question));
}

let firstNumber = ask('Enter the first number: ');
let secondNumber = ask('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = 
  ${multiply(firstNumber, secondNumber)}` );