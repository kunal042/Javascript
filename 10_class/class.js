
// class smaple{
//     show(){
//         console.log("This is sample function!!");
//     }
//     display(){
//         console.log("This is display function!!");
//     }
// }

// var x = new smaple()
// x.show()
// x.display()


// class Add{
//     get(x,y){
//         this.a = x
//         this.b = y
//         this.s = this.a + this.b
//     }

//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.s}`);
//     }
// }


// var obj1 = new Add()
// var obj2 = new Add()
// obj1.get(100,200)
// obj1.display()
// obj2.display()



// class Add1{
//     constructor(x,y){
//         this.a = x
//         this.b = y
//         this.s = this.a + this.b
//     }

//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.s}`);
//     }
// }


// var obj1 = new Add1(10,20)
// var obj2 = new Add()

// obj1.display()
// obj2.display()


// class Parent{
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
//     display(){
//         console.log("In display() of Parent Class")
//     }
// }
// class Child extends Parent{
//     show2(){
//         console.log("In show2() of Child Class")
//     }
//     display(){
//         console.log("In display() of Child Class")
//     }
// }
// var x = new Child()
// x.show1()
// x.show2()
// x.display()




// class Sample{
//     constructor(){
//         console.log("Constructing Class Sample")
//     }
//     show1(){
//         console.log("In show1() of Sample Class")
//     }
// }
// class Example2 extends Sample{
//     show2(){
//         console.log("In show2() of Example Class")
//     }
// }
// var obj = new Example2()
// obj.show1()
// obj.show2()







// class Sample2{
//     show1(){
//         console.log("In show1() of Sample Class")
//     }
// }
// class Example extends Sample2{
//     constructor(){
//         super()
//         console.log("Constructing Class Example")
//     }
//     show2(){
//         console.log("In show2() of Example Class")
//     }
// }
// var obj = new Example()
// obj.show1()
// obj.show2()



// class Sample2{
//     constructor(){
        
//         console.log("Constructing Parent Class Example")
//     }
//     show1(){
//         console.log("In show1() of Sample Class")
//     }
// }
// class Example extends Sample2{
//     constructor(){
//        super()
//         console.log("Constructing Child Class Example")
//     }
//     show2(){
//         console.log("In show2() of Example Class")
//     }
// }
// var obj = new Example()
// obj.show1()
// obj.show2()




//find()      : return the item from array which pass a text
//findIndex() : retunn the index of item from array which pass a test
//map()       : return an array of containg result for all elements of array
//filter()    : return an array of items that pass a test
  
var a = [120,130,14,17,83,36,25,15,45,65,15,75,57,58,59,51,50]
// function check(item){
//   return item%5==0
// }


function check(item){
  var flag = false
  for(let i=2;i<=item**0.5;i++){
    if(item%i==0){
      flag=true
      break
    }
  }
  if(flag==false && item>=2)
  return true
  else
  return false
}

// console.log(a.find(check))
// console.log(a.findIndex(check))
// console.log(a.map(check))
// console.log(a.filter(check))


// console.log(a.find((item)=>item%5==0))
// console.log(a.findIndex((item)=>item%5==0))
// console.log(a.map((item)=>item%5==0))
// console.log(a.filter((item)=>item%5==0))

//forEach()

// 

// console.log(a.forEach((a) =>{
    
// }));
//reduce()
function fun(num,next){
  return num+next
}
console.log(a.reduce(fun,0))


