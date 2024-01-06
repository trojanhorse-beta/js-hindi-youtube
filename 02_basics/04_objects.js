const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "Trojan",
        lastname: "Horse"
    }
}

//console.log(regularUser.fullname?.firstname);   // ? to check whether it has value or not. If it contains value, it will move forward otherwise stop

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c",4:"d"}

const obj4 = Object.assign({},obj1,obj2) // joining objects
const obj3 = {...obj1,...obj2}  // another way of joining objects using Spread operator
//console.log(obj3);

//console.log(Object.keys(tinderUser));    // to get all the keys of a particular Object. Returns an array
//console.log(Object.values(tinderUser));    // to get all the values of a particular Object. Returns an array
//console.log(Object.entries(tinderUser));   // returns key value pairs of the passed Object in an array format

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));   // to check whether the Object contains that property/key or not


//Better Syntax example for clean code to access Object values multiple times (De-Structuring of an Object)
const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//const {courseInstructor} = course
//console.log(courseInstructor);

const {courseInstructor: anyNameYouWantToUse} = course
console.log(anyNameYouWantToUse);

//************ API **********//

/* {
    "name": "Trojan",
    "courseName": "Js in Hindi",
    "price": "free"
} */

//JSON structure example below
[
    {},
    {},
    {}
]