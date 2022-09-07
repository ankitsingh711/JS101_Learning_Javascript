const arr = ["ankit", "aman", "chunnu", "karan", "naman"];
temp = "";

for (i=1;i<arr.length;i++){
  temp += i + "." + arr[i] + " ";
}
console.log(temp);