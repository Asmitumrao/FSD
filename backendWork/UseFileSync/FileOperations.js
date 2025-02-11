const fs=require("fs");



function dataWrite(s='Hello World'){
    try{
        fs.writeFileSync("data.txt",s);
        console.log("Data written successfully");
    }catch(err){
        console.log("error while writing the data ");
        console.log(err);
    }
}

function readData(){
    try{
        const data = fs.readFileSync("data.txt",{encoding:"utf-8"});
        console.log(data);
    }catch(err){
        console.log("error while reading the data ");
        console.log(err);
    }
}

function appendData(s='appending using fs module'){
    try{
        fs.appendFileSync("data.txt",s);  //append data to the file
        console.log("Data appended successfully");
    }catch(err){
        console.log("error while appending the data ");
        console.log(err);
    }
}

function deleteFile(){
    try{
        fs.unlinkSync("data.txt"); //delete the file
        console.log("File deleted successfully");
    }catch(err){
        console.log("error while deleting the file ");
        console.log(err);
    }
}



const obj = {readData, dataWrite, appendData, deleteFile};
module.exports = obj;
