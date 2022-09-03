function greatest(a, b, c){
  if (a > b && a > c){
    console.log("a is greatest");
  } else if(b > a && b > c){
    console.log("b is greatest");
  } else if(c > a && c > b){
    console.log("c is greatest");
  }
}

greatest(111,13,31)