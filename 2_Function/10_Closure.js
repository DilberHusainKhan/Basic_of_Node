// Closure is the property by which inner function can access the values of varaible 
// instead outer function remove from stack

function outer(first) {
    console.log("Inside Outer");
    return function inner(second) {
        console.log("Inside inner");
        return first * second;
    }
}
let rVal = outer(2);
console.log("Before Calling rval that contains inner");
let ans = rVal(4);
console.log(ans);

// output
// Inside Outer
// Before Calling rval that contains inner
// Inside inner
// 8

// Example 2
function firstName(first) {
    return function lastName(last) {
        return function age(age) {
            console.log(`Hellow ${first} ${last} sir you are ${age} year old`);
            return `Hellow ${first} ${last} sir you are ${age} year old`
        }
    }
}
let rValFirst = firstName("DIlber Husain")
let rValsecond = rValFirst("Khan");
let rage = rValsecond(25);
console.log(rage);

// Application --> async programming ,

