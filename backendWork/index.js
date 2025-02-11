// const obj = require('./logic.js');

// const result = obj.sum(2, 3);
// const result2 = obj.multiply(3, 4);

// console.log(result);
// console.log(result2);

const obj = require('./UseFileSync/FileOperations.js');
obj.dataWrite("hello buddy");
obj.readData();
obj.appendData("what happend");
obj.deleteFile();