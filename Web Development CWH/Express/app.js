// npm install express

// Express is a web application fremwork for node.js
// Express is used for handle routing , (referance : custom backend) we don't require to take hadeache for these . It is use to simplify web development

const express = require('express'); //import express module
const app = express(); // made app of express moudle
const port = 80; // define port number ,
const path  = require("path"); 

// For Serving static files  : static files ->> Static files are the files which we are kept in our website publiclly through the link everyone can download these files
app.use('/static',express.static('static'));

// PUG SPECIFIC STUFF 
app.set('view engine', 'pug');// Set the template engine as pug (pug is a template engine for node js)
app.set('views',path.join(__dirname,'views'));  // Set the views directory

// END POINTS

 app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there! and thans for teach me how to use pug' })
  }); 
  app.get('/',(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely!!"
    const params = {'title' : 'PubG is the best game' , 'content' : con}
    res.status(200).render('index.pug',params);
  });

















/*
  app.get("/" , (req,res)=>{
    res.send("This is home page of my first express app with harry");
});
app.post("/about" , (req,res)=>{
    res.send("This is post request of about page of my first express app with harry");
});
app.get("/this" , (req,res)=>{
    res.status(404).send("This page is not found on system");
});
*/



// START THE SERVER
app.listen(port , ()=>{
    console.log(`The application started successfully on port ${port}`)
});