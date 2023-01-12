
// hello
console.log("test");

// global variables
global.nate = "my name!";
console.log(global.nate);

// process variables
console.log(process.platform);
console.log(process.env.USER);

// process events magic :O
process.on('exit', () => {
    console.log("goodbye");
});

// events are super cool! CUSTOM
const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("lunch", () => {
    console.log("yum");
});
eventEmitter.emit("lunch");
eventEmitter.emit("lunch");

// file reading :O
// const { readFile, readFileSync } = require("fs");
// const txt = readFile("./hello.txt", "utf8", (err, txt) => {
//     console.log(txt);
// });
// console.log("do this now :D");

// promises!
const { readFile } = require("fs").promises;
async function hello() {
    const file = await readFile("./hello.txt", "utf8");
    console.log(file);
}
hello();
console.log("do this now");

// modules :O
const myModule = require("./my-module");
console.log(myModule);
myModule.print();
myModule.nateTest();

// express web app :O
const express = require("express");
const { response } = require("express");
const app = express();
app.get('/', async (req, res) => {
    res.send(await readFile("./home.html", "utf8"));
});
app.listen(3000, () => console.log("now listening at http://localhost:3000"));
