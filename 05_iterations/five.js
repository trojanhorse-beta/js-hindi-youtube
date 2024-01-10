// for each loop
const coding = ["js","ruby","java","python","cpp"]

//coding.forEach(function (item){console.log(item);})


/* coding.forEach((item) => {  // arrow functions and normal functions, both can be used as callback functions in forEach loop
    console.log(item);
}) */

//coding.forEach(printMe)   // we can also pass function reference as a callback function in forEach loop


function printMe(item){
    console.log(item);
}

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})