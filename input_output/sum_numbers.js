let sync = require('readline-sync');
let num1 = Number(sync.question('Enter the first number: '));
let num2 = Number(sync.question('Enter the second number: '));
console.log(`The number ${num1} and ${num2} add to ${num1 + num2}`);