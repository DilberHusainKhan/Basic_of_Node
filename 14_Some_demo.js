Array.prototype.mySome = function (callback) {

    for (let i = 0; i < this.length; i++) {
        let v = this[i];
        let rv = callback(v, i, this);
        if (rv) {
            return true;
        }
    }
    return false;
}

let arr = [
    { name: "A", age: 29, gender: "F" },
    { name: "B", age: 25, gender: "M" },
    { name: "C", age: 15, gender: "F" },
    { name: "D", age: 27, gender: "M" },
    { name: "E", age: 35, gender: "F" },
]

let isAnyValidCandidate = arr.mySome((v, i, oarr) => {
    if (v.gender == 'F' && v.age >= 20 && v.age <= 30) {
        return true;
    } else {
        return false;
    }
})


console.log(isAnyValidCandidate);

