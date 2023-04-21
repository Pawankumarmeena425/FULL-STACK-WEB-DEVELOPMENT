// command : mongod   -->> for run the server
// mongo for run mongodb



// Inserting data in mongodb
use harryKart -->> use for swith the database
show dbs -->> use for see all the database
db.items.insertOne({name:"samsung 30s" , price : 23123 , rating: 4.5 , qty:223,sold:43})

db.items2.insertMany([{name:"samsung 30s" , price : 23123 , rating: 4.5 , qty:223,sold:43},
{name:"relme 9pros" , price : 22433 , rating: 4.6 , qty:23,sold:43},
{name:"oppo s 54" , price : 23123 , rating: 4.5 , qty:2343,sold:43 , isBig: true}])


db.items.find() -->> use to featch all data for the collections item 
show collections  -->> use for see all the collections from the current database





// Searching for data in MOngoDb
// Featch data base on some filter
db.items.find({rating : 4.5}) // give all the objects with rating 4,5

db.items.find({rating:{$gte:4.6}}) // give all the objects with rating gte(grater than equal)
db.items.find({rating : {$gt:4.6}}) // give all the objectw with rating gt(grater than 4.6 )

// And Operator
db.items.find({rating : {$gt:4.5} , price : {$gt : 22000}}) // give data which satisfy both conditions
db.items.find({rating : {$lt:4.5} , price : {$gt : 22000}}) // give data which satisfy both conditions

// OR operator
db.items.find( { $or : [ {rating : {$lt:4.6} , price : {$gt : 22000}}] } ) // give data which satisfy one  conditions out of both

db.items.find({rating : {$gt : 4.5}} , {rating : 1}) // rating =1 means it show only rating  , and other items are set to false , not show 
db.items.find({rating : {$gt : 4.5}} , {rating : 1 , qty : 1}) // shwo rating and quantatiy





// Deleting data form the database
show dbs
use harryKart
show collections
db.items.deleteOne({rating : 4.6}) // delete first object if there are multiple matchine entiries rating with 4.6
db.items.deleteMany({rating : 4.5}) // delte all objects with rating 4.5


// CRUD : create , read , update and delete . It is accepting to every database

// Updating Data in teh database : 

db.items2.updateOne({name : "relme 9pros"} , {$set : {price : 2}})  //first parameter is filter , second parameter is update values 
//  update first object with filter name : "relme 9pros " ,  change its price to 2
db.items.updateMany({name : "relme 9pros"} , {$set : {price : 3, rating : 1, qty : 10}}) 


// Use MongoDB Compass for directe operation without command line



// How to use MongoDb with Nodejs : mongoose Node js

 