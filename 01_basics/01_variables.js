const accountId = 144553
let accountEmail = "shivsagar@123"
var accountPassword = "12344"
accountCity = "jaipur";
let accountState;

// accountId = 2 //not allowed

console.log(accountId);

/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/


console.table([accountEmail, accountId, accountPassword, accountState]);