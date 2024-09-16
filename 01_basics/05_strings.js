const name = "bhojling"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} & my repo count is ${repoCount}`);

const gameName = new String('bhojlingmetkari');

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // The position (0-based) of the character in the string
console.log(gameName.indexOf(t)); // to find the position (index) of the first occurrence of a specified character or substring within a string

const newString = gameName.substring(0, 4) //bhoj

console.log(newString);

const anotherString = gameName.slice(-8, 4) // hoj

const newStringOne = "  Bhojling  "

//trim()
console.log(newStringOne); //  Bhojling  

console.log(newStringOne.trim()); //Bhojling


const url ="https://bhojling.com/bhojling%20metakri"

console.log(url.replace("%20", "-")); //https://bhojling.com/bhojling-metakri

console.log(url.includes('sundar')); //false
 
console.log(gameName.split(' '));




