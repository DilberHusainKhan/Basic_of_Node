// let arr = [10, 20, [50, 60, [90, 100],], 30, [70, [110, 120],], 80, 40];
// let res = arr.flat();  //flat() take input parameter as level by default it is 1;
// console.log(res);

// let res1 = arr.flat(2);
// console.log(res1);

let arr2 = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];

let res21 = arr2.flat(0);
let res22 = arr2.flat(1);
let res23 = arr2.flat(2);
let res24 = arr2.flat(3);

console.log(res21); //[10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110]
console.log(res22);//[10,20,30,[50[70,80,90],60],40,110,120,[150,[170,180,190],160],140,200,110]
console.log(res23); //[10,20,30,50[70,80,90],60,40,110,120,150,[170,180,190],160,140,200,110]
console.log(res24); //[10,20,30,50,70,80,90,60,40,110,120,150,170,180,190,160,140,200,110]


// custom flat
Array.prototype.myFlat = function (td) {
    let oarr = this;
    let res = [];
    customFlat(oarr, td, res);
    return res;
}

function customFlat(node, td, res) {
    if (Array.isArray(node)) {
        if (td > 0) {
            for (let i = 0; i < node.length; i++) {
                customFlat(node[i], td - 1, res);
            }
        } else {
            for (let i = 0; i < node.length; i++) {
                res.push(node[i]);
            }
        }
    } else {
        res.push(node);
    }
}
// custom flat used
let myFlatRes = arr2.myFlat(2);
console.log(myFlatRes);