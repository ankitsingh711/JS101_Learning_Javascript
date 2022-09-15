// Problem 2: Use the above function to print the Primes from 2 to a given limit

function isPrime(num){
  for (i=1;i<=num;i++){
    let count = 0;
    for (j=2;j<i;j++){
      if (i % j == 0){
        count = 1;
      }
    }
    if (i > 1 && count == 0){
      console.log(i,"is a prime number");
    } else{
      continue;
    }
  }
}

let total = isPrime(13);
console.log(total);