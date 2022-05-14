//Ques 1:- print the name of all items to uppercase whose price >=100
let ecom = [
    { name: "T-Shirt", price: 125 },
    { name: "Trouser", price: 25 },
    { name: "Pant", price: 500 },
    { name: "Pen", price: 10 }
];
let result = ecom.filter((v, i, oarr) => v.price >= 100).map((v, i, oarr) => v.name.toUpperCase())
let sameResult = ecom.filter((v) => v.price >= 100).map((v) => v.name.toUpperCase());
console.log(result);
console.log(sameResult);


// Ques 2:- print the cube of those number whose square is <=1000.
let Noarr = [100, 25, 6, 79, 23, 10, 550];
let result1 = Noarr.filter((v) => v * v <= 1000).map((v) => v ** 3);
console.log(result1);

// Ques 3:- Print all the items>=100 in uppercase else in lowercase
let result3 = ecom.map((v) => v.price >= 100 ? v.name.toUpperCase() : v.name.toLowerCase());
console.log(result3);

// Ques 4:- Print  all the cube of number whose cube is less than 1000;
let result4 = Noarr.filter(v => v ** 3 <= 1000).map(v => v ** 3);
console.log("Flter and then Map " + result4);
let result41 = Noarr.map(v => v ** 3).filter(v => v <= 1000)
console.log("map then filter " + result41);

// Ques 5:- find the result of
let result5 = Noarr.map(v => v * v).filter(v => v <= 1000).map(v => v ** 3);
console.log(result5);
