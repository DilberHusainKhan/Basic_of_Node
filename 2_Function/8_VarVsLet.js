// You can resaign var.
// function scope redeclare
// you can access var variable before initialization;❌
var a; 
a = 10;
var a;
console.log(a);     // 10

// Let

// you cann't acces letr variable before defination
// Temporal dead zone
// you cann't redeclare it

// console.log(b);  //Cannot access 'b' before initialization
let b;
console.log(b);     //undefined 
// Block scope
function fn() {
    let b = 30;
    console.log(b);     // 30
}
fn()
