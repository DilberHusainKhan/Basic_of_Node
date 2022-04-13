// Unshift ==> add element front of an array

let arr = [20, 30, 80, 100, 40];
console.log(arr.length);
displayArray(arr);
// unshift
let rv = arr.unshift(1000);
console.log(rv);
displayArray(arr);

// shift => remove element from first index and it return value that remove

let newrv = arr.shift() //[1000,20,30,80,100,40]  newrv = 1000
displayArray(arr)
console.log(newrv);

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}

