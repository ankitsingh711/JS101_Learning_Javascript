const arr = ['Ankit', "Aman", "Neha", "Rahul", "Arnav"];
let cnt = 0;
for (let i=0;i<=arr.length-1;i++){
  for (j=0;j<=arr[i].length-1;j++){
    if (arr[i][j] == "A" || arr[i][j] == "a"){
      cnt++;
      break;
    }
  }
}
console.log(cnt);