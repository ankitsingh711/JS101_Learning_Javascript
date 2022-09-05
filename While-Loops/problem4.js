i = 1;
sum = 0;
while (i <= 100){
  if ( i % 2 == 0){
    sum += i;
  }
  i++;
}

let avg = (sum/50);
console.log(avg);