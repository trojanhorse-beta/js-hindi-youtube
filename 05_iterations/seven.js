const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map( (num) => num+10 )


// Chaining

const newNums = myNumbers
                .map( (num) => num*10 )
                .map((num) => num+1)
                .filter( (num) => num >= 40)                       // num value here will be the modified value in the previous map()

console.log(newNums);