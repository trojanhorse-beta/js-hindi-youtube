let a = 300  // defining using 'Let' enables us to keep block scope's value inside the block
var c = 30   // usage of 'var' will change the value assigned in block scope to the variable in global scope as well which is not desired.

if(true){
    let a =10
    const b = 20
    //console.log("Inner: ", a);
}

//console.log(a);

// CLOSURE: Child nested function can access parent function's variables but parent function cannot access child function's variables

function one(){
    const username = "Trojan"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()


if(true){
    const username = "TrojanHorse"
    if(username){
        const website = "Github"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//********Interesting (Hoisting Example)********/

addOne(4)

function addOne(num){    // Simple func declaration: Can be called/accessed before initialization
    return num+1
}

addTwo(4)

const addTwo = function(num){     // Function Expression: Cannot be called/accessed before initialization
    return num + 2
}