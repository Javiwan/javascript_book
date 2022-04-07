let readline = require("readline-sync");

function ask(name) {
  return readline.question(`What's your ${name}? `);  
}

let firstName = ask('first name');
let lastName = ask('last name');

console.log(`Good Morning! ${firstName} ${lastName}`);