// Problem 4: Write a function to check if the char is a small case or not.

function isSmallCase(char){
  let small_case = "abcdefghijklmnopqrstuvwxyz";
  let falg = false;

  for (i=0;i<small_case.length;i++){
    if (char == small_case[i]){
      falg = true;
    }
  }

  if(falg == true){
    console.log("It is a small case character");
  } else{
    console.log("It is not a small case character")
  }
}

isSmallCase("d");