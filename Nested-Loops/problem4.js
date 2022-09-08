function loop(n){
  for (i=1;i<=n*n;i++){
    temp = "";
    temp += i + " ";
    if (i % n == 0){
      temp += "\n";
    }
    console.log(temp);
  }
}

loop(6)