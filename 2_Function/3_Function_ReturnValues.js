// function definition
function fn(param) {
    console.log("I am  function ", param);
}

// String
fn("Dilber");

//boolean
fn(true);

//object 
fn({ name: "Humayun" })

// array
fn([10, 20, 30, 40]);

// null
fn();

// function are also variable --> function are first class citizen in js
function chotaFunctio() {
    console.log("Hello i am a chota fn");
}

function fn1(pram) {
    console.log("Pram", pram);
    pram();
}
// function can also be passed as an argument in a function

fn(chotaFunctio);

fn1(chotaFunctio)