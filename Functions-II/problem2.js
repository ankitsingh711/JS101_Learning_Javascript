// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
let arr = ["Ankit", "Anshu", "Abhi", "Ankit", "Abhi"];

function lastIndexOf(str){
  let index_num = 0;
  for (i=arr.length;i>=0;i--){
    if (arr[i] == str){
      index_num = i;
      break;
    } else{
      return -1;
    }
  }
  return index_num;
}

let last = lastIndexOf('ankit');
console.log(last);