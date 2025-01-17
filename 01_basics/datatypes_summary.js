// # Primitive :

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345576745231354664343356n




// Reference (Non primitive): 

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "shiv sagar yadav",
    age: 22,
}

const myFunction =function(){
    console.log("Hello world");
}


console.log(typeof bigNumber);


// https://262.ecma-international.org/5.1/#sec-11.4.3    




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//memory types
// Stack (primitive), Heap (Non-primitive)

let myYoutubename = "hiteshchaudhrydotcom"

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);



// Heap 
let userOne = {
    email: "user@goole.com",
    upi: "userOne"
}

let userTwo = userOne

console.log(userTwo);

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);