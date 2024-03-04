// *******************Array********************************

/* 
var a = [10,20,30,40]
console.log(a);

a.push(50)
a.push(60)
console.log(a);
*/


/* 
var num = 5
var a = []
for (let i = 0; i<=num; i++){
    let input = parseInt(prompt("enter the number : "))
    a.push(input)
}
document.write(`Array is ${a}`)
*/

//  var a = Array(10,20,30,40,50)
// console.log(a);


// for (let i = 0; i<a.length; i++){
//     console.log(a[i]);
// }

// for (let i in a){
//     console.log(a[i]);
// }
// for (let i of a){
//     console.log(a[i]);
// }

// var a = "javascript"
// console.log( a.toString(), typeof  a.toString());
// a.push("kunal")
// console.log(a);
// a.pop()
// console.log(a);
// a.unshift(5)
// console.log(a);
// a.unshift(1,2,3,4)
// console.log(a);
// a.shift(1,2,3,4)
// console.log(a);
// a.shift(1,2,3,4)
// console.log(a);


// a.splice(2,2,32,33)
// console.log(a);
/* 
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


console.log(a.slice(1,-10));
console.log(a.slice(5,10));
console.log(a.slice(1,-10));
*/

/* 

var a = [10,20,30]
var b = [40,50,60]
var c = [70,80,90]
var d = ["kunal", "rahul", "aman"]

console.log(a.concat(b,c,d));
*/


// ****************************ENTRIES***************

/** 
var a = [10,20,30,40,50,60,70,80,90,100]
var b = a.entries()
for (let item of b){
    console.log(item);
}

for (let items in a){
    console.log(a[items]);
}

*/

var arr =  [120,130,14,17,83,36,25,15,45,65,15,75,57,58,59,51,50]

// console.log(arr);
function check(item){
    return item % 5 == 0
}

for(let i in arr){
    var a = check(arr[i])
    console.log(a);
}