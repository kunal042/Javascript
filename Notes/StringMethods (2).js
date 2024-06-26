/*
    String: collection of Characters or Sequence of Characters or
            array of Characters
 */
//String Constant
var a = "Javascript is a scripting Langauge"
// console.log(a)

//String using Loops
// //string using for Loop
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }


// //string using while Loop
// let i=0
// while(i<a.length){
//     console.log(a[i])
//     i++
// }


//string using do while Loop
// let i=0
// do{
//     console.log(a[i])
//     i++
// }while(i<a.length)

// //string using for in loop
// for(let i in a){
//     console.log(a[i])
// }

//string using for of loop
// for(let i of a){
//     console.log(i)
// }


//string methods
//charAt() return character at any specific index

// console.log(a[0])
// console.log(a.charAt(0))
// console.log(a[1])
// console.log(a.charAt(1))


/*
charCodeAt(): return Unicode of first character of 
              String if no index is provided and
              if index is provided then it return 
              unicode of that particular indexed
              value
*/
// console.log(a.charCodeAt());
// for(let i in a){
//     console.log(a[i]," = ",a.charCodeAt(i))
// }


/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/

/*
fromCharCode(): convert a Unicode into Character
 */
// for(let i=1;i<=10000;i++){
//     document.write(i," = ",String.fromCharCode(i)," ")
// }


/*
indexOf()     :   return first index of any substring in string
                  and return -1 if item not found in string.

lastIndexOf() :   return last index of any substring in string
                  and return -1 if item not found in string.

search()      :   return first index of any substring in string
                  and return -1 if item not found in string.

includes()    :   check whether a substring is exist in string or not
                  it return true of false.
*/

// console.log(a)
// console.log(a.indexOf("script"))
// console.log(a.lastIndexOf("script"))
// console.log(a.search("script"))
// console.log(a.includes("script"))

// console.log(a.indexOf("php"))
// console.log(a.lastIndexOf("php"))
// console.log(a.search("php"))
// console.log(a.includes("php"))


// Copy a string into another
// var b = a
// console.log(b)


//concat() : concat one or more strings in a string
// var a = "Ducat"
// var b = "Education"
// var c = "Noida"
// var d = a+b+c
// var e = a.concat(b,c)
// console.log(d)
// console.log(e)


/*
startsWith() : check whether a string start with specific
               sub string or not
endsWith()   : check whether a string end with specific sub
               string or not

*/
// var msg = prompt("Enter the String : ")
// if(msg.startsWith("www."))
// document.write(`'${msg}' is a Web Url`)
// else if(msg.endsWith("@gmail.com"))
// document.write(`'${msg}' is a Gmail Id`)
// else
// document.write(`'${msg}' is a Normal Message`)


//toUpperCase()
//toLocaleUpperCase()

//toLowerCase()
//toLocaleLowerCase()

var a = "Javascript is a Scripting Language"
// console.log(a)
// console.log(a.toLocaleLowerCase())
// console.log(a.toLowerCase())
// console.log(a.toLocaleUpperCase())
// console.log(a.toUpperCase())


//substr() return a substring from pos to number of characters.
//substring() return a substring from pos to pos  characters.
//slice()

// console.log(a.substr(5,10))
// console.log(a.substring(5,10))
// console.log(a.slice(5,10))
// console.log(a.slice(10))
// console.log(a.slice(-10))




//repeat()  :   create number of copies of a string
// console.log(a.repeat(50))


//replace()
//replaceAll()
// console.log(a)
// console.log(a.replace(" ","-"))
// console.log(a.replaceAll(" ","-"))
// console.log(a.replace("Javascript","js"))



//split()
// console.log(a.split(" "))
// console.log(a.split("is"))



//trim() remove all leading white space characters from string from both side
//trimStart()remove all leading white space characters from string from left side   
//trimEnd()remove all leading white space characters from string from right side




// var a = "          Ducat Education Noida     "
// var b = a.trim()
// var c = a.trimStart()
// var d = a.trimEnd()
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)
// console.log(d.length)
/*
localeCompare() : compare two strings
                    return 0 if both string are same
                    return 1 if first string comes last in
                    alphabetical order
                    return -1 if first string comes firt in
                    alphabetical order
*/

var a = "Nitin"
var b = "Naman"
console.log(a.localeCompare(b))
console.log(b.localeCompare(a))
console.log(a.localeCompare(a))