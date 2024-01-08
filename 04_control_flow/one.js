
/* const score = 200

if (score >100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); */
//const balance = 1000
//if(balance >500) console.log("test"), console.log("test2");        shorthand code but very unreadable


const userLoggedIn =true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if(userLoggedIn && debitCard ){
    console.log("Allow to buy course");
}
else if(userLoggedIn && !debitCard){
    console.log("Please enter debit card details");
}
else if(!userLoggedIn){
    console.log("Please login to purchase course");
}
else if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}