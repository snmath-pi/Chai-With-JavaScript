const accountId = 144553;
let accountEmail = "sakshamnegi@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

// accountId = 2; not allowed 
console.log(accountId);
accountEmail = "hc@hc.com";
accountPassword = "2022";
accountCity = "Banglore";

/*
Prefer not to use var: because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountCity]);