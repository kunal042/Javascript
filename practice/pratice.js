// console.log("hello");

var a = 19
a = 10
// console.log(a);

// let b = 10
// b = 20
// console.log(b);

// const c = 10
// c = 34
// console.log(10);

// WAP to calculate temp. in C from F i.e c =  (f-32)/5/9


// const f = 45
// console.log(`
// Frenheight : ${((f-32)/5/9).toFixed(2)}
// `);

// console.log(10+20)
// console.log(10 + "20")
// console.log(10+"Hello World")

// console.log('////////////////////////');

// console.log("20" + + 20);
// console.log("20" + + "20");
// console.log(20 + +"20");



// console.log(10-20)
// console.log(10-"20")
// console.log("10"-"20")
// console.log(10-"Hello World")

// // console.log('////////////////////////');

// console.log(10- -"20")
// console.log("10"- -"20")
// console.log(10- -"Hello World")


// console.log(10/20)
// console.log(10/"20")
// console.log("10"/"20")
// console.log(10/"Hello World")


// console.log(10%20)
// console.log(10%"20")
// console.log("10"%"20")
// console.log(10%"Hello World")



// console.log(10<20)
// console.log(10<=20)
// console.log(10>20)
// console.log(10>=20)

// console.log(10!=10) 
// console.log(10!= "10")
// console.log(10!=10.0)
// console.log(10!=20)

// console.log(10!==10) 
// console.log(10!=="10")
// console.log(10!==10.0)
// console.log(10!==20)


// console.log(10==10)
// console.log(10=="10")
// console.log(10==20)

// console.log(10===10)
// console.log(10==="10")
// console.log(10===20)

/*
while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to reverse a number
4. WAP to check whether a number is NEON number or not
    (1,9)
5. WAP to check whether a number is Armstrong number or not
    (1,153,370,371,407)
6. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
7. WAP to check whether a number is Magical Number or not
    (81,1458,1729)


//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)
 */


//     var i = 100
// do{
//     console.log(`${i} Hello World`)
//     i++
// }while(i<=10)


// ********** function ********************

//  Anonymous Function

// var add = function(){
//     let a =  10
//     let b = 20
//     let sum = a + b
//     return sum
// }

// console.log(add());


// var add = function(x,y){
//     let sum = x + y
//     // return sum

//     console.log(sum);
// }

// // console.log(add(10,20));
// add(10,20)


// Fat Array Function



// var add = ()=> {
//     let a = 10
//     let b = 10
//     let sum = a + b
//     return sum
// }


// console.log(add());

/* 
function sample(){
    console.log("This is simple Function");
}
sample()

var sample = function(){
    console.log("This is Anoymous Function");

}
sample()

var sample = ()=>{
    console.log("This is fat arrow function");
}
sample()
*/
/* 

let fab = (num)=>{

    if (num <= 1)
    return 1
    else
    return num*fab(num-1)

}

console.log(fab(5)); */

var a = 'Javascript is a scripting Language!'
// console.log(a);

// for (let i = 0; i < a.length; i++){
//     console.log(a[i]);

// }


for(let i in a){
    // console.log(a[i]);
}

// console.log(a[0]);
// console.log(a.charAt(0));



// console.log(a.charCodeAt());

for(let i in a){
    // console.log(a[i], " ", a.charCodeAt(i));
}
// console.log(a.includes("script"))

// let b = a
// console.log(b);

// var a = "kunal"
// var b = "Kumar"
// var c = "engineer"

// var d = a + b + c
// var e = a.concat(b,c)

// console.log(d);
// console.log(e);

// console.log(a.substr(5,10))
// console.log(a.substring(5,10))
// console.log(a.slice(5,10))
// console.log(a.slice(10))
// console.log(a.slice(-10))


// -------------------------Array ---------------------------

var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a);

var b = []
b.push(10)
b.push(20)
b.push(30)

// console.log(b);

for (let i in a){
    // console.log(a[i]);
}

for(let i of a){
    // console.log(i);
}


//entries() generate an iterator which contains key and value of items
var a = [10,20,30,40,50,60,70,80,90,100]
var b = a.entries()
for(let item of b){
//   console.log(item)
}

var a = [120,130,14,17,83,36,25,15,45,65,15,75,57,58,59,51,50]

function check(item){
    var flag = false
    for (let i = 2; i<item**0.5; i++){
        if (item % i == 0){
            flag = true
            break
        }
    }

    if (flag == false && item >= 2){
        return true
    }
    else{
        return false
    }
}

// console.log(a.find(check));
// console.log(a.findIndex(check));
// console.log(a.map(check));
// console.log(a.filter(check));

// console.log(a.forEach((item)=>{
//     console.log(item*5);

// }));


function fun(num, next){
    return num + next
}

// console.log(a.reduce(fun, 0));


// ----------------Objects-----------------------------------------


var emp = {
    id : 1001,
    'name' : 'kunal',
    'dsg' : 'Trainer',
    'salary' : 56789,
    'city' : 'Gurugram',
    'state' : 'Haryana'


}

// console.log(emp);


var emp = {}
emp.id = 1001
emp['name'] = "Kunal"
emp['dsg'] = 'Trianer'
emp.salary = 5678
emp.city = 'Gurugram'
emp.state = 'Haryana'

// console.log(emp);

console.log(emp.name);
console.log(emp['name']);


for(let key in emp){
    // console.log(key, "=", emp[key]);
}


// Nesting 


var emp = {
    id : 1001,
    name : 'kunal',
    dsg : 'Trainer',
    salary : 79654,
    subject : ['Mearn Stack', "Mean Stack", 'Python', 'Java' ],
    address : {
        house : 65,
        street : 'A16',
        locality  : "112100",
        city : 'gurugram',
        state : 'haryana'
      }

}

// console.log(emp);
// console.log(emp.subject);
// console.log(emp.subject[2]);


// console.log(emp.address.city);


var a = [10,20,30,40,50,60,40,50,50,50,50,60,70,80,90,10,10,10,10,20,30,40,50,60,70,80,90,100]
var b = new Set(a)

var c = Array.from(b)

console.log(a);
console.log(b);
console.log(c);


console.log(b.keys());
console.log(b.values());
console.log(b.entries());