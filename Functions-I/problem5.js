// Problem 5: Write a function to replace spaces in a given string with - .

function removeSpace(str){
  let new_str = "";
  for (i=0;i<str.length;i++){
    if (str[i] == " "){
      new_str += "-";
    } else{
      new_str += str[i];
    }
  }
  console.log(new_str);
}

removeSpace("Hello My Name is Ankit Singh");