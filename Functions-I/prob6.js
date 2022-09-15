// Problem-6
/* Given a string swap the case and print the output
Sample Input - Test
Sample Output - tEST
NOTE: Use multiple functions to achieve the result, NOT one single code block */

function convertArray(str){
  let arr = [];
  for (i=0;i<str.length;i++){
    arr.push(str[i]);
  }
  return arr;
}

let array = convertArray("aBcJskL");

function swapCase(array){

  let small_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let new_str = "";
  for (i=0;i<array.length;i++){
    for (j=0;j<small_case.length;j++){
      if (array[i] == small_case[j]){
        new_str += upper_case[j];
      } else if(array[i] == upper_case[j]){
        new_str += small_case[j];
      }
    }
  }
  return new_str;
}

let ans = swapCase(array);
console.log(ans);
