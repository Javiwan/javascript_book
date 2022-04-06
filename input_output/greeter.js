/*
Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

What is your name? Sue
Hello, Sue!
*/

let sync = require('readline-sync');

let name = sync.question("What's your name?\n");
console.log(`Hello, ${name}!`);