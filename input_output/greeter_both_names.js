/*
Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.
*/

let readline = require('readline-sync');

let firstName = readline.question(`What's your first name?\n`);
let secondName = readline.question(`What's your second name?\n`);

console.log(`Hello, ${firstName} ${secondName}.`);