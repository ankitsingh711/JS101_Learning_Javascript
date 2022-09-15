// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function isPrime(num){
  for (i=1;i<=num;i++){
    let count = 0;
    for (j=2;j<i;j++){
      if (i % j == 0){
        count = 1;
      }
    }
    if (i > 1 && count == 0){
      continue;
    } else{
      console.log(i,"is not a prime number");
    }
  }
}

isPrime(13);