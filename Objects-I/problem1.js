// Problem 1 :
// Given an array find the unique items in the array

const arr = ["Ankit", "Ajay", "Neha", "Ajay", "Ankit", "Urmila", "Chunnu"];

let obj = {};

for (i=0;i<=arr.length-1;i++){
  obj[arr[i]]=1;
}

console.log(obj);