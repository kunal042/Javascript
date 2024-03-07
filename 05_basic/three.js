//  for of
const arr = [1,2,3,4,5,]

for (const num of arr) {
    // console.log(`Number is array is ${num}`);
    
}


const greeting = "Hello World!"

for (const greet of greeting) {
    // console.log(`Each Char is ${greet}`)
    ;
    
}


//  Maps



const map = new Map()
map.set("IN", "India")
map.set("US", "United States od America")
map.set("FR", "France")

// console.log(map);


for (const [key, value] of map) {
    // console.log(key,  ":-", value);
    
}


const myObject = {
    "game1" : "NFS",
    "game2" : "Spideman"
}

for (const [key, value] of myObject) {

    console.log(key,  ":-", value);
    
}
