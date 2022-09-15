function subStrUnderCond(s){
    let obj = {};
    let sum = 0;
    for (let i=0;i<s.length;i++){
        if (s[i] === undefined){
            obj[s[i]]=1;
        } else{
            obj[s[i]]++;
        }
    };
    for (x in obj){
        sum += obj[x];
    }
    console.log(sum);
  console.log(obj);
};

subStrUnderCond("abcab");
