// Object literal {}

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true ,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


//####  Constructor function


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("Chai aur code", 11, false);   //overwrite in userOne variable when do't use new keyword

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);

/* new :  when use new keyword first of all create empty new object is called instence 
then second constructor function call by new key words tnen third step this keyword ke arguments 
inject ho jate hai and then four step deliver in the function */








