// find all the ages of female

let person = [
    { name: "A", age: 24, gender: "M" },
    { name: "B", age: 26, gender: "F" },
    { name: "C", age: 25, gender: "F" },
    { name: "D", age: 25, gender: "M" },
    { name: "E", age: 23, gender: "F" },
    { name: "F", age: 31, gender: "F" },
    { name: "G", age: 26, gender: "M" },
    { name: "H", age: 28, gender: "M" },
];

// first filter all female the map the ages.
let result = person.filter((v, i, oarr) => v.gender == "F").map((v, i, oarr) => v.age);
console.log(result);