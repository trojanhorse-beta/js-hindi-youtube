 // for-in loop: can be used to iterate on objects which for-of cannot do
const myObject = {
    js: 'javscript',
    cpp : 'c++',
    rb : 'ruby',
    py: 'python',
    swift: 'swift by apple'
}


for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


/* const map = new Map()       
map.set('IN', 'INDIA')
map.set('US', 'AMERICA')
map.set('FR', 'FRANCE')
map.set('GR', 'GERMANY')

for (const [key,value] in map) {    // Maps are not iterable here
    console.log(value);
} */