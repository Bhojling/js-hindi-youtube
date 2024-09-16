// singleton

// object create 

const mysym = Symbol("key1")

//object literals

const jsUser = { 
  name : "bhojling",
  "full name" : "Bhojling Metkari",
  [mysym] : "mykey1", // to refer symbol like this.
  age : 30,
  location : "Pune",
  email : "bhojling@hatsoffdigital.com",
  isLoggedIn : false,
  lastLoginDay : ["Monday", "Saturday"],
}

// console.log(jsUser.email); //bhojling@hatsoffdigital.com

// console.log(jsUser['email']); //bhojling@hatsoffdigital.com

// console.log(jsUser['full name']); //Bhojling Metkari
// console.log(jsUser[mysym]);

jsUser.email ="bhojling@chatgpt.com";

Object.freeze(jsUser); // To lock the specific data or bunch of data using (Object.freeze()).

jsUser.greeting = function(){
  console.log("Hello JS User");
}

console.log(jsUser.greeting);





