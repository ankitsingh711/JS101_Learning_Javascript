let n = 8;
let cnt1 = 0;
let cnt2 = 0;
for (let i = 1; i<= 8; i++){
  if (n % i == 0){
    cnt1++;
  }else{
    cnt2++;
  }
}

console.log(cnt1, cnt2)