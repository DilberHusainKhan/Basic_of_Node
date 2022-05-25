// memory for the  function are allocated before code is executed
// function are created in heep and there addresses are stored in stack
// there is no function overloading in js.

console.log("Script started");

// function invocation 
iamReal();

// 1. function defination
function iamReal() {
    console.log("I am Real");
}

// 2. function defination
function iamReal() {
    console.log("He is not real, I am the real one");
}

// function invocation
iamReal();
