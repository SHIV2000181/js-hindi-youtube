// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })


// console.log(values);    //ye return kun nhi kar rha hai (undefined)



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 ) //{} nhi lagate hai to return key word nhi likhte hai

// const newNums = myNums.filter( (num) => {    //{} layege to return key word likhana padta hai 
//     return num > 4;                         //return nhi likhege to data access nhi hoga  
// })
// console.log(newNums);



// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }

// })


// console.log(newNums);


const books = [
    {title: 'book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'book Eight', genre: 'Science', publish: 2011, edition: 2016},

];


let userBooks = books.filter( (bk) => bk.genre === 'History');

userBooks = books.filter( (bk) => {return bk.publish >= 1995} )

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);





