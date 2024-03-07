const coding = ["js", "python", "java", "c", "c++", "swift"]

// coding.forEach(function (item) {
//     console.log(item);
    
// })

coding.forEach( (items) => {
    // console.log(items);
})


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
} )



const myCoding = [
    {
        langugae : "Javascript",
        filename : ".js"
    },
    {
        langugae : "java",
        filename : ".java"
    },
    {
        langugae : "Python",
        filename : ".py"
    },
]


myCoding.forEach( (item) => {
    console.log(item.filename);
} )

