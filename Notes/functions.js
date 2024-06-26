/**
 * function:
 * function is a building block on any program by which we can divide
 * our large program into small parts
 * or
 * function is group of statements
 * or function is a self contained statement block
 * 
 * Advantages of using a function:
 * 1. function provide a feature of code reusability
 * 2. function decrease instruction  space of a program
 * 3. function decrease data space of a program
 * 4. function increase code readability
 * 

* Note1: a function can't access variables defined in other function
       directly to do so we have to use concept of arguments and
       return value
Note2: a function can access variables defines in global scope
       and vice versa not true


* types of functions on basis of arguments and return value
* 1. function without return value without parameter
* 2. function with return value without parameter
* 3. function without return value with parameter
* 4. function with return value with parameter

syntax:
    function functionName(paramerters){
        --------
        --------
        number of Statements
        --------
        --------
    }
    functionName(arguments)
 */


//sample function
// function sample(){
//     console.log("In sample function")
// }
// console.log("in Main Scope")
// sample()
// console.log("Back to Main Scope")




//function call within function

// function fun1(){
//     console.log("In fun1 function")
//     fun2()
//     console.log("Back to fun1 function")
// }
// function fun2(){
//     console.log("In fun2 function")
//     fun3()
//     console.log("Back to fun2 function")
// }
// function fun3(){
//     console.log("In fun3 function")
// }
// console.log("In Main Global Scope")
// fun1()
// console.log("Back to Main Global Scope")

// 1. function without return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     console.log(`sum = ${sum}`)
// }
// function sample(){
//     add()
// }
// sample()


// 2. function with return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// function sample(){
//     var s = add()
//     console.log(`sum = ${s}`)
// }
// sample()



// 3. function without return value with parameter
// function add(x,y){              //parameters or formal parameters
//     var sum = x+y   
//     console.log(`sum = ${sum}`)
// }
// function sample(){
//     var a = 10
//     var b = 20
//     add(a,b)                    //arguments or actual parameter
// }
// sample()



// 4. function with return value with parameter
// function add(x,y){              
//     var sum = x+y   
//     return sum
// }

// function sample(){
//     var a = 10
//     var b = 20
//     var s = add(a,b)                    
//     console.log(`sum = ${s}`)
// }
// sample()

// function sumDigit(num){
//     var sum = 0
//     while(num!=0){
//         let r = num%10
//         sum = sum+r
//         num = parseInt(num/10)
//     }
//     return sum
// }
// console.log(sumDigit(123))
// console.log(sumDigit(12345))
// console.log(sumDigit(14785))
// console.log(sumDigit(1478965))
// console.log(sumDigit(156498))
// console.log(sumDigit(881457656))


//default parameters
// function sample(a=0,b=0,c=0){
//     console.log(`a = ${a} b = ${b} and c = ${c}`)
// }
// sample(10,20,30)
// sample(10,20)
// sample(10)
// sample()

// ******************Important Topic ******************

//function returing an Array
// function sample(){
//     return [10,20,30,40,50]
// }
// console.log(sample())


//regular function

// function sample(){
//     console.log("In sample function")
// }
// sample()

// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// console.log(add())

// function add(x,y){
//     return x+y
// }
// console.log(add(10,20))


// ******************Important Topic ******************


//anonymous function
// var sample = function(){
//     console.log("In sample function")
// }
// sample()

// var add = function(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// console.log(add())

// var add = function(x,y){
//     return x+y
// }
// console.log(add(10,20))

//arrow function or fat arrow function
// var sample = ()=> console.log("In sample function")
// sample()

// var add = ()=>{
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// console.log(add())

// var add = (x,y)=> x+y
// console.log(add(10,20))


//storage class
/**     
var             function level
let             block level
const           block level
no keyword      global
 */

// function sample(){
//     if(true){
//         a = 10  //global
//         var b = 20
//         let c = 30
//         const d = 40
//         console.log(`In if block of sample a = ${a} b = ${b} c = ${c} and d = ${d}`)
//     }
//     console.log(`Outside if block of sample a = ${a} b = ${b}`)
// }
// sample()
// console.log(`Outside of sample a = ${a}`)
// function example(){
//     console.log(`In example a = ${a}`)
// }
// example()



//Recursion: when function call itself
// var a = 0
// function sample() {
//        a++
//        console.log("In sample function")
//        if(a<5)
//        sample()
//        console.log("Back to sample function")
// }
// console.log("In Main Global Scope")
// sample()
// console.log("Back to Main Global Scope")




function fact(num){
       if(num<=1)
       return 1
       else
       return num*fact(num-1)
}
console.log(fact(6))


