/*
JavaScript:1995

ECMA Script:
    ES2 :   1997
    ES3 :   1998
    ES4 :   1999
    ES5 :   2009
    ---------------------------
    ES6 :   2015
    ECMA Script 2016
    ECMA Script 2017
    ECMA Script 2018
    ECMA Script 2019
    ECMA Script 2020
    ECMA Script 2021
*/
/*
ES6 new Features:
    1. let
    2. const
    3. Fat Arrow function
    4. MAP
    5. SET
    6. FOR OF
    7. classes
    8. Promises
    9. Default Parameters in functions
    10. string.include()
    11. string.startswith()
    12. string.endswith()
    13. Array Destructuring
    14. rest and spread operator(...)
    15. Template Literals String
        `a = ${a}`
    16. Generators
    17. Async/await
    18. Array.from()
    19. Array.keys(),values(),enteries()
    20. Array.find()
    21. Array.findIndex()
    22. New Math Methods
    23. Number Properties
    24. New Number Methods
    25. New Global Methods
    26. Iterables Object.entries
    27. JavaScript Modules
    28. use strict
 */
/*
    Rest Operator: allows a function to accept an indefinte
    number of arguments as an array
*/

// function sample(a,b,...x){
//     console.log(a,b,x)
// }
// sample(10,20)
// sample(10,20,30)
// sample(10,20,30,40)
// sample(10,20,30,40,50)
// sample(10,20,30,40,50,60)
// sample(10,20,30,40,50,60,70)
// sample(10,20,30,40,50,60,70,80)
// sample(10,20,30,40,50,60,70,80,90)
// sample(10,20,30,40,50,60,70,80,90,100)


/*
    spread operator:Spread operator allows an iterable to expand
    in places where 0+ arguments are expected. It is mostly used
    in the variable array where there is more than 1 values are 
    expected. It allows us the privilege to obtain a list of
    parameters from an array. Syntax of Spread operator is same as 
    Rest parameter but it works completely opposite of it.
*/

// function sample(a,b,c,d,e){
//     console.log(`a = ${a} b = ${b} c = ${c} d = ${d} and e = ${e}`)
// }
// var arr = [10,20,30,40,50]
// sample(...arr)

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     salary:98500
// }
// var a = {...emp}
// console.log(emp)
// console.log(a)
// a.salary = 90000
// console.log(emp)
// console.log(a)

// function* sample(){
//     console.log("Hello World1")
//     yield 1 
//     console.log("Hello World2")
//     yield 2
//     console.log("Hello World3")
//     yield 3
//     console.log("Hello World4")
//     yield 4
//     console.log("Hello World5")
//     yield 5
// }
// for(let item of sample())
// console.log(item)


/*
    ECMAScript 2016:
    JavaScript Exponentiation (**)
    JavaScript Exponentiation assignment (**=)
    JavaScript Array.prototype.includes
 */

/*
    ECMAScript 2017:
    JavaScript String padding
    JavaScript Object.entries
    JavaScript Object.values,keys
    JavaScript async functions
    JavaScript shared memory
 */

// var a = "Ducat Education Noida"
// var b = a.padStart(50,"-")
// var c = a.padEnd(50,"-")
// console.log(b)
// console.log(c)

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:98500,
//     city:"Noida",
//     state:"Up"
// }
// console.log(Object.keys(emp))
// console.log(Object.values(emp))
// console.log(Object.entries(emp))

/*
    ECMAScript 2018
    Asynchronous Iteration
    Promise Finally
    Object Rest Properties
    New RegExp Features
*/

//Asynchronous Iterations
// for(let i=1;i<=10;i++){
//     if(i%3==0){
//         setTimeout(()=>{
//             console.log(`Hello World ${i}`)
//         },2000)
//     }
//     else
//     console.log(`Hello World ${i}`)
// }

//Promise finally
// var p = new Promise((res,rej)=>{
//     setTimeout(() => {
//         // res("Promise is Resolved")
//         rej("Promise is Rejected")
//     }, 2000);
// })
// p
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Finally Called")
// })



//Object Rest Properties
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:98500,
//     city:"Noida",
//     state:"UP"
// }
// var {id,name,...x} = emp
// console.log(id)
// console.log(name)
// console.log(x)


/*
    ECMAScript 2019
    Array.prototype.{flat,flatMap}
    Object.fromEntries
    String.prototype.{trimStart, trimEnd}
    Well-formed JSON.stringify
    Function.prototype.toString
    Symbol.prototype.description
*/

var a = [10,20,30,40,[50,60,70],[80,90,100]]
console.log(a.flat(1))

// console.log(a.flat(1).map(item=>item*5))


/*
 ECMAScript 2020
 BigInt
 Dynamic import
 Nullish Coalescing
 Optional Chaining
 Promise.allSettled
 String#matchAll
 global This
 Module Namespace Exports
 Well defined for-in order
 import.meta
 */

//console.log(12345678910111213141512151515151515155555555555555556656565656565656565656565565656n);

// var num = 50000n
// var f = 1n
// for(let i=num;i>=1;i--){
//     f=f*i
// }
// console.log(f)
/*
 Nullish Coalescing(??)
    syntax:
        statement1??statemnet2
*/
// undefined??console.log("Hello World")

//optional Chaining
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan"
// }
// console.log(emp.id??0)
// console.log(emp.name??"unknown")
// console.log(emp.salary??0)

// var p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise1 is Resolved")
//         rej("Promise1 is Rejected")
//     },1000)
// })
// var p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("Promise2 is Resolved")
//         rej("Promise2 is Rejected")
//     },2000)
// })
// var p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise3 is Resolved")
//         rej("Promise3 is Rejected")
//     },3000)
// })
// Promise.allSettled([p1,p2,p3])
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)
// })


//ECMA 2021
//logical short Hand Operator i.e a=a&&b i.e a&&=b
//numeric separation    i. 1_000_000
//promise any

// var p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("Promise1 is Resolved")
//         rej("Promise1 is Rejected")
//     },1000)
// })
// var p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("Promise2 is Resolved")
//         rej("Promise2 is Rejected")
//     },2000)
// })
// var p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise3 is Resolved")
//         rej("Promise3 is Rejected")
//     },3000)
// })
// Promise.any([p1,p2,p3])
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)
// })

//Private class methods
// class Sample{
//     #show(){
//         console.log("In show method");
//     }
//     display(){
//         console.log("In public method");
//         this.#show()
//     }
// }
// var x = new Sample()
// x.display()


//Private Getters and Setters