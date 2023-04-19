const express = require('express'); //import express module
const app = express(); // made app of express moudle
const port = 9000; // define port number ,
const path  = require("path"); 


//EXPRESS SPECIFIC STUFF 
app.use('/static',express.static('static'));
app.use(express.urlencoded());// it will help to feath data from website to Express

// PUG SPECIFIC STUFF 
app.set('view engine', 'pug');// Set the template engine as pug (pug is a template engine for node js)
app.set('views',path.join(__dirname,'views'));  // Set the views directory

// END POINTS

// app.get('/', (req, res) => {
//     const params = { };
//     res.status(200).render('index.pug', params)
//   }); 

// for template inheritance
app.get('/', (req, res) => {
    const params = { };
    res.status(200).render('home.pug', params)
  }); 
app.get('/contact', (req, res) => {
    const params = { };
    res.status(200).render('contact.pug', params)
  }); 









  // START THE SERVER
app.listen(port , ()=>{
    console.log(`The application started successfully on port ${port}`)
});