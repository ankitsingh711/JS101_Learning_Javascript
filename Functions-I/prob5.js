// Problem-5
/* Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"] */

function lowerCase(char, str, arr) {
  let small_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (i=0;i<small_case.length;i++){
    if (char == upper_case[i]){
      char = small_case[i];
    }
  }
  console.log(char);

  for (i=0;i<str.length;i++){
    for (j=0;j<small_case.length;j++){
      if (i )
    }
  }
}

lowerCase("A");