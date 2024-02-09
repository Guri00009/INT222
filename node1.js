var a = 20;
var b = 10;
var op = "-";
switch(op){
    case "+":
        console.log("Sum: ",a+b);
        break;
    case "-":
        console.log("Diff: ",a-b);
        break;
    case "*":
        console.log("Product: ",a*b);
        break;
    case "%":
        console.log("Mod: ",a%b);
        break;
    default:
        console.log("Wrong entry......");
}