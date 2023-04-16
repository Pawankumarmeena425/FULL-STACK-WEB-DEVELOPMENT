// Synchronous or blocking
// -- Line by Line Execution

// Asynchronous or Non-blocking
// -- Line by Line execution will not guaranteed
// -- Callbacks will fire

const fs = require("fs");
fs.readFile("abc.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
// Jab tk file read hoge aage ka content process hota rhega, or jaise hi file read ho jayegi output show ho jayega
// If we use synchronous then , it will block till file not read
console.log("This is message");

// ********************** Node.Js work on non-blocking IO models ********************************
