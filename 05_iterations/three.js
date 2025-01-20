//for of

// for (const element of object) {
    
// }

// ["", "", ""]   //array ke ander string
// [{}, {}, {}]   //array ke ander objects


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}


const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps  


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "france")
map.set('IN', "India")

console.log(map);

// for (const key of map) {
//     console.log(key)
    
// }

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
    
// }


const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key, value] of myObject) {      //ye vala syntex object me kam nhi karta hai 
//     console.log(key, ":-", value);          //ye keval map me kam karta hai [key, value]
    
// }


