// part 1
// fun();
// var fun = function () {
//     gun();
// }
// var gun = function () {
//     console.log("I am inside gun");
// }
// output
// fun is not a function
// because fun is a variable and before initialization variable is undefine

// part 2
// var fun = function () {
//     gun();
// }
// fun();
// var gun = function () {
//     console.log("I am inside gun");
// }
// output
// gun is not a function
// same reson

// part 3
// var fun = function () {
//     gun();
// }
// var gun = function () {
//     console.log("I am inside gun");
// }
// fun();
// output
// I am inside gun

// part 4
// fun();
// function fun() {
//     gun();
// }
// var gun = function () {
//     console.log("I am inside the gun function");
// }
// output 
// gun is not a function

// part 5
fun();
function fun() {
    gun();
}
function gun() {
    console.log("I am inside the gun function");
}
// output
// I am inside the gun function
// because of function decleation we show this ans
