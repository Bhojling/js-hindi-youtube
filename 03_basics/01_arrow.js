
//regular function
const chai = function () {
    let usrname = "bhojling"
    console.log(this.username);
}

// arrow function
const chai = () => {
    let username = "bhojling"
    console.log(this.username);
}

//chai()

// explicit return

// const addTwo = (num1, num2) => {
//      return num1 + num2
// }

// console.log(addTwo(3, 4));


// implicit return 

const addTwo = (num1, num2) =>  (num1 + num2)

console.log(addTwo(3, 4));

// implicit return majorly used in the reactJS


