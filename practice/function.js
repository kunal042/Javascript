/** 

function sample(){
    console.log("In a smaple function.");
}
console.log("In a main scope");
sample()
console.log("Back to main Scope");
*/

/* 
function fun1(){
    console.log("In fun1 function");
    fun2()
    console.log("Back to fun1 function1");
}
function fun2(){
    console.log("In fun2 function");
    fun3()
    console.log("Back to fun2 function1");
}
function fun3(){
    console.log("In fun3 function");

}
console.log("In main Global Scope");
fun1()
console.log("Back to main Global Scope");
*/

/** 
function add(){
    var a = 5
    var b = 10
    var sum = a + b
    console.log(`${a} + ${b} = ${sum}`);
}

function sample(){
    add()
}

sample()
*/

/** 

function add(){
    var a = 5
    var b = 10
    var sum = a + b
    // return console.log(`${a} + ${b} = ${sum}`);
    return sum
}

console.log(`${add()}`);  

// function sample(){
//     add()
// }

// sample()
*/

/** 
function add(x,y){
    var sum = x + y 
    console.log(`sum = ${sum}`);
}

// function sample(){
//     var a = 5
//     var b = 10
//     add(a,b)
// }

// sample()
add(5,10)
*/

/** 
function add(x, y){
    var sum = x + y
    return sum
}

var a = add(5,10)
console.log(a);
*/

/** 
function sumOfDigit(num){
    var sum = 0
    while(num != 0){
        let r = num % 10
        sum = sum + r
        num = parseInt(num /10)
    }
    return sum
}

console.log(sumOfDigit(123));
console.log(sumOfDigit(45678));
console.log(sumOfDigit(987654));
console.log(sumOfDigit(12345));
console.log(sumOfDigit(987));
console.log(sumOfDigit(4567));
*/


// ************* fat arrow function *****************

/* 

var sample = ()=>console.log("in a sample");
sample()

var add = ()=>{
    var a = 5
    var b = 10
    var sum = a + b
    return sum
}

console.log(add());
*/

// var add = (x,y)=> x + y
// console.log(add(10,5));

/** 

function fact(num){
    if (num <= 1){
        return 1
    }else{
        return num * fact(num-1)
    }
}

console.log(fact(5));
*/

// Prime number 

function prime(num){
    
    flag = true
    for (let i=2; i <=(num**0.5); i++){
        if (num % i == 0){
           
            flag = false
        }else{
            flag = true
        }
    }
    return flag
}

console.log(prime(5));
console.log(prime(6));
console.log(prime(7));
console.log(prime(8));
console.log(prime(9));
console.log(prime(10));
console.log(prime(11));
console.log(prime(12));
// console.log(prime(10));




