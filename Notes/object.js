/*
objects store information in pair of keys and values
Keys Must be Unique
values may be duplicate
*/

//object literal 
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 98500,
    city: "Faridabad",
    state: "Haryana"
}
// console.log(emp)


//Empty object literal 
// var emp = {}
// emp.id = 1001
// emp['name']="Nitin Chauhan"
// emp['dsg']="Trainer"
// emp.salary=98760
// emp.city="Noida"
// emp.state="UP"
// console.log(emp)


//new Object() 
// var emp = new Object()
// emp.id = 1001
// emp['name']="Nitin Chauhan"
// emp['dsg']="Trainer"
// emp.salary=98760
// emp.city="Noida"
// emp.state="UP"
// console.log(emp)

//Accessing Object Values with help of keys
// console.log(emp.name)
// console.log(emp['dsg'])

//Accessing Object values through Loop 
// for(let key in emp){
//     console.log(key," = ",emp[key])
// }

//adding an item to existing object
// emp.email = "vishankchauhan@gmail.com"
// emp['phone']="9873848046"
// console.log(emp)


//deleting object item
// delete emp.id
// delete emp['name']
// console.log(emp)


//Nesting of Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:98500,
//     subject:['Mern Stack','Mean Stack','Python','PHP'],
//     address:{
//         house:"85",
//         street:"A16",
//         locality:"Village XYZ",
//         pin:"121002",
//         city:"Faridabad",
//         state:"Haryana"
//     }
// }
// console.log(emp)
// console.log(emp.subject)
// console.log(emp.subject[2])

// console.log(emp.address)
// console.log(emp.address.city)


//function in Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     basicSalary:65000,
//     calculate(){
//         if(this.basicSalary<50000){
//             this.ta = this.basicSalary*5/100
//             this.da = this.basicSalary*7/100
//             this.hra = this.basicSalary*8/100
//             this.ma = this.basicSalary*9/100
//         }    
//         else{
//             this.ta = this.basicSalary*8/100
//             this.da = this.basicSalary*9/100
//             this.hra = this.basicSalary*10/100
//             this.ma = this.basicSalary*12/100
//         }
//         this.gross = this.basicSalary+this.ta+this.da+this.hra+this.ma
//         this.itax = this.gross*10/100
//         this.net = this.gross-this.itax
//     },
//     display(){
//         console.log(`
//             ID          :       ${this.id}
//             Name        :       ${this.name}
//             Designation :       ${this.dsg}
//             Basic Salary:       ${this.basicSalary}
//             Ta          :       ${this.ta}
//             Da          :       ${this.da}
//             Hra         :       ${this.hra}
//             Ma          :       ${this.ma}
//             Gross       :       ${this.gross}
//             Itax        :       ${this.itax}
//             Net         :       ${this.net}
//         `)
//     }
// }

// emp.calculate()
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     basicSalary:65000,
//     calculate:function(){
//         if(this.basicSalary<50000){
//             this.ta = this.basicSalary*5/100
//             this.da = this.basicSalary*7/100
//             this.hra = this.basicSalary*8/100
//             this.ma = this.basicSalary*9/100
//         }    
//         else{
//             this.ta = this.basicSalary*8/100
//             this.da = this.basicSalary*9/100
//             this.hra = this.basicSalary*10/100
//             this.ma = this.basicSalary*12/100
//         }
//         this.gross = this.basicSalary+this.ta+this.da+this.hra+this.ma
//         this.itax = this.gross*10/100
//         this.net = this.gross-this.itax
//     },
//     display:function(){
//         console.log(`
//             ID          :       ${this.id}
//             Name        :       ${this.name}
//             Designation :       ${this.dsg}
//             Basic Salary:       ${this.basicSalary}
//             Ta          :       ${this.ta}
//             Da          :       ${this.da}
//             Hra         :       ${this.hra}
//             Ma          :       ${this.ma}
//             Gross       :       ${this.gross}
//             Itax        :       ${this.itax}
//             Net         :       ${this.net}
//         `)
//     }
// }
// emp.calculate()
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     basicSalary:65000,
//     calculate:()=>{
//         if(emp.basicSalary<50000){
//             emp.ta = emp.basicSalary*5/100
//             emp.da = emp.basicSalary*7/100
//             emp.hra = emp.basicSalary*8/100
//             emp.ma = emp.basicSalary*9/100
//         }    
//         else{
//             emp.ta = emp.basicSalary*8/100
//             emp.da = emp.basicSalary*9/100
//             emp.hra = emp.basicSalary*10/100
//             emp.ma = emp.basicSalary*12/100
//         }
//         emp.gross = emp.basicSalary+emp.ta+emp.da+emp.hra+emp.ma
//         emp.itax = emp.gross*10/100
//         emp.net = emp.gross-emp.itax
//     },
//     display:()=>{
//         console.log(`
//             ID          :       ${emp.id}
//             Name        :       ${emp.name}
//             Designation :       ${emp.dsg}
//             Basic Salary:       ${emp.basicSalary}
//             Ta          :       ${emp.ta}
//             Da          :       ${emp.da}
//             Hra         :       ${emp.hra}
//             Ma          :       ${emp.ma}
//             Gross       :       ${emp.gross}
//             Itax        :       ${emp.itax}
//             Net         :       ${emp.net}
//         `)
//     }
// }
// emp.calculate()
// emp.display()


//getter and setter
//get
//set


// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     set getSalary(num){
//         this.salary = num
//     },
//     get display(){
//         console.log(`
//             Id      :   ${this.id}
//             Name    :   ${this.name}
//             Salary  :   ${this.salary}
//         `);
//     }
// }
// emp.getSalary = 98500
// emp.display()


//object destructuring
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 98500,
    city: "Faridabad",
    state: "UP"
}
// console.log(`
//     Id          :   ${emp.id}
//     Name        :   ${emp.name}
//     Designation :   ${emp.dsg}
//     Salary      :   ${emp.salary}
//     City        :   ${emp.city}
//     State       :   ${emp.state}
// `);

// var {id,name,dsg,salary,city,state} = emp
// console.log(`
//     Id          :   ${id}
//     Name        :   ${name}
//     Designation :   ${dsg}
//     Salary      :   ${salary}
//     City        :   ${city}
//     State       :   ${state}
// `);


//object constructor/prototype

var Employee = function (id, name, dsg, salary, city, state) {
    this.id = id
    this.name = name
    this.dsg = dsg
    this.salary = salary
    this.city = city
    this.state = state
}
var e1 = new Employee(1001,"Nitin Chauhan",'Trainer',98500,"Faridabad","Haryana")
var e2 = new Employee(1002,"Deepak Singh",'Trainer',98500,"Faridabad","Haryana")
var e3 = new Employee(1003,"Rahul Sharma",'Trainer',98500,"Faridabad","Haryana")
console.log(e1)
console.log(e2)
console.log(e3)

