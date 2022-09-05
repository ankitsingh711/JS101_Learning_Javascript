let x = 15;
let n = 1;
let cnt = 0;

while (n <= x){
  if (x % n == 0){
    cnt++;
  }
  n++;
}
console.log(cnt);