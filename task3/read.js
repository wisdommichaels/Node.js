// create a program that reads and console.log data from hello.txt
const fs = require ("fs")

fs.writeFile("welcome.txt", "Hello Node",(error,)=>{
    if(error){
        console.log(error.stack);
        return;
    };
    console.log("success");
    
});


fs.readFile("hello.txt", (error, data)=>{
    if(error){
        console.log(error.stack);
        return;
    };
    console.log(data.toString());
    
});

