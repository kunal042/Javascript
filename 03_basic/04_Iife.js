// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();



// to remove the golbal scope pollution we ise  iife

( () => {
    console.log(`DB CoNNECTED TWO`);
} )();


( (name) => {
    console.log(`DB CoNNECTED TWO ${name}`);
} )("kunal");