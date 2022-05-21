let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [21, 54, 12, 33, 98, 200, 76, 100, 11, 291, 34];

// ques = sort and reverse these arrays
let result = sarr.sort().reverse();
console.log(result);

// number
let numberresult = narr.sort((a, b) => a - b).reverse();
console.log(numberresult);