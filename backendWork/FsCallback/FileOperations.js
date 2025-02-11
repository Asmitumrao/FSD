const fs=require('fs');

function  writeData(s="hello buddy"){
fs.writeFile("data.txt",s,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file created");
    }
});
}


function readData(){
fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else 
    {
        console.log(data);  
    }
    })
}

module.exports={readData,writeData};