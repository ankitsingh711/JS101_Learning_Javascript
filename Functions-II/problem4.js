// Problem 4
// Write a custom function that has the same behavior of inbuilt String Substring Function

let str = "Mozilla";

function subString(start, end=str.length){
  let new_str = "";
  for (i=start;i<=end-1;i++){
    new_str += str[i];
  }

  return new_str;
}

let result = subString(1, 3);
console.log(result);