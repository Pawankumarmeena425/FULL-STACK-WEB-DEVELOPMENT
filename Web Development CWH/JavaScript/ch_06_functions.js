console.log("This is tutorial for javascript fuctions")
// Function implements DRY concepts 
function greet(name , greetText = "Greeting from JavaScript"){ // if no values is pass for greetText , then default value will be assign
    console.log(name + " , Hello Boy "+greetText);
}
let greetText = "Good Morning";
greet("pawan",greetText);
greet("Rakesh",greetText);
greet("Shon");

function sum(a,b,c){
    let d = a+b+c;
    return d;
    console.log("Function is returned"); // this line will never execute
}
console.log(sum(3,5,7));