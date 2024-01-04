const name = "Trojan"
const repoCount = 1

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //String Interpolation

const gameName = new String('Trojan-Horse-to-be-split')

/* console.log(gameName[0]);
console.log(gameName.__proto__);     //To access Prototype object

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('H')); */

const newString = gameName.substring(0, gameName.indexOf('-'));
//console.log(newString);

const anotherString = gameName.slice(-11, gameName.indexOf('-'));
//console.log(anotherString);

const newStringOne = "   TrojanHorse    "
//console.log(newStringOne);
//console.log(newStringOne.trim());
var sampleArray = [1,2,3,4,5];
console.log(sampleArray);
console.log(typeof sampleArray);


const url = "https://hitesh.com/hitesh%20choudhary"
//url.replace('%20', ' ');
//console.log(url.replace('%20', ' '));
//console.log(url.includes('sundar'));

var newArray = new Array(gameName.split('-'));

console.log(gameName.split('-'));
console.log(newArray);
console.log(typeof newArray);