// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function

let arr = [1,2,3,4,5];

function myIncludes(found){
  let count = 0;
  for (i=0;i<arr.length;i++){
    if (arr[i] == found){
      count = 1;
    }
  }

  if(count == 1){
    return true;
  }

  return false;
}

let result = myIncludes(9);
console.log(result);