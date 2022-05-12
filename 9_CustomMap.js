Array.prototype.MyMap = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        let v = this[i];
        let rv = callback(v, i, this);
        res.push(rv);
    }
    return res;
}

let arr = [2, 3, 4, 5, 6];

// map function
let sqr1 = arr.map((v, i, orr) => v * v);
console.log(sqr1);

// custom map 
let sqr2 = arr.MyMap((v, i, arr) => v * v);
console.log(sqr2);