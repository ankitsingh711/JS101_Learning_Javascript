for (i=1;i<=100;i++){
  let cnt = 0;
  for (j=1;j<=i;j++){
    if (i % j == 0){
      cnt++;
    }
  }
  if (cnt == 2){
  console.log(i);
  }
}

