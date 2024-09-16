//IIFE

/****global scope ke pollution ki wajah se hume ye hatana pada...matalb global variable pollution kam krne ke liye */

// function chai () {
//     let username = "bhojling"
//     console.log('DB CONNECTED');
// }

// chai()


(function chai () {
    let username = "bhojling"
    console.log('DB CONNECTED');
})()




// named IIFE

(function chai () {
    let username = "bhojling"
    console.log('DB CONNECTED');
})();


// unnamed IIFE

( (name) {
    console.log(`DB CONNECTED ${name}`);
})("bhojling")