// Problem-4
/* Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average */

function avgArray(arr){
  let sum = 0;
  let len = arr.length;
  for (i=0;i<arr.length;i++){
    sum += arr[i];
  }

  console.log("Sum of the elements of array:",sum);

  let avg = ("The average is:",(sum)/len);

  console.log(avg);
}

avgArray([2,3,4,7]);