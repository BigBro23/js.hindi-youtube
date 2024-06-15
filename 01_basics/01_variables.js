const accountId = 144553
let accountEmail = "bikram@google.com"
var accountPassword = "12345"
accountCity = "Coochbehar"
let accountState;

// accountId = 2 // not allowed jadi const thake

/* prefer not to use var
because of issue in block scope and functional acope */



accountEmail = "hc@gmail.com"
accountPassword = "23233232"
accountCity = "jaipur"


console.log(accountId);

console.table([accountEmail,accountPassword,accountCity,accountState])
