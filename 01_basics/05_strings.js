const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  //Old methods

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));


const newString = gameName.substring(0, 4)  //nagative value nhi use kar skate hai
console.log(newString);

const anotherString = gameName.slice(-7, 4)  //nagative value use kar skte hai
console.log(anotherString);

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://hitesh.com /hitesh%20chaudhary"

console.log(url.replace('%20','-'))

console.log(url.includes("hitesh"))

console.log(url.includes("sunder"))

console.log(gameName.split('-'))