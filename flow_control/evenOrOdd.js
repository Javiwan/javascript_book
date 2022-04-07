let readline = require("readline-sync");

let number = Number(readline.question('Introduce a number: '));

function evenOrOdd (num) {
  console.log(num % 2 === 0 ? 'even' : 'uneven');
}

function error () {
  console.log('Sorry, this is not a number!');
}

Object.is(number, NaN) || typeof(number) !== 'number' ? error() : evenOrOdd(number);