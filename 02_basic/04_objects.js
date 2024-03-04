const tinder = new Object()

tinder.id = "123abc"
tinder.name = "sammy"
tinder.IsLoggedIn = false

// console.log(tinder);


const regularUser = {
    emai : "some@gmail.com",
    fullname : {
        username :{
            firstname : "Kunal",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id : 1,
        email : "k@gmail.com"
    },
    {
        id : 1,
        email : "k@gmail.com"
    },
    {
        id : 1,
        email : "k@gmail.com"
    },
    {
        id : 1,
        email : "k@gmail.com"
    },
]


user[1].email

console.log(tinder);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty("IsLoggedIn"));
