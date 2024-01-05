//Arrays

const myArr = [0,1,2,3,4,5];

const myHeroes = ["shaktiman","dogra","saabu","riyotsu","naagraj"]

//console.log(myHeroes);
//console.log(myArr);

//myArr.push(6)  //add to the array at the end
//myArr.pop()  //removes last value
//myArr.unshift(7)  //inserts at the start of the array. Drawback is that the operations shift every succeeding value by a place so it's a time consuming task
//myArr.shift()  //removes first element from the array
//console.log(myArr.indexOf(41));

const newArr = myArr.join()  //converts array into comma separated single string will all the values

//slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)  //doesn't manipulates OG array. Returns the values in a new array for the provided range.

//console.log(myArr);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)   //manipulates OG array and takes out the values in defined range from that array to return a new array with those values
console.log("C",myArr);
console.log(myn2);