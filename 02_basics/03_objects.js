// singleton 
// Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "fuul name": "Hitesh choudhery",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginIn: ["Monday", "saturday"]

} 

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fuul name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"

// console.log(JsUser["email"]);
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());