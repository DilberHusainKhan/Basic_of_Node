// var is a function scope
// question 2
var c = 10;
function fn2() {
    console.log("Line 5", c);
    var c;
    console.log("Line 7", c);
    c = 20;
    if (true) {
        var c = 30;
        console.log("Line 11", c);
    }
    console.log("Line 13", c);
}
console.log("Line 15",c);
fn2()
