/*
Execution Context is of two types:
1. Global Execution Context
2. Function Execution Context

Js code runs in two phases: 

1. Memory creation phase / creation phase / memory phase
2. Execution Phase


Execution order for below code example:

1. Global Execution -> this
2. Memory Phase (all vars are allocated memory and value is undefined). functions' value is 'defination'
val1 -> undefined
val2 -> undefined
addNum -> defination
result1 -> undefined
result2 -> undefined

3. Execution phase:
val1 = 10
val2 = 5
addNum -> New variable environment + Execution thread
The memory phase and Execution phase will again run in a new Sandbox for each function

For addNum:
Memory phase:
val1 -> undefined
val2 -> undefined
total -> undefined

Execution phase:
num1 -> 10
num2 -> 5
total -> 15
return value is returned to global execution context

NOTE: Function's Sandbox is auto deleted once the function has returned something or its execution has finished.
*/

let val1 = 10
let val2 = 5

function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)