function sayMyName(){
    console.log("T");
    console.log("R");
    console.log("O");
    console.log("J");
    console.log("A");
    console.log("N");
}

//sayMyName         // Function reference
//sayMyName()       // Function will execute


function addTwoNumbers(num1,num2){
    return num1+num2
}

//console.log(addTwoNumbers("4n",18));


function loginUserMessage(username = "Sam"){        // passed default value
    if(username){
        return `${username} just logged in`
    }
    else if(!username){
        console.log("Please enter an username");
    }
}

/* console.log(loginUserMessage("Trojan Horse"));
console.log(loginUserMessage()); */



function calculateCartPrice(...price1){         // ... is the REST Operator
    return price1
}

//console.log(calculateCartPrice(200,400,500));


const user = {
    username: "Trojan",
    price: 1999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);        // 'This' won't work in this case
}

//handleObject(user)


const myNewArray = [200,400,600,800]

function returnSecondValueOfArray(getArray){
    return getArray[1];
}

console.log(returnSecondValueOfArray(myNewArray));