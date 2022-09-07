// Problem 2: Given an array of string count the overall total number of characters

let arr = ["Ankit", "Akash", "Arman", "Neha", "Ajay", "Ravi"];

let temp = "";

for (i=0;i<=arr.length-1;i++){
  temp += arr[i];
}

let cnt = 0;

for (j=0;j<=temp.length-1;j++){
  cnt += 1;
}

console.log(cnt);