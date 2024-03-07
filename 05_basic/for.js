const myObject = {
    js : "Javascript",
    cpp : "C++",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(` ${key} shortcut is for ${myObject[key]}` );
    
}