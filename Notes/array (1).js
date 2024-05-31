/*
  

Array: 
    -> collection of items arrangement in contiguous order
    -> can contain duplicate items
    -> can contain differnt type value
    -> it is mutable


    Note: Array index always start with ZERO
    syntax:
    var arrayObject=[item1,item2,item3,....,itemN]
 */

//1st type to create an array using array literal style
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)


//2nd type to create an array using empty array
// var a = []
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40,50,60,70,80,90,100)
// console.log(a)



// var num = parseInt(prompt("Enter the Number of Elements in Array : "))
// var a = []
// for(let i=1;i<=num;i++){
//   let input = parseInt(prompt("Enter the Item number "+i))
//   a.push(input)
// }
// document.write(`Array is ${a}`)

//3rd type : Array constructor
// var a = Array(10,20,30,40,50,60,70,80,90,100)
// console.log(a)


//Array using Loops
// var a = [10,20,30,40,50,60,70,80,90,100]

// // 1. using for Loop
// for(let i=0;i<a.length;i++){
//   console.log(a[i])
// }

// // 2. using while Loop
// let i=0
// while(i<a.length){
//   console.log(a[i])
//   i++
// }


// 3. using do while Loop
// let i=0
// do{
//   console.log(a[i])
//   i++
// }while(i<a.length)

// // 4. using for in loop
// for(let i in a){
//   console.log(a[i])
// }

// 5. using for of loop
// for(let i of a){
//   console.log(i)
// }

//toString convert an array into string and use , as separator

/*
join() convert an array into string and you can specify
         seperator bydefault join function use , as seperator
*/

// console.log(a.toString())
// console.log(a.join())
// console.log(a.join(" "))
// console.log(a.join("="))
// console.log(a.join("|"))
// console.log(a.join(":"))

/*
array: push() pop() shift() unshift() splice() delete()
push():   insert one or more then one element in last of an array
and return updated length of array
pop()     delete an element from last of an array and return deleted
array element
unshift() insert one or more then one element element in starting
of an array and return updated length of array
shift()   delete an element from first position of an array and return deleted
          array element
splice()  used to insert or delete or update elements from any
          specific position of array and return array of deleted
          elements
          syntax:
          array.splice(pos,numberOfItemToDelete,itemstoInsert)
          
  delete  : it delete an item from array and leave empty space
  */
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// console.log(a.push(110))
// console.log(a)
// console.log(a.push(120,130,140,150))
// console.log(a)

// console.log(a)
// console.log(a.pop())
// console.log(a)

// console.log(a)
// console.log(a.unshift(5))
// console.log(a)
// console.log(a.unshift(1,2,3,4))
// console.log(a)

// console.log(a)
// console.log(a.shift())
// console.log(a)


// console.log(a)
// console.log(a.splice(3,0,32,33,34,35,36))
// console.log(a)
// console.log(a.splice(3,3))
// console.log(a)

// delete a[5]
// console.log(a)


//slice() return a list of items from pos to pos
// var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// console.log(a.slice(5,10))
// console.log(a.slice(10))
// console.log(a.slice(-10))


//concat()
// var a = [1,2,3,4,5]
// var b = [10,20,30,40,50]
// var c = [100,200,300,400,500]
// var d = ["Nitin","Naman","Aman","Sumit","Ankita"]
// var e = a.concat(b,c,d)
// console.log(e)



//entries() generate an iterator which contains key and value of items
// var a = [10,20,30,40,50,60,70,80,90,100]
// var b = a.entries()
// for(let item of b){
//   console.log(item)
// }



//find()      : return the item from array which pass a text
//findIndex() : retunn the index of item from array which pass a test
//map()       : return an array of containg result for all elements of array
//filter()    : return an array of items that pass a test
  
var a = [120,130,14,17,83,36,25,15,45,65,15,75,57,58,59,51,50]
// function check(item){
//   return item%5==0
// }


// function check(item){
//   var flag = false
//   for(let i=2;i<=item**0.5;i++){
//     if(item%i==0){
//       flag=true
//       break
//     }
//   }
//   if(flag==false && item>=2)
//   return true
//   else
//   return false
// }

// console.log(a.find(check))
// console.log(a.findIndex(check))
// console.log(a.map(check))
// console.log(a.filter(check))


// console.log(a.find((item)=>item%5==0))
// console.log(a.findIndex((item)=>item%5==0))
// console.log(a.map((item)=>item%5==0))
// console.log(a.filter((item)=>item%5==0))

//forEach()

// console.log(a.forEach((item)=>{
//   console.log(item*5)
// }))


//reduce()
// function fun(num,next){
//   return num+next
// }
// console.log(a.reduce(fun,0))


//includes() return true if array conatins an item else retur false
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array
//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array

// var a = [10,20,30,20,30,30,30,40,50,60,20,30,10,20,30,40,50,60,70,80,90,100]
// console.log(a.includes(500))
// console.log(a.includes(50))
// console.log(a.indexOf(300))
// console.log(a.indexOf(30))
// console.log(a.lastIndexOf(300))
// console.log(a.lastIndexOf(30))


//reverse()
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// a.reverse()

// for(let i=0,j=a.length-1;i<j;i++,j--){
//   let temp = a[i]
//   a[i]=a[j]
//   a[j]=temp
// }

// for(let i=0;i<a.length/2;i++){
//   let temp = a[i]
//   a[i]=a[a.length-1-i]
//   a[a.length-1-i]=temp
// }

// for(let i=0;i<a.length/2;i++){
//   a[i] = a[i] + a[a.length-1-i]
//   a[a.length-1-i] = a[i] - a[a.length-1-i]
//   a[i] = a[i] - a[a.length-1-i]
// }

// console.log(a)


//sort()

var a = [15,21,32,51,54,65,84,95,15,54,100,1000,11,122,9]
// var a = ['Nitin',"Naman","Aman","Sumit","Ankit","Varun"]

// function check(x,y){
//   return x-y
// }
// console.log(a)
// a.sort(check)
// console.log(a)


// console.log(a)
// a.sort((x,y)=>x-y)
// console.log(a)

// console.log(a)
// a.sort((x,y)=>y-x)
// console.log(a)


//Array Destructuring
var a = [1001,"Nitin Chauhan","Trainer",98500,"Noida","UP"]
// console.log(`
//   Id          : ${a[0]}
//   Name        : ${a[1]}
//   Designation : ${a[2]}
//   Salary      : ${a[3]}
//   City        : ${a[4]}
//   State       : ${a[5]}
// `)

var [id,name,dsg,salary,city,state] = a
console.log(`
  Id          : ${id}
  Name        : ${name}
  Designation : ${dsg}
  Salary      : ${salary}
  City        : ${city}
  State       : ${state}
`)