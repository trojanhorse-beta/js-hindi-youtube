// for loop

/* for (let i = 0; i < array.length; i++) {
    const element = i;
    console.log(element);
    
} */


for (let i = 0; i <= 10 ; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        //console.log(`Inner loop value: ${j} and outer loop ${i}`);
        //console.log(i + '*' + j +'=' + i*j);
    }
}

let myArray = ["flash","batman","superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}


// Keywords
// break and continue

/* for (let index = 0; index <= 20; index++) {
    if(index ==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
    
} */

for (let index = 0; index <= 20; index++) {
    if(index ==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}