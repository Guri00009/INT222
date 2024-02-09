// var fs=require("fs");
// var stu={
//     Rollno:15,
//     Name:"Gurleen",
//     Marks:99
// };
// console.log(stu);
// var json=JSON.stringify(stu);

// fs.writeFile("first.json",json,function(err,data){
//     if(err) throw err;
//     console.log("Write Successful");
// });

// fs.readFile("first.json","utf-8",function(err,data)
// {
//     var j1=JSON.parse(data);
//     console.log(j1);
// })

var buf = Buffer.alloc(10);
buf.write("Gurleen");
console.log(buf.toString()+" is King");


