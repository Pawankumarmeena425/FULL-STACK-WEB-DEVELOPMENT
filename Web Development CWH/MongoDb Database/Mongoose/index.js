// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/harryKart');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function () {
    // we're connected
    console.log("We are connected bro/sis.......")
})

// for code take referance mongoose node.js official documents


// Schema is used to define which field is which type : use for creating templates
const kittySchema = new mongoose.Schema({
    name: String ,
 

});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name ? 'Meow name is ' + this.name  : 'I don\'t have a name';
    console.log(greeting);
  };
  
const Kitten = mongoose.model('Kitten', kittySchema);  // convert Schema into modal

const silence = new Kitten({ name: 'Silence' }); // create objects creating corrosponding to the modal
console.log(silence.name); // 'Silence'
// silence.speak();

const pawanKitty = new Kitten({ name: 'pawan ' ,  decraption : 'this is a mongoose tutorial , and where we learn how to save objects in the Nodejs' });
// decraption will not add , because we define Schema , and there we only set name : String format

silence.save(); // add objects to the collection 
// But in which collections --->> when we created modal , and give  modal name , it automatically create a collection name with purlar form 
// modal name 'kitten'  -->> create collections name with 'kittens'
pawanKitty.save();

 
// how to find data from collection
const kittens =  Kitten.find({name : "pawan"});
console.log(kittens);
