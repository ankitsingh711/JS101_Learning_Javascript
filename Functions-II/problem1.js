// PROBLEM 1
// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

function join(...arr){
  let str = "";
  for (i=0;i<arr.length;i++){
    str += arr[i] + " ";
  }
  return str;
}

let result = join(1,2,3,4,5);
console.log(result);