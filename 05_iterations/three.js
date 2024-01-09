// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}


// Maps: object which holds key value pairs. remembers insertion order of the keys. All keys are unique
const map = new Map()
map.set('IN', 'INDIA')
map.set('US', 'AMERICA')
map.set('FR', 'FRANCE')
map.set('GR', 'GERMANY')

//console.log(map);



for (const key of map) {         // this will print key-value pairs in array form
    //console.log(key);
}

for (const [key,value] of map) {   // destructured array: we can now print key/value separately as per our requirement
    /* console.log(key);
    console.log(value);
    console.log(key,value); */
}


const myObj = {
    'game1' : 'contra',
    'game2' : 'cs',
    'game3' : 'nfs'
}

/* for (const [key,value] of myObj) {      // won't be able to iterate through objec. error will be thrown
    console.log(key, ':-', value);
} */