function fn(param1, param2) {
    console.log("Inside fn", param1, param2);
}

// if we didn't pass any value then by default value is undefined
fn("Hello", "Hi");
fn("Hello");
fn();
fn("Hello", "Hii", "bye");

// Argument 
function fn1(param1, param2) {
    console.log("Argument", arguments);
    console.log(param1, param2);
}
// 
fn1("Hello", "Hii");
fn1("Hello", "Hii", "Bye");
fn1();
fn1("Hello");