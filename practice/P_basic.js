/*
WAP to print area of circle     :   area=3.14*r*r
WAP to print area of Rectangle  :   area=l*b
WAP to print area of cuboid     :   2*(l*b + b*h + h*l)
WAP to print area of Right Angle Triangle   :   area =(base*height)/2
WAP to print area of Square     :   area = side*side
WAP to swap value of two variables
WAP to calculate temp. in F from C i.e f =  c*9/5+32
WAP to calculate temp. in C from F i.e c =  (f-32)*5/9
 */

/* 
var r =  5
var area = 3.14 * r * r

console.log("Area of circle :", area)


let l = 10
let b = 20
let h = 30
var area = l*b

console.log("Area of the Rectangle : ",area);

var area = 2*(l*b + b*h + h*l)
console.log("Area of cubeboid", area);

var base = 10
var height = 20
var area = (base*height)/2

console.log("area of Right Angle Triangle ",area);


var side = 5
var area = side*side

console.log('arae of square : ',area);


var x = 10
var y = 20
console.log(`
    Number before swap 
    x = ${x}
    y = ${y}        
`)  ;

// var temp = x
// x = y
// y = temp

x = x + y   // x + y = 30
y = x - y   // x - y = 30 - 20 = 10
x = x - y   // x - y = 30 - 10 = 20
console.log(`
    Number After swap 
    x = ${x}
    y = ${y}        
`)  ;

*/

/* 

console.log(10+20)
console.log(10+"20")
console.log(10+"Hello World")


console.log(10-20)
console.log(10-"20")
console.log("10"-"20")
console.log(10-"Hello World")


console.log(10*20)
console.log(10*"20")
console.log("10"*"20")
console.log(10*"Hello World")


console.log(10/20)
console.log(10/"20")
console.log("10"/"20")
console.log(10/"Hello World")

console.log(10**2)
console.log(10**"2")
console.log("10"**"2")
console.log(10**"Hello World")

*/


// var num = 251

// num % 2 == 0 ? console.log(`${num} is even`):console.log(`${num} is odd`);

// var num = parseInt(prompt("Enter the number : "))
// num % 2 == 0? 
// document.write(`${num} is even`):
// document.write(`${num} is odd`);

/* 
var n = parseInt(num * 0.5)

n*n == num?
document.write(`${num} is prefect Square number ` ):
document.write(`${num} is not a prefect Square number ` );
*/

/** 
var a = 15
var b = a--     //b=15  a=14
var c = --a     //a=13  c=13
var d = a++     //d=13  a=14
var e = ++a     //a=15  e=15
--a             //a=14
a--             //a=13
console.log(a,b,c,d,e)
*/
// var a = 10
// var b = --a - a--
// console.log(a,b)

// *************************Flow Control Satement ******************
/*
if (false){
    console.log("Hello World!!");
    console.log("Hello World!!");
    console.log("Hello World!!");
}
console.log("Kunal");
*/
/*

var age = parseInt(prompt("Enter the Number : "))
if (age >= 18)
document.write("person can vote")
else
document.write("Person  can't Vote")

*/

/* Find the greatest number among 3 three 
var a = parseInt(prompt("Enter the first Number : "))
var b = parseInt(prompt("Enter the second Number : "))
var c = parseInt(prompt("Enter the third Number : "))

if (a>b){
    if (a>c){
        document.write(`${a} is the greatest number. `)
    }else{
        document.write(`{c} is the greatest number. `)
    }
}
else{
    if (b>c){
        document.write(`${b} is the greatest number`)
    }else{
        document.write(`${c} is the greatest number`)
    }
}*/


/* 
// Write a program of find leap year or not

var year = parseInt(prompt("Enter the year : "))
if (year % 100 == 0){
    if (year % 400 == 0){
        document.write(`${year} is leap year`)
    }else{
        document.write(`${year} is not leap year`)
    }
}else{
    if(year % 4 == 0){
        document.write(`${year} is leap year`)
    }else{
        document.write(`${year} is not leap year`)
    }
}
*/



/* 
var  year = parseInt(prompt("Enter year : "))

if (year % 400 == 0){
    document.write(`${yaer} is a leap year.`)
}
else if (year % 4 == 0 && year % 100 != 0){
    document.write(`${year} is a leap year`)
}else{
    document.write(`${year} is not a leap year`)
}
*/

/* 
var  year = parseInt(prompt("Enter year : "))

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
document.write(`${year} is a leap year. `)
else
document.write(`${year} is not a leap year. `)
*/

/* 

var ch = prompt("Enter the chararcter : ")
if (ch.length == 1){
    if (ch >= 'a' && ch <= "z"){
        if ( ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"){
            document.write(`${ch} is a Lower Case  Vowel. `)
        }else{
            document.write(`${ch} is a Lower Case  Consonant. `)
        }
    }
    else if (ch >= "A" && ch <= "Z"){
        if (ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U"){
            document.write(`${ch} is Upper case Vowel. `)
        }else{
            document.write(`${ch} is Upper case Consonant. `)
        }
    }
    else if ( ch >= "0"  && x <= "9"){
        document.write(`${ch} ia a Digit `)
    }
    else if (ch == " "){
        document.write(`${ch} is Space`)
    }
    else{
        document.write(`${ch} is Special character. `)
    }

}else{
    document.write(`${ch} is invalid character. `)
}
*/

/* 
var day = parseInt(prompt("Enter the day number : "))

if (day == 1){
    document.write(`Monday`)
}
else if (day == 2){
    document.write(`Tuesday`)
}
else if (day == 3){
    document.write(`Wednesday`)
}
else if (day == 4){
    document.write(`Thursday`)
}
else if (day == 5){
    document.write(`Friday`)
}
else if (day == 6){
    document.write(`Saturday`)
}
else if (day == 7){
    document.write(`Sunday`)
}
else {
    document.write("Invalid number type between 1 to 7!")
}

*/

/* 

var a = Number(prompt("Enter the First Number : "))
var b = Number(prompt("Enter the second Number : "))
var ch = prompt("Press + fo addittion\n press - for Subtarction\n press * for multiplication\n press/ for Division\n press % for remainder\n press ** for power \n Enter your Choice :  ")

switch (ch) {
    case '+':
        document.write(`${a}  +  ${b} = ${a+b} `)
        break
    case '-':
        document.write(`${a}  -  ${b} = ${a-b} `)
        break 
    case '*':
        document.write(`${a}  *  ${b} = ${a*b} `)
        break

    case '/':
        document.write(`${a}  /  ${b} = ${a/b} `)
        break

    case '%':
        document.write(`${a}  %  ${b} = ${a%b} `)
        break
    
    case '**':
        document.write(`${a} ** ${b} = ${a**b} `)
        break
    
    default:
        document.write("Invalid Choice!")
}
*/

// ****************** For Loop **************************


// for (let i = 1; i <= 10; i++){
//     console.log(`Hello World ${i}`);
// }

// for (let i = 10 ; i >= 1; i--){
//     console.log(`Hello ${i}`);
// }


// for (var i = 10; i; i--){
//     console.log(`Hello World ${i}`);
// }

/* 
var i = 1
for (;;){
    if (i >= 10)
    break
    console.log(`Hello world ${i}`);
    i++ 
}
*/

/* 
var num = parseInt(prompt("Enter the number : "))
var sum = 0

for(let i = 1; i <= num/2; i++){
    if(num % i == 0){
        sum += i
    }
}

if (sum == num){
    document.write(`${sum} is Perfact Number.`)
}else{
    document.write(`${sum} is not a Perfact Number.`)
}
*/

// ********************* Question Based on Loop *************

/* 
//1. WAP to print sum of Even and Odd Numbers in specific Range

var x = parseInt(prompt("Enter the number range start: "))
var y = parseInt(prompt("Enter the number range end: "))
var sum_even = 0
var sum_odd = 0

for (let i = x; i <= y; i++){
    if (i % 2 == 0){
        sum_even += 1
    }else{
        sum_odd += 1
    }
}
document.write(`sum of the Even Number = ${sum_even}`)
document.write(`<br>sum of the Odd Number = ${sum_odd}`)
*/

/* 

// 2. WAP to print factorial of any specific number

var num = parseInt(prompt("Enter the number : "))
var fact = 1

for ( let i = 1; i <= num; i++){
    fact *= i
}
document.write(`Factorial of ${num} is ${fact}`)

*/


/* 
// 3. WAP to check whether a number is perfect number or not

var num = parseInt(prompt("Enter the number : "))
var sum = 0

for (let i = 0; i <= num/2; i++){
    if ( num % i == 0){
        sum += i
    }
}

if ( sum == num){
    document.write(`Number is a perfact Number`)
}else{
    document.write(`Number is not a perfact Number`)
}
*/


// 4. WAP to check whether a number is prime number or not


// var num = parseInt(prompt('Enter the Number : '))

// for (let i = 2; i <= num/2; i++ ){
//     if (num % i == 0 ){
//         document.write(`${num} is not prime number`)
//         break
//     }else{
//         document.write(`${num} is prime number. `)
//         break

//     }
// }

/* 
var num = parseInt(prompt('Enter the Number : '))
var count = 0

for (let i = 2; i <= num/2; i++ ){
    if (num % i == 0 ){
        count ++
    }
}
if (count == 0 && num  >= 2)
document.write(`${num} is prime number`)
else
document.write(`${num} is not prime number`)
*/


// **************************while loop**********************

// WAP to calculate sum of even and odd digits of a specific number


/* 
var x = parseInt(prompt("Enter the  staring number : "))
var y = parseInt(prompt("Enter the  Ending number : "))
var even_sum = 0
var odd_sum = 0

while ( x <= y ){
    if (x % 2 == 0){
        
        even_sum += x
    }else{
        odd_sum += x
        
    }

    x++
}
document.write(`sum of even number is :  ${even_sum} `)
document.write(`<br>sum of odd number is :  ${odd_sum}`)
*/


/* 
// febonacci series


var a = 0
var b = 1
var sum = a + b
var num = parseInt(prompt("Enter the last term Range of febonacci series : "))
document.write(`${a} <br>${b}`)
 while (sum <= num){
    document.write(`<br> ${sum}`)
    a = b
    b = sum
    sum = a + b
 }

*/

/* 
// sum of  Digit 

var num = parseInt(prompt("Enter the Digit : "))
var sum = 0
document.write(`Given digit = ${num}`)

while (num != 0){
    var r = num % 10
    sum = sum + r
    num = parseInt(num/10)
}
document.write(`<br> sum of Digit = ${sum}`)
*/



/* 
//2. WAP to count even and odd digits in a number

var num = parseInt(prompt("Enter the number : "))
var count_even = 0
var count_odd = 0
var i = 1

while (i<=num){
    if (i % 2 == 0){
        count_even += 1
    }else{
        count_odd += 1
    }
    i++
}
document.write(`There are ${count_even} even in the range`)
document.write(`<br>There are ${count_odd} odd in the range`)
*/

/* 

// 3. WAP to reverse a number

var num =  parseInt(prompt("Enter the number : "))
var n = num
var rev = 0

while (num != 0){
    var rem = num % 10 
    rev = 10*(rev) + rem
    num = parseInt(num/10)
}

if ( rev == n){
    document.write(`${rev} is a revese number`)
    
}else{
    document.write(`${rev} is not a revese number`)
}
*/

// 4. WAP to check whether a number is NEON number or not (1,9)


/* 

var num = parseInt(prompt("Enter the number : "))
var sq = num * num
var neon = 0
while (sq != 0){
    var rem = num % 10
    neon = 10*neon + rem
    sq = parseInt(sq/10)
}
if (num*num == neon)
document.write(`${num} is neon number `)
else
document.write(`${num} is not neon number ${neon}.`)

*/

/* 
// 5. WAP to check whether a number is Armstrong number or not

var num =  parseInt(prompt("Enter the number "))
var n = num
var arm = 0
var len = String(num).length
console.log(len);

while(num != 0){
    var rem = num % 10
    arm = arm + rem**len
    num = parseInt(num/10)

}
if (n == arm){
    document.write(`${n} is armstrong number`)
}else{
    document.write(`${n} is not armstrong number`);
}

*/


/* 

//  6. WAP to check whether a number is Palindrome Number or not (121,1234321)

let num = 121  //parseInt(prompt("Enter the number : "))
let n = num
let pal = 0

while(num != 0){
    let r = num % 10
    // console.log(r);
    pal = 10*pal + r
    console.log(pal);
    num = parseInt(num/2)
}
if (n == pal){
    // document.write(`${n} is palindrome number.`)
    console.log("plaindrome",pal,n);
}else{
    // document.write(`${n} is not palindrome number.`)
    console.log(" not plaindrome",pal,n);
}
*/



//  WAP to check whether a number is Magical Number or not (81,1458,1729)


var num = parseInt(prompt("Enter the number :"))
var sum = 0
var rev = 0
var n = num

while ( num != 0){
    let r = num % 10 
    sum  =  sum + r
    num = parseInt(num/2 )
}

num = sum
while (num != 0){
    let rem = num % 10
    rev =  rev + 10*r
    num = parseInt(num / 10)
}

if (sum * rev  == n)
document.write(`${n} is a magical Number.`)
else
document.write(`${n} is not a magical number`)




