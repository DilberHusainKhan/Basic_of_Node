// var
// function outer() {
//     var arr = [];
//     for (var i = 0; i < 3; i++) {
//         arr.push(function () {
//             console.log(i);
//         })
//     }
//     return arr;
// }
// solution
function outer() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        function outer1() {
            var j = i;
            return function () {
                console.log(j);
            }
        }
        arr.push(outer1());
    }
    return arr;
}


// let 
// function outer() {
//     var arr = [];
//     for (let i = 0; i < 3; i++) {
//         arr.push(function () {
//             console.log(i);
//         })
//     }
//     return arr;
// }
console.log("Before calling outer");
var arr = outer();
arr[0]();
arr[1]();
arr[2]();
console.log("After calling outer");

// if we use var then we get 3,3,3 as answer
// Before calling outer
// 3
// 3
// 3
// After calling outer


// if we use let then we get 0,1,2
// Before calling outer
// 0
// 1
// 2
// After calling outer