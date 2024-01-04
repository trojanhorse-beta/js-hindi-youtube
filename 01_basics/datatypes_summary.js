// Primitive (call by value)

// 7 types: string, number, boolean, null, undefined, symbol, Bigint



// Non- primitive (call by reference)

// Array, Objects, functions


/******************************************/

// Memory

// Stack(used for primitive type), Heap(used for non-primitive type)
//Stack Example:

let myYoutubeName = "sampleName" //goes in the stack

let anotherName = myYoutubeName;
anotherName = "NewName";

//console.log(myYoutubeName);
//console.log(anotherName);

//Heap Example:

let userOne = {
    email: "test@test.com",
    upi: "test@ybl"
}

let userTwo = userOne;

userTwo.email = "updated@test.com"

console.log(userOne);
console.log(userTwo);