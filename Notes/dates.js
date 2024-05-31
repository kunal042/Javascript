//to set date and time
//1st Style : new Date() : return Current Date and time
// var a = new Date()
// console.log(a.toString())
// console.log(a.toLocaleString())
// console.log(a.toLocaleDateString())
// console.log(a.toLocaleTimeString())


//2nd Style : new Date(year,month,day,hour,minute,second,milisecond)
// var a = new Date(2023,7,12,15,25,30,2000)
// var b = new Date(2023,7,12,15,25,30)
// var c = new Date(2023,7,12,15,25)
// var d = new Date(2023,7,12,15)
// var e = new Date(2023,7,12)
// var f = new Date(2023,7)
// var g = new Date(2023)
// console.log(a.toString())
// console.log(b.toString())
// console.log(c.toString())
// console.log(d.toString())
// console.log(e.toString())
// console.log(f.toString())
// console.log(g.toString())

//3rd Style : new Date(miliseconds)
// var a = new Date(987384804600)
// console.log(a.toString())


//4th Style : new Date(dateString)
// var a = new Date("2023 08 12 15:30:35")
// var b = new Date("15:30:35 2023 08 12")
// console.log(a.toString())
// console.log(b.toString())

//to get date and time
var a=new Date()
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());
console.log(a.getUTCDate());
console.log(a.getTime());//miliseconds
console.log(a.getDay()); //week day
console.log(Date.now());//miliseconds