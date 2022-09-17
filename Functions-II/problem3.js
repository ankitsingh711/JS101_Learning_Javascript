// Problem 3
// Write a custom function that has the same behavior of inbuilt Array Slice Function

let arr = ["tiger", "lion", "leopard", "fox", "elephant"];

function mySlice(start, end=arr.length){
  let new_arr = [];
  if (start > 0 || end > 0){
    let new_start = (-start);
    let new_end = (-end);
    for (j=new_end;j>=new_start;j--){
      new_arr.push(arr[j]);
    }
  } else{
    for (i=start;i<=end-1;i++){
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
}

let result = mySlice(-2,-4);
console.log(result);