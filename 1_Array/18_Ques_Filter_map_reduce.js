let person = [
    { name: "A", age: 24, gender: "M" },
    { name: "B", age: 6, gender: "F" },
    { name: "C", age: 5, gender: "F" },
    { name: "D", age: 25, gender: "M" },
    { name: "E", age: 32, gender: "F" },
    { name: "F", age: 25, gender: "F" },
    { name: "G", age: 26, gender: "M" },
    { name: "H", age: 28, gender: "M" },
];

// find the sum of the square of all valid candidate
// first we filter all the valid element and then we map the array with the square of age then we sum it.
let result = person.filter(v => v.gender == 'F' && v.age >= 20 && v.age <= 30).map(v => v.age ** 2).
    reduce(function (pv, cv) {
        return pv + cv;

    }, 0);

console.log(result);