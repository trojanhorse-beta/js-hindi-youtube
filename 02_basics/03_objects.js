// Singleton: jab constructor se object bnate hai to singleton object banta hai. apne tarike ka ek hi object banega
//Object.create

// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Trojan",
    "full name": "Trojan Horse",   //cannot be access using . notation
    age: 20,
    [mySymbol]: "myKey1",
    location: "Delhi",
    email: "test@test.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(jsUser["full name"]);
//console.log(jsUser.email);
//console.log(jsUser);
//console.log(typeof jsUser[mySymbol]);

//Object.freeze(jsUser)  //freezes that object. The values in that object cannot be updated now.


jsUser.greeting = function(){
    console.log(`Hello ${jsUser["full name"]}`);
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${this["full name"]}, you are logged in from ${this.location}`);  // This is used to refer to current object.
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());