let char = "a";

const arr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const arr2 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

for (i=0;i<arr1.length-1;i++){
    if (char == arr1[i]){
      char = arr1[i].toUpperCase();
    }
}

console.log(char);