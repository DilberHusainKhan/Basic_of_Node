// function are variable
function outer(params) {
    console.log(params);
    params();
}

function chotafunc() {
    console.log("Hello I'm Chota function");
}
// function can be passed as a parameter to another function --> Higher Order function
outer(chotafunc);

// function's reference can be store in another varible -->function Expression 
let a = [1, 2, 3, 4, 5];
let b = a;
// function Expression
let anotheName = function () {
    console.log("I am function Expression");
}
anotheName();

// function return from a function
function fn() {
    return "Hello sir";
}
let rVar = fn();
console.log(rVar);

function newOuter() {
    console.log("Hello i am new outer function");
    return function inner() {
        console.log("inner function");
    }
}
let rval = newOuter();
console.log(rval);
rval();