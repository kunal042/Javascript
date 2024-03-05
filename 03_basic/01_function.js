
function sayMyname (){
    console.log("k");
    console.log("u");
    console.log("n");
    console.log("a");
    console.log("l");
    
}

// sayMyname()



// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumber(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumber(3,5)
// console.log(result);



function loginUserMessage(username){
    if (!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} is logged in`

}

// console.log(loginUserMessage("kunal"));


function CalculateCartPrice(val1, val2,  ...num1){
    return num1
}

// console.log(CalculateCartPrice(200, 400, 500, 2000, 5000));


const user = {
    username : "Kunal",
    price : 199
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username : "rahul",
    price : 299
})


const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));
