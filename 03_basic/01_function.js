
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

console.log(loginUserMessage("kunal"));


