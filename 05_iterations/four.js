//for in loop


// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key)
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
     
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
   
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('fr', "France")
map.set('IN', "India")


// for (const key in map) {      //for in loop me out put kuchha nhi ata hai beacause map is not iterable
//     console.log(key);          //aur error bhi show nhi karega
               
// }


