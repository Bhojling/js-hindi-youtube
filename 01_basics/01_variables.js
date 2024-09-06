const accountId = 144553
let accountEmail = "bhojling37@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

/*
prefer not to use var
beacause of issue in block scope & functional scope 
 */
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])