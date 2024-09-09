// primitive type:-

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scroreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail; 

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)

const bigNumber = 1218937930874289n

// Reference (Non primitive) type:-

// types:- Array, Object, Functions

const heros = ["shaktiman", "doga", "naagraj"]

let myObj = {
    name : "hitesh",
    age : 30,
}

const myFunction = function () {
    console.log("hello world");
}

console.log(typeof scroreValue)

// the function return type called as object function
// Array, Object return type called as object



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Primitive type data stored in the stack memory
// Reference (Non primitive) type data stored in the heap memory


let myYoutubename = "bm@gmaildotcom"
let anothername = myYoutubename
anothername = "chairaurcodedotcom"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl",
}

let userTwo = userOne

userTwo.email = "ybl@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
