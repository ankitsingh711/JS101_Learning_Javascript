// find the sum of elements whose occurrence is twice

let arr = [1,1,3,4,5,5,6,7,8,8];

let obj = {};

for (i=0;i<arr.length;i++){
  if (obj[arr[i]] == undefined){
    obj[arr[i]]=1;
  } else{
    obj[arr[i]]++;
  }
}

let sum = 0;
for (key in obj){
  if (obj[key] == 1){
    sum += Number(key);
  }
}

console.log(sum);