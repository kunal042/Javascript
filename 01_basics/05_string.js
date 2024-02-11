const  name = "Kunal"
const age = 22

// console.log(name + age);
// console.log(`Hello my name is ${name} and I am ${age} years old.`);

const gameName = new String("Bouncing Box")

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("B"));


const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(0, 8)
// console.log(anotherString);


const x = "    hitesh     "
// console.log(x);
// console.log(x.trim());


const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11&ab_channel=ChaiaurCode"

// console.log(url.replace("?", "t"));


console.log(url.includes("youtube"))


const y = "my_name_is_kunal"
console.log(y.split("_"));

