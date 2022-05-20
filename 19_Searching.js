let arr = [10, 20, 30, 40, 50, 30, 40, 23, 32, 32, 4, 10, 70, 80, 90];

// find, findIndex, filter, 
//indexOf, lastIndexOf, includes

let IndexOfArr = arr.indexOf(30); //return first index of value, if not found return -1;
let LastIndexOfArr = arr.lastIndexOf(30); //return last index of value or return -1;
let IncludeArr = arr.includes(30); //return true or false;

// find used for complex problem
let findArr = arr.find(function (v, i, oarr) {
    return v == 30;
})

// findIndex --> index of value
let FindIndexArr = arr.findIndex(function (v, i, oarr) {
    return v == 30;
})

// filter
let FilterArr = arr.filter(function (v, i, oarr) {
    return v == 30;
})

console.log(IndexOfArr);
console.log(LastIndexOfArr);
console.log(IncludeArr);
console.log(findArr);
console.log(FindIndexArr);
console.log(FilterArr);
