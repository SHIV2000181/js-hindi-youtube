// var c = 3000  //globle scope
// d = 40 //globle scope

let a = 300

if(true){
    let a = 10   //block scope
    const b = 20   //block scope
    // var c = 30 //globle scope
    // console.log("INNER: ", a)
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// +++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

// addone(5)


addTwo(8)

const addTwo = function(num){
    return num + 1
}

// addTwo(8)

