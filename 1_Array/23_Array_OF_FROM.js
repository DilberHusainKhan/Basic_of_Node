// Array.of() is used to make array

// Array.of is a static function
let arr = Array.of(10);
let arr1 = Array.of(10, 20, 30, 40, 50);

console.log(arr);
console.log(arr1);

let str = "Dilber Husain Khan";
// Array.from is used to convert array from array like  ex- string , node like
let arrOfStr = Array.from(str);
console.log(arrOfStr);

// Example   increase each letter of string by 1
let str1 = "Dilber";
let strres = Array.from(str1);
console.log(strres);
let resu = strres.map(ch => (ch.charCodeAt(0) + 1));
console.log(resu);

let resul = resu.map(ch => String.fromCharCode(ch));
console.log(resul);

let result = resul.join("");
console.log(result);

