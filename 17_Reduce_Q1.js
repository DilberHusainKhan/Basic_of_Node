let arr = [10, 13, 17, 19, 15, 21, 23];
// quen 1:-
// print all prime number in given arr
let prime = arr.reduce((pv, cv, ci, oarr) => {
    let flag = true;
    for (let div = 2; div * div <= cv; div++) {
        if (cv % div == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        return pv + 1;
    } else {
        return pv;
    }
}, 0);

console.log(prime);