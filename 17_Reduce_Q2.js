let arr2d = [[2, 8, 10], [34], [45, 31, 25, 64, 72, 88], [], [25, 73]];

let arr = arr2d.reduce(function (pv, cv, ci, oarr) {
    let narr = pv.concat(cv);
    return narr;
}, []);

console.log(arr);
