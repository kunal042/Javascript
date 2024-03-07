const coding = ["js", "python", "java", "c", "c++", "swift"]


// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(value);



const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter( (num)=> num > 4 )
// console.log(newNums);

const newNums = myNum.filter( (num)=> {
    return num > 4} )
console.log(newNums);


const newNum = []
myNum.forEach(  (num) => {
    if (num > 4){
        newNum.push(num)
    }
} )

console.log(newNum);

const books = [
    {
        title : "Book One", 
        genre : "Fiction",
        publisher : 1981,
        edition : 2004,
    },
    
    {
        title : "Book Two", 
        genre : "Non-Fiction",
        publisher : 1983,
        edition : 2008,
    },
    
    {
        title : "Book Three", 
        genre : "Fiction",
        publisher : 1991,
        edition : 2007,
    },
    {
        title : "Book Four", 
        genre : "History",
        publisher : 1999,
        edition : 2010,
    },
    {
        title : "Book Five", 
        genre : "Science",
        publisher : 1987,
        edition : 1965,
    },
    {
        title : "Book Six", 
        genre : "History",
        publisher : 1989,
        edition : 2010,
    },
    {
        title : "Book Seven", 
        genre : "Fiction",
        publisher : 1986,
        edition : 2000,
    },
    {
        title : "Book Eight", 
        genre : "Science",
        publisher : 2011,
        edition : 2015,
    },
    
]



let userBooks = books.filter((bk) => bk.genre === 'History')
  userBooks = books.filter((bk) => { 
    return bk.publisher >= 2000 && bk.genre === 'Histroy'})

console.log(userBooks);

