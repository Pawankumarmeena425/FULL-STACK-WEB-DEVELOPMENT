// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Css Grid Tutorial</title>
      <style>
          .container{
              display: grid;
              grid-gap: 1rem;
              /* grid-template-columns: 112px 112px 112px; */
              grid-template-columns: 1fr 1fr 1fr;
              justify-content: center;
              align-items: center;
  
              /* but how to make page responsive ??  */
  
              grid-template-columns: repeat(auto-fit , minmax(300px,1fr));
          }
          .box{
              border: 2px solid black;
              background-color: rgb(228, 178, 116);
              padding: 23px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="box">Item-1</div>
          <div class="box">Item-2</div>
          <div class="box">Item-3</div>
          <div class="box">Item-4</div>
          <div class="box">Item-5</div>
          <div class="box">Item-6</div>
          <div class="box">Item-7</div>
          <div class="box">Item-8</div>
          <div class="box">Item-9</div>
          <div class="box">Item-10</div>
          <div class="box">Item-10</div>
          <div class="box">Item-10</div>
      </div>
  </body>
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});