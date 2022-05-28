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

// question 2
function fn2() {
    console.log("19", c);
    var c;
    console.log("21", c);
    c = 20;
    if (true) {
        var c = 30;
        console.log("24", c);
    }
    console.log("27", c);
}
fn2()
