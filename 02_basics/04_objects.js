// const tinderUser = new Object()  //this is a singleton object.
const tinderUser = {}   //this tis not a singleton object.


// console.log(tinderUser);
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary",
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"} 

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "hitesh.com"
    },
    {
        id: 1,
        email: "hitesh.com"
    },
    {
        id: 1,
        email: "hitesh.com"
    },
    {
        id: 1,
        email: "hitesh.com"
    },
    {
        id: 1,
        email: "hitesh.com"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //key array
// console.log(Object.values(tinderUser));  //value array
// console.log(Object.entries(tinderUser));  //her key & value ko array me convert kar deta hai

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));




const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")


//api &json

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {}

]

