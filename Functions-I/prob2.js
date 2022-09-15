// Problem-2
/*Write code to find the absolute difference of two numbers

Sample Input-1 12,4
Sample Output-1 8
Sample Input-2 4,18
Sample Output-2 14
NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value*/

function diff(a, b){
  return (a - b);
}

let input1 = diff(12, 4);
let input2 = diff(1, 8);
let input3 = diff(4, 18);
let input4 = diff(2, 14);

function absolute(total){
  if (total < 0){
    return (0 - total);
  } else{
    return total;
  }
}

console.log(absolute(input1));
console.log(absolute(input2));
console.log(absolute(input3));
console.log(absolute(input4));


