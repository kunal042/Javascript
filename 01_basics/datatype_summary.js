// Primitive

// 7 types 

/*
String,
Number,
Boolean,
null,
undefine,
symbol,
Bigint

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);


const BigNumber = 345678987654334567n

// Reference (Non primitive)

/*
Array,
Object , function 
*/

const heroes = ["shaktiman", "naagraj", "doga"]

const detail = {
    name : "kunal",
    age : 22,
    mob : 8709198,

}

const myfunction = function(){
    // console.log("Hello World!");
}

// console.log(typeof BigNumber);
// console.log(typeof outsideTemp);

// +++++++++++++++++++++++++++++++++++++++++++

// Stack (primitve) , Heap (Non-Primitive)

let Id = "Kunal"
let newName = Id
newName = "Rahul"

console.log(Id);
console.log(newName);

let userOne = {
    email: "kunal@google.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "kunal@microsoft.com"

console.log(userOne.email);
console.log(userTwo.email);