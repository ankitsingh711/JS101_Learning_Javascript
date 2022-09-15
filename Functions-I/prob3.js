// Problem-3
 /*Write a function isOdd which returns a boolean value based on the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included) */

function isOdd(num){
  for (i=1;i<=num;i++){
    if (i % 2 != 0){
      console.log(i, "is an odd number");
    } else {
      console.log(i, "is not an odd number");
    }
  }
}

let chek = isOdd(13);
