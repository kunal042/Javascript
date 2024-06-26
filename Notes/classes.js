/**
 *  oops:
 *  -> designed by Bjarne Stroustroup(C++ Founder)
 *  -> object oriented programming Structure
    oops is a computer science term which defines a well
    structured series or steps to construct a computer
    application which composed of multiple objects,
    each object can handle data, get and transfer 
    messages to each other, since objects are not
    dependent on each other oops is seen as being
    more flexible then procedural approach

    OOPS Approachs:
    1. Abstraction  :   Data Hiding
    2. Encapsulation:   Binding data and function in a single unit
    3. Polymorphism :   Many forms of Single Entity
    4. Inheritance   :   Code Reusability

    class is required to implement oops

    class: class is a technique by which we can define a new
           data type as we required

           class is a blue print of objects

           class is a collection of properties and behaviours
           where properties means variables of different-different
           data types and behaviors means various functions
    syntax:
    class ClassName{
        constructor(){
            ----
        }
        method1(){
            ----
        }
        method2(){
            ----
        }
        --
    }
 */
//class without constructor

// class Sample{
//     show(){
//         console.log("In show() of Sample Class")
//     }
//     display(){
//         console.log("In display() of Sample Class")
//     }
// }
// var x = new Sample()
// x.show()
// x.display()


// class Add{
//     get(x,y){
//         this.a = x
//         this.b = y
//         this.sum = this.a+this.b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add()
// var obj2 = new Add()
// obj1.get(100,200)
// obj1.display()
// obj2.display()



/*
class with constructor
Constructor:
    -> a special member method of class which provide memory
       initialization to a class object
    -> there is no need to call constructor it called automatically
       when object is declared with help of new
    -> it can be parameterised
    -> if we not provide defination to a constructor in class
        then compiler provide defination to constructor
 */

// class Sample{
//     constructor(){
//         console.log("Constructing Class Sample")
//     }
//     show(){
//         console.log("In show function")
//     }
//     display(){
//         console.log("In display function")
//     }
// }
// var x = new Sample()
// var y = new Sample()
// var z = new Sample()

// class Add{
//     constructor(){
//         this.a = 0
//         this.b = 0
//         this.sum = 0
//     }
//     get(x,y){
//         this.a = x
//         this.b = y
//         this.sum = this.a+this.b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }

// var obj1 = new Add()
// var obj2 = new Add()
// obj1.get(100,200)
// obj1.display()
// obj2.display()

// class Add{
//     constructor(x,y){
//         this.a = x
//         this.b = y
//         this.sum = this.a+this.b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add(100,200)
// var obj2 = new Add()
// obj1.display()
// obj2.display()


// class Employee {
//     constructor(id, name, dsg, basic, l) {
//         this.id = id
//         this.name = name
//         this.dsg = dsg
//         this.basic = basic
//         this.l = l
//     }
//     calculate() {
//         if (this.basic < 20000) {
//             this.ta = this.basic * 5 / 100
//             this.da = this.basic * 6 / 100
//             this.hra = this.basic * 7 / 100
//             this.ma = this.basic * 8 / 100
//         }
//         else {
//             this.ta = this.basic * 8 / 100
//             this.da = this.basic * 9 / 100
//             this.hra = this.basic * 10 / 100
//             this.ma = this.basic * 12 / 100
//         }
//         this.gross = this.basic + this.ta + this.da + this.hra + this.ma
//         this.lamount = this.gross/30*this.l
//         this.net = this.gross-this.lamount
//         if(this.net<=50000)
//         this.itax = 0
//         else
//         this.itax = (this.net-50000)*10/100

//         this.net = this.net-this.itax
//     }
//     display(){
//         console.log(`
//             
//             Employee Id                 :   ${this.id}
//             Name                        :   ${this.name}
//             Designation                 :   ${this.dsg}
//             Basic Salary                :   ${this.basic}
//             ---------------------------------------------
//             Ta                          :   ${this.ta.toFixed(0)}
//             Da                          :   ${this.da.toFixed(0)}
//             HRA                         :   ${this.hra.toFixed(0)}
//             MA                          :   ${this.ma.toFixed(0)}
//             ---------------------------------------------
//             Gross Salary                :   ${this.gross.toFixed(0)}
//             ---------------------------------------------
//             Leave                       :   ${this.l.toFixed(0)}
//             Leave Amount                :   ${this.lamount.toFixed(0)}
//             Income Tax                  :   ${this.itax.toFixed(0)}
//             ----------------------------------------------
//             Net Salary                  :   ${this.net.toFixed(0)}
//             ---------------------------------------------
//         `)
//     }
// }
// var x = new Employee(1001,"Nitin Chauhan","Trainer",55000,2)
// x.calculate()
// x.display()

/**
 * Inheritance:
 * oops approach provide a feature to reuse all members
 * of any previous existing class in a new class
 *
 * eg. if a class named B inherit class A then class
 * B can reuse all member of class A so class B
 * is called child class,derived class or subclass
 * and class A is called parent class,super class
 * or base class
 *
 * types:
 *  1. Single Inheritance
 *  2. multilevel Inheritance
 *  3. Hierarchical Inheritance
 *
 * syntax:
 *  class Parent{
 *  ----
 *  -----
 *  }
 *  class Child extends Parent{
 *      ----
 *      ----
 * }
 * Note: a child can access only those member of class
 * parent which child doesn't have if both parent
 * class and child class having same named members
 * then child class member override parent's member
 */
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

// class Parent{
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
//     display(){  //overridden method
//         console.log("In display() of Parent Class")
//     }
// }
// class Child extends Parent{
//     show2(){
//         console.log("In show2() of Child Class")
//     }
//     display(){
//         super.display()
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
// class Example extends Sample{
//     show2(){
//         console.log("In show2() of Example Class")
//     }
// }
// var obj = new Example()
// obj.show1()
// obj.show2()


// class Sample{
//     show1(){
//         console.log("In show1() of Sample Class")
//     }
// }
// class Example extends Sample{
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


// class Sample{
//     constructor(){
//         console.log("Constructing Class Sample")
//     }
//     show1(){
//         console.log("In show1() of Sample Class")
//     }
// }
// class Example extends Sample{
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

//Single Inheritance: when a single child class inherit a
//single parent class

// class Parent{
//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }
// }
// class Child extends Parent{
//     display(){
//         this.sum = this.a+this.b
//         console.log(`${this.a}  + ${this.b} = ${this.sum}`)
//     }
// }
// var x = new Child(10,20)
// x.display()


//mulilevel Inheritance: when a child class inherit another child class
// class Base {
//     constructor() {
//         this.a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//     }
// }
// class Derived1 extends Base {
//     display() {
//         console.log(this.a)
//     }
// }
// class Derived2 extends Derived1 {
//     reverse() {
//         //   this.a.reverse()
//         for (let i = 0; i < this.a.length / 2; i++) {
//             this.a[i] = this.a[i] + this.a[this.a.length - 1 - i]
//             this.a[this.a.length - 1 - i] = this.a[i] - this.a[this.a.length - 1 - i]
//             this.a[i] = this.a[i] - this.a[this.a.length - 1 - i]
//         }
//     }
// }
// var x = new Derived2()
// console.log("Original Array is")
// x.display()

// x.reverse()
// console.log("Revered Array is")
// x.display()


//Hierarchical Inheriatnce: when a single parent class inherit by
//              more then one child class


class Sample{
    constructor(a,b){
        this.a = a
        this.b = b
    }
}
class Add extends Sample{
    display(){
        console.log(`${this.a} + ${this.b} = ${this.a + this.b}`)
    }
}
class Sub extends Sample{
    display(){
        console.log(`${this.a} - ${this.b} = ${this.a - this.b}`)
    }
}
class Mul extends Sample{
    display(){
        console.log(`${this.a} * ${this.b} = ${this.a * this.b}`)
    }
}
class Div extends Sample{
    display(){
        console.log(`${this.a} / ${this.b} = ${this.a / this.b}`)
    }
}
class Mod extends Sample{
    display(){
        console.log(`${this.a} % ${this.b} = ${this.a % this.b}`)
    }
}
class Pow extends Sample{
    display(){
        console.log(`${this.a} ** ${this.b} = ${this.a ** this.b}`)
    }
}

var obj1 = new Add(15,6)
var obj2 = new Sub(15,6)
var obj3 = new Mul(15,6)
var obj4 = new Div(15,6)
var obj5 = new Mod(15,6)
var obj6 = new Pow(15,6)
obj1.display()
obj2.display()
obj3.display()
obj4.display()
obj5.display()
obj6.display()