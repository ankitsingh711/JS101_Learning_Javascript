//Problem 1: Create a function to check if a number is Prime or Not

function isPrime(num){
  let count = 0;
  for (i=1;i<=num;i++){
    if (num % i == 0){
      count++;
    }
  }
  if (count == 2){
    console.log("Prime Number");
  } else{
    console.log("Not a Prime Number");
  }
}

let total = isPrime(12);
console.log(total);