const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync("abc.txt");

const server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent)
})
server.listen(80,'127.0.0.1' , ()=>{
    console.log("Listening on port 80");
})
//why port 80 ? , we don't require to give explictyly port number when we give 80 port number , other port reqquire explictly give in the url