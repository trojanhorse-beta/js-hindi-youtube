const accountId = 12345
let accountEmail = "test@test.com"
var accountPassword = "password"
accountCity = "Delhi"

let accountState;

// accountId = 3    not allowed
accountEmail = "hc@hc.com"
accountPassword = "updatedpassword"
accountCity = "Mysore"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])