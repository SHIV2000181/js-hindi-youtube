const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true;
        // error = false;
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()


// async function getAllUser() {
//      try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//      } catch (error) {
//         console.log("E: ", error);
        
//      }
      
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users') 
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));