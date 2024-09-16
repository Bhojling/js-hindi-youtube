//const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "bhojling"
tinderUser.loggedIn = false

//console.log(tinderUser);

const regularUser =  {

     email : "another@gmail.com",
     fullname: {

        userfullname: {
            firstname : "bm",
            lastname : "mm",
        }  

     }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1:"a", 2:"b" }
const obj2 = { 3:"a", 4:"b" }
const obj4 = { 5:"a", 6:"b" }


//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

//console.log(obj3);

const users = [

    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "abc2@gmail.com"
    },
    {
        id : 3,
        email : "abc3@gmail.com"
    },

]


// Object de-structure 

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(instructor)
//

const navbar = () => {
    
}