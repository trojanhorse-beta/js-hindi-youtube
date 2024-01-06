const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to the website`);
    }
}

//user.welcomeMessage()


/* function chai(){
    let username = "Hitesh"
    console.log(this.username);    // Output will be undefined : 'This' doesn't works in functions, it only works in objects
}

chai() */


/* const chai = () => {
    let username = "Hitesh"
    console.log(this.username);    // 'this' in arrow functions is empty whereas it have several usable values in a normal function declaration
}

chai() */

/* const addTwoNums = (num1,num2) => {
    return num1+num2
}

console.log(addTwoNums(4,7)); */

//const addTwoNums = (num1,num2) => num1+num2     // Implicit return: if the function has only one line that of a return, it can be written like this also
//Another way:
const addTwoNums = (num1,num2) => (num1+num2)    // no need to use 'return' keyword when using parenthesis.But return is mandatory in case of curly braces
//const addTwoNums = (num1,num2) => ({username: "Hitesh"})   // Way to return an Object in implicit way
console.log(addTwoNums(4,7));
