const promiseOne = new Promise(function(resolve, reject){
    //Do an asyn task
    // DB calls crpotography
    setTimeout(function (){
        console.log("Asyc task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})



new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(() => {
    console.log("Promise Task 2");
})


const promiseThree = new Promise( function(resolve, reject){
    setInterval(function(){
        resolve({username: "chai", email:"chai@examplw.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


/** 
const promiseFour = new Promise (function (resolve, reject){
    setInterval(function (){
        let error = false
        if (!error) {
            resolve({username:"kunal", password:"123"})
            
        }else{
            reject("ERROR: Something went Wrong!!")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error){
    console.log(error);
}).finally(() => {
    console.log(
        "The promise is either resolved or reject"
    );
})

*/



const promiseFive = new Promise((reslove, reject) => {
    setInterval(function (){
        let error = false
        if (!error) {
            reslove({username:"Javascript", password:"1123"})
        }else{
            reject("ERROR : JS went wrong!!")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()




