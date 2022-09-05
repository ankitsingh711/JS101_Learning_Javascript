let n = 6;
while (n <= 9){
  if (n % 3 == 0){
    n = n + 2;
  }
  else{
    n++;
  }
  console.log(++n);
}