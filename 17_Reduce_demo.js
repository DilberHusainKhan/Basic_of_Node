// custom reduce
Array.prototype.myReduce = function (cb, n) {
    let pv;
    if (n != undefined) {
        pv = n;
        for (let i = 0; i < this.length; i++) {
            let cv = this[i];
            pv = cb(pv, cv, i, this);
        }
    } else {
        pv = this[0];
        for (let i = 1; i < this.length; i++) {
            let cv = this[i];
            pv = cb(pv, cv, i, this);
        }
    }
    return pv;
}

// reduce
let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce(function (pv, cv, ci, oarr) {
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
})
console.log(sum);
//custom reduce
let sum1 = arr.myReduce(function (pv, cv, ci, oarr) {
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
}, 5)
console.log(sum1);

// sum2
let sum2 = arr.myReduce((pv, cv) => pv + cv);
console.log(sum2);