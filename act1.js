function fact(num){
    if(num==0){
      return 1;
    }else{
      return num * fact(num-1);
    };
  };
  var z = 10;
  const result = fact(z);
  console.log(" Factorial of",z,"is :",result);