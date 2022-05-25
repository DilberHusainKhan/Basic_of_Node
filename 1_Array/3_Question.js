
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let even = [];
let odd = [];
while (arr.length > 0) {
    let rv = arr.shift();
    if (rv % 2 == 0) {
        even.push(rv);
    } else {
        odd.push(rv);
    }
}
arr = even.concat(odd);
console.log(arr);