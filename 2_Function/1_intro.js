// function definition
function sayHello(name) {
    console.log("Hello ", name);
}

// function invocation
sayHello("Dilber");

// print a function
console.log(sayHello);

// print a function after calling it --> without return value
let rVal = sayHello("Humayun");
console.log("without return -->", rVal);

// function defination
function sayHelloReturn(name) {
    console.log("Return function, Hello ", name);
    return "Returned  Value..."
}
// print a function after calling it -> with return value
let newRVal = sayHelloReturn("Sam");
console.log("With return --> ", newRVal);

//if you don't pass any value in function
sayHello();  
