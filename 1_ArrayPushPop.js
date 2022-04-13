// push append one or more element in the array
// push return the length of array

let arr = [20, 30, 80, 100, 40];
console.log(arr.length);
displayArray(arr);
arr.push(1000);
arr.push(2000, 3000, 4000, 5000);
displayArray(arr);

let rv = arr.push(6000, 7000);
displayArray(arr)
console.log(rv);

// POP => remove 1 element from the array and return that elements
let nrv = arr.pop();
displayArray(arr)
console.log(nrv);

// we can store data at any index in array 
arr[20] = 123;   //no array out of index exception occure
displayArray(arr);

// we also store are in key form like 
arr['kuchbhi'] = 1500;
displayArray(arr); // kuschbhi data will not show but store because array caan be used like object also
console.log(arr['kuchbhi']);

console.log(Object.keys(arr));
// display function
function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}