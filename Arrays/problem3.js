const nums = [22,76,65,87,90,65];
even_sum = 0;
cnt = 0;

for (i=0;i<=nums.length-1;i++){
  if (nums[i] % 2 == 0){
    even_sum += nums[i];
    cnt += 1;
  }
}

console.log((even_sum)/cnt);