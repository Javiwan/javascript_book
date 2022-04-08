function factorial(num) {
  if(num === 1) {
    return num;
  }
  return num * factorial(num - 1);

}

console.log(factorial(6));
console.log(factorial(8));
console.log(factorial(5));