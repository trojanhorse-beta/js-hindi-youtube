const marvelHeroes = ["thor","ironman","spiderman","deadpool"]

const dcHeroes = ["batman","superman","flash"]

//marvelHeroes.push(dcHeroes)

//console.log(marvelHeroes.concat(dcHeroes));

const allHeroes = marvelHeroes.concat(dcHeroes)

//console.log(marvelHeroes);
//console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes]   //Spread operator: treats every array entry individually and adds to a new array.Ex:Dropping a Glass

//console.log(allHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usableAnotherArray = anotherArray.flat(Infinity)

//console.log(usableAnotherArray);


//console.log(Array.isArray("Trojan"));  // To check whether the provided value is an array or not. Returns boolean
//console.log(Array.from("Trojan"));  // It will convert whatever value you provide into an array and then returns the new array. Returns empty array in case you provide key value pairs. You have to pre-specify whether to create array of keys or values

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));