// union 
let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60],
    [10, 51, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 92, 100, 34, 60],
    [10, 50, 70, 80, 90, 100, 30, 60],
];

let result = arr2d.reduce(function (pv, cv, ci, oarr) {
    let union = cv.filter(v => !pv.includes(v)); //element of one array not in arr2
    return pv.concat(union); // now join in arr1  
})

console.log(result);

