var fs = require("fs");
var data = fs.readFileSync("fs.txt","utf-8");
// fs.writeFileSync("gurleen.txt",data);
// console.log();




// var fs=require("fs");
// var data= fs.readFile("fs.txt","utf-8",function(err,data)
// {
//     if(err){
//         return console.log("ERR")

//     }
//     console.log();

// fs.writeFile("g1.txt",data,function(err,data)
// {
//     if(err) throw err;
//     console.log("new file is created");
// })
// })

// fs.rename("gurleen.txt","r1.txt", function (err) {  
//     if (err) throw err;
// })

// fs.renameSync("g1.txt","r2.txt");

// fs.unlinkSync('r2.txt');

// fs.unlink('gurleen.txt', function (err) { 
//     if (err) throw err;
//     console.log('successfully deleted r1.txt');
// })

fs.copyFile('gurleen.txt','c1.txt',function(){
    console.log("file copied successfully");
})