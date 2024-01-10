// Reduce method

const myNums = [1,2,3,4]


/* const myTotal = myNums.reduce(function (acc, curval) {
    console.log(`acc value is ${acc} and curval is ${curval}`);
    return acc + curval
},0) */

//const myTotal = myNums.reduce( (acc, curval) => acc+curval,0)

//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalCartValue = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(TotalCartValue);