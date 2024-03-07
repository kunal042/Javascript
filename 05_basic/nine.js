const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce( (acc, currval) =>{
    console.log(`acc ${acc} and Currval : ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);