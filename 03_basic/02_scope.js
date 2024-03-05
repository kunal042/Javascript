var a = 300

if (true){
    let a = 10
    const b = 20
    // console.log("Innner", a);

}


// console.log(a);



function one(){
    const username = "Kunal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++ Intersting ++++++++++++++++

console.log(addOne(5)); 
function addOne(num) {
    return num + 1
    
}



const addTwo = function (num) {
    return num + 2 
}

addTwo(5)

