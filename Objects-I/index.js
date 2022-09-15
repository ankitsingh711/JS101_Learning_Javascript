let str = "abaca";
let arr = [];
for (i=0;i<str.length;i++){
  let sub_str = str[i];
  arr.push(sub_str);
  for (j=i+1;j<str.length;j++){
    if (i != j){
      sub_str += str[j];
      arr.push(sub_str);
    }
  }
};
let cnt = 0;
for (key of arr){
  if (key[0] == key[key.length-1]){
    cnt++;
  }
}
console.log(arr);
console.log(cnt);

