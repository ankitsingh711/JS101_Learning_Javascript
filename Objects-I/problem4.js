let str = "abb";

let count = 0;
for (i=0;i<str.length-1;i++){
  for (j=str.length-1;j>=0;j--){
    if (str[i] == str[j]){
      count++;
    }
  }
}
if (count >=1){
  console.log("Palindrome");
} else{
  console.log("Not a Palindrome");
}