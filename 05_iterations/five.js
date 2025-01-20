//for each loop

// array.forEach(element => {
    
// });


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);

// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);    //function ka referece dena hai like :(printMe). 
//                               //function ko execute nhi karna hai like: (printMe())



// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})