
class smaple{
    show(){
        console.log("This is sample function!!");
    }
    display(){
        console.log("This is display function!!");
    }
}

var x = new smaple()
x.show()
x.display()


class Add{
    get(x,y){
        this.a = x
        this.b = y
        this.s = this.a + this.b
    }

    display(){
        console.log(`${this.a} + ${this.b} = ${this.s}`);
    }
}


var obj1 = new Add()
var obj2 = new Add()
obj1.get(100,200)
obj1.display()
obj2.display()



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



class Sample2{
    constructor(){
        
        console.log("Constructing Parent Class Example")
    }
    show1(){
        console.log("In show1() of Sample Class")
    }
}
class Example extends Sample2{
    constructor(){
       super()
        console.log("Constructing Child Class Example")
    }
    show2(){
        console.log("In show2() of Example Class")
    }
}
var obj = new Example()
obj.show1()
obj.show2()