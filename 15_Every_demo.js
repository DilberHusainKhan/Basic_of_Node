// custome Every
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let val = this[i];
        let rv = callback(val, i, this);
        if (!rv) {
            return false;
        }
    }
    return true;
}



// if every callback return true then every return true

// Ques: Are all Female Candidate Valid
let arr = [
    { name: "A", age: 20, gender: "M" },
    { name: "B", age: 21, gender: "F" },
    { name: "C", age: 22, gender: "F" },
    { name: "D", age: 23, gender: "F" },
    { name: "E", age: 24, gender: "M" },
    { name: "F", age: 25, gender: "F" },
    { name: "G", age: 34, gender: "M" },
    { name: "H", age: 27, gender: "F" },
];

// filter all female
let allFemaleCandidate = arr.filter(c => c.gender == "F").every(fc => fc.age >= 20 && fc.age <= 30);
console.log(allFemaleCandidate);

// custome every
let allFemaleCandidateValid = arr.filter(c => c.gender == "F").myEvery(fc => fc.age >= 20 && fc.age <= 30);
console.log(allFemaleCandidateValid);
