// Problem 3: Print a box patterns using *
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

for (i=1;i<=10;i++){
  let temp = "";
  for (j=1;j<=10;j++){
    if (i == 1 || i == 10){
      temp += "*"; 
    } else{
      if (j == 1 || j == 10){
        temp += "*";
      } else {
        temp += " ";
      }
    }
  }
  console.log(temp);
}