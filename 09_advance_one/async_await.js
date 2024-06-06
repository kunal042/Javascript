// async function getallUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response);
        
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("error");
//     }

// }

// getallUser()



// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }

// getAllUsers();




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
console.log("ERROR");
})
