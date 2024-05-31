/*
Event Propagation mode determines in which order the element
receive the event

1. Event Capturing: first parent to last child
2. Event Bubbling(default) : from last child to first parent
*/



//Event Loop
/*
function currying : it is a technique of evaluating function
                    with mutliple argumnets into sequance of
                    function with single argument

                    i.e when a function,instead of taking all 
                    argumemnts at one time,it takes the first 
                    argument and return a new function which 
                    takes the second argument and return a new
                    function which takes the third one and so on
*/

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             return function(num4){
//                 return function(num5){
//                     return num1+num2+num3+num4+num5
//                 }   
//             }
//         }
//     }
// }
// var sum = (num1)=>(num2)=>(num3)=>(num4)=>(num5)=>num1+num2+num3+num4+num5
// console.log(sum(100)(200)(300)(400)(500));


/*
higher order functions and callback functions:
higher order function : a fuction is called higher order 
                        function which takes a function
                        a arguments
callback function :     a fuction is called callback 
                        function which is passed as argument
                        in another function
*/
/*
here find() findIndex() map() and filter() function are
higher Order function and check function is a callback function
 */

// var a = [12,13,14,15,65,98,48,87,97,45,67,13,25,19,98,48,75,15]
// function check(item){
//     var flag = false
//     for(let i=2;i<=item**0.5;i++){
//         if(item%i==0){
//             flag = true
//             break
//         }
//     }
//     if(flag===false && item>=2)
//     return true
//     else
//     return false
// }
// function myFind(arr,fun){   
//     for(let item of arr){
//         if(fun(item))
//         return item
//     }
//     return undefined
// }
// function myFindIndex(arr,fun){   
//     for(let index in arr){
//         if(fun(arr[index]))
//         return index
//     }
//     return -1
// }
// function myMap(arr,fun){   
//     var output = []
//     for(let item of arr){
//         output.push(fun(item))
//     }
//     return output
// }
// function myFilter(arr,fun){   
//     var output = []
//     for(let item of arr){
//         if(fun(item))
//         output.push(item)
//     }
//     return output
// }
// console.log(a.find(check))
// console.log(myFind(a,check))
// console.log(a.findIndex(check))
// console.log(myFindIndex(a,check))
// console.log(a.map(check))
// console.log(myMap(a,check))
// console.log(a.filter(check))
// console.log(myFilter(a,check))


/*
JSON and AJAX

AJAX: Asynchronous JavaScript and XML

it is just a combination of XMLHttpRequest object and HTML DOM

XMLHttpResquest : an object which helps us to communicate 
                  websites to transfer data

How AJAX Works:
1. An Event Occur like button click or form submit etc
2. XMLHttpRequest object is created by JS
3. XMLHttpRequest send a request to a server
4. Server process the request
5. server send back response
6. response read by js
7. Proper action taken by js

XMLHttpRequest object methods:
1. new XMLHttpRequest() : to create a new XMLHttpRequest object
2. abort()              : cancel the current request
3. getAllResponseHeaders() : return all reponse headers
4. getResponeHeader()      : return any particular header
5. open()               : it generate a request
                            paramters:
                            1. method : get post put patch delete etc
                            2. url
                            3. async
                            4. user     (optional)
                            5. password (optional)
6. send()               :   it send a request to the server
                            and use get method by default
7. send(string)         :   it send a request to the server
                            and use post method by default

Response Text:
    1. XML data             :   responseXML
    2. json data/text data  :   responseText
 
JSON(JavScript Object Notation):
        it is a text format to transport the data

XML:
<employee>
    <eid>1011</eid>
    <name>Nitin Chauhan</name>
    <dsg>Trainer</dsg>
    <salary>50000</salary>
    <city>Noida</city>
    <state>UP</state>
</employee>

JSON:
    employee={
        "id":1011,
        "name":"Nitin Chauhan",
        "dsg":"Trainer",
        "salary":50000,
        "city":"Noida",
        "State":"UP"
    }

Python:
    employee={
        'id':1011,
        'name':'Nitin Chauhan',
        'dsg':'Trainer',
        'salary':50000,
        'city':'Noida',
        'State':'UP'
    }

JSON Datatype:
    1. boolean
    2. array
    3. number
    4. string
    5. object
    6. null

datatype we can't use in JSON:
    1. undefined
    2. date


1. how to convert JSON into JS object

    JSON.parse() is used to convert JSON data into JS object

syntax:
    jsObject = JSON.parse(jsonData)

2. how to convert JS object into JSON
    JSON.stringify()
syntax:
    jSOnData = JSON.stringify(jsData)
*/
//CallBack Hell
// setTimeout(()=>{
//     console.log("Hello World1")
//     setTimeout(()=>{
//         console.log("Hello World2")
//         setTimeout(()=>{
//             console.log("Hello World3")
//             setTimeout(()=>{
//                 console.log("Hello World4")
//                 setTimeout(()=>{
//                     console.log("Hello World5")
//                 },1000)
//             },1000)
//         },1000)
//     },1000)    
// },1000)

/*
promise :  ->   a js object which link producing code with
                consuming code
           ->   promises are used to handle asynchronous operations
                in JS.
           ->   they are easy to manage when dealing with multiple
                asynchronous operations where callback can create
                call back hell leading to unmanagable code
producing Code : a code that can tak some time to execute
consuming Code : a code that must wait for the result

promise State:
    1. Promise Produce
    2. Panding
    3. Resolve/Reject
*/


//producing code
var p1 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("Promise1 is Resolved")
        rej("Promise1 is Rejected")
    }, 2000)
})
var p2 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("Promise2 is Resolved")
        rej("Promise2 is Rejected")
    }, 4000)
})
var p3 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("Promise3 is Resolved")
        rej("Promise3 is Rejected")
    }, 6000)
})

//consuming code
// p1
//     .then((data) => {
//         console.log(data)
//         p2
//             .then((data) => {
//                 console.log(data)
//                 p3
//                     .then((data) => {
//                         console.log(data)
//                     })
//                     .catch((error) => {
//                         console.log(error)
//                     })
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     })
//     .catch((error) => {
//         console.log(error)
//     })



//async\await and exception handling
async function getPromise() {
    try {
        console.log(await p1)
        console.log(await p2)
        console.log(await p3)
    } catch (error) {
        console.log(error)
        try {
            console.log(await p2)
        } catch (error) {
            console.log(error)
            try {
                console.log(await p3)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
getPromise()