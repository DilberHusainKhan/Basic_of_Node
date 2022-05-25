// Find -> Sane as Some , but it provide First valid value
// Custom find
Array.prototype.myFind = function (callback) {

    for (let i = 0; i < this.length; i++) {
        let v = this[i];
        let rv = callback(v, i, this);
        if (rv) {
            return v;
        }
    }
    return undefined;
}
// data
let arr = [
    { name: "A", age: 9, gender: "F" },
    { name: "B", age: 25, gender: "M" },
    { name: "C", age: 15, gender: "F" },
    { name: "D", age: 27, gender: "M" },
    { name: "E", age: 27, gender: "F" },
]

// logic
let firstValidValue = arr.find((v, i, oarr) => {
    if (v.gender == 'F' && v.age >= 20 && v.age <= 30) {
        return true;
    } else {
        return false;
    }
})
console.log(firstValidValue);

// using custom find
let firstValidValueCustom = arr.myFind((v, i, oarr) => {
    if (v.gender == 'F' && v.age >= 20 && v.age <= 30) {
        return true;
    } else {
        return false;
    }
})
console.log(firstValidValueCustom);


// FIND INDEX
// findIndex -> it return the first valid index
// custom findIndex
Array.prototype.myFindIndex = function (cb) {
    for (let i = 0; i < this.length; i++) {
        let v = this[i];
        let rv = cb(v, i, this);
        if (rv) {
            return i;
        }
    }
    return -1;
}
// findindex
let firstValidValueIndex = arr.findIndex(v => v.gender == 'F' && v.age >= 20 && v.age <= 30);
console.log(firstValidValueIndex);

// custom findIndex
let firstValidValueIndex1 = arr.myFindIndex(v => v.gender == 'F' && v.age >= 20 && v.age <= 30);
console.log(firstValidValueIndex1);

