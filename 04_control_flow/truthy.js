// Truthy values
//assuming that the value is true

const userEmail = []

/* if(userEmail){
    console.log("Got user email");
}
else{
    console.log("No user email found");
} */


// Falsy values
// false, 0, -0, BigInt 0n, '', null, undefined, NaN


// Truthy Values
// "0",1,true, 'false',' ',[], {}, function(){}

// To check if array is empty
/* if(userEmail.length === 0){
    console.log("Array is empty");
}

// To check if Object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
} */



// Nullish Coalescing Operator(??): null undefined

/* let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15        //at whatever point it finds its first value, the value will be assigned to the variable

console.log(val1); */


// Terniary operator '?'

// condition? true statement : false statement

const iceTeaPrice = 100

iceTeaPrice >=80 ? console.log("greater than 80") : console.log("less than 80");