/*
Determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values). Use reduce.
*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {

  return array.reduce((acc, str) => {
    if (str.length % 2 !== 0) {
      acc.push(str.length);
    }
    return acc;
  }, []);
}

console.log(oddLengths(arr));