let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let mapEX = arr.map((v, i, oarr) => v % 2 == 1);
let filterEx = arr.filter((v, i, oarr) => v % 2 == 1);

console.log(mapEX);
console.log(filterEx);