// array

const myArr = [0, 1, 2, 3, 4]

const myNewArr = ["spidermam", "superman"]

const myHeroArr = ["shaktiman", "thor"]


// concat operator

const myHeros = concat(myNewArr, myHeroArr)

console.log(myHeroArr);

//Spred operator

const myNewHeros = [...myHeros, ...myHeroArr]

console.log(myNewHeros);


// flat (creates a new array with all sub-array elements concatenated into it recursively up to the specified depth)

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]

const real_another_arr = another_arr.flat(Infinity);

console.log(real_another_arr); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// form() (The Array.from() static method creates a new)

console.log(Array.isArray("Bhojling")) // return boolean value true/false

console.log(Array.from("Bhojling"))

console.log(Array.from({name : "BM"}))


// Array.off
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

