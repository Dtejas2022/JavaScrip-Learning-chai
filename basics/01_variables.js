const accountId = 123456
let accountEmail = "tejasdotkar@gmail.accountEmail"
var accountPassword = "12345" //not preferable use 
accountCity = "Jaipur" //allowed in javascript to declare but not prefered to use not difine like that

let accountState; //if we not assign value the undefined value stored 
// accountId = //2 not allowed

accountEmail = "siddu@gmail.com"
accountPassword = "56789"
accountCity = "nanded"

console.log(accountId);
/*
Prefer not to use var
becouse the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);