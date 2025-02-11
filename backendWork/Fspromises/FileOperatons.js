const promises = require("fs/promises");

// Reading a file

function wrieFile() {
    const fsp = promises.writeFile("data.txt", "Hello World");
    fsp.then(() => {
        console.log("File created");
    }).catch((err) => { console.log(err); });
}

function readFile() {
    const fsp = promises.readFile("data.txt", "utf-8")
    fsp.then((data) => {
        console.log(data);
    }).catch((err) => { console.log(err); });

}
wrieFile()
readFile();
