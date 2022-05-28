console.log("Before defination", a);
var a;
console.log("After defination".a);
a = 20;
console.log("after initialization", a);

// Question 1
function fn() {
    console.log("Before defination", b);
    var b;
    console.log("After defination", b);
    b = 10;
    console.log("After Initialization", b);
}
fn();

