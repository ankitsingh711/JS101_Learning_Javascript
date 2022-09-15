let num = 19;

for (i=0;i<=num;i++){
  let count = 1;
  for (j=2;j<=i;j++){
    if(i % j == 0){
      count = 1;
      break;
    }
  }
  if(count == 0 && i > 1){
    console.log(i);
  }
}