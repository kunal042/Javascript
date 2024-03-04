// Singleton




// Object.create

// Objects Literals

// const mySym = Symbol("key1")

const jsUser = {
    name : "Kunal",
    "Full Name" : "Kunal Kumar",
    // [mySym] : "Mykey1",
    age : 17,
    location : ":Gurugram",
    email :" kunal@microsoft.com",
    isLoggedIn : true,
    lastLoginDay : ["Monday", "Tuesday", "Saturday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "kunal@google.com"

// Object.freeze(jsUser)
// jsUser.email = "kunal@chatgpt.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js User!");
}
jsUser.greeting2 = function(){
    console.log(`hello js2 User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());