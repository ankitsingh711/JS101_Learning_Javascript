// Problem 1: Given a string count the number of words in that string

let str = "Hello  my name is Ankit Singh";
let cnt = 0;

for (i=0;i<=str.length-1;i++){
  if (str[i] == "  "){
    str[i] = " ";
  } else if (str[i] == " "){
    cnt += 1;
  }
}

if (str == 0){
  console.log(0);
} else{
  console.log(cnt+1);
}