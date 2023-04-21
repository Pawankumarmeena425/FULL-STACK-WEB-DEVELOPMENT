// command : mongod   -->> for run the server
// mongo for run mongodb

// Inserting data in mongodb
use harryKart
db.items.inertOne({name:"samsung 30s" , price : 23123 , rating: 4.5 , qty:223,sold:43})

db.items.inertMany([{name:"samsung 30s" , price : 23123 , rating: 4.5 , qty:223,sold:43},
{name:"relme 9pros" , price : 22433 , rating: 4.6 , qty:23,sold:43},
{name:"oppo s 54" , price : 23123 , rating: 4.5 , qty:2343,sold:43}])

