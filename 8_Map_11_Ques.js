// conveert the given array into specific arr format
let arr = [
    "Dilber Husain Khan",
    "Anwar Husain",
    "Musawwar Khan",
    "Humayun Khan",
    "Imdad Khan"
];

// convert it into ["D.H.","A.H.","M.K.",...]; using map
let newarr = arr.map(function (v, i, arr) {
    let newStr = v.split(" ");
    let str = "";
    for (let index = 0; index < newStr.length; index++) {
        str = str + newStr[index].charAt(0) + "."
    }
    v = str;
    return v;
})
console.log(newarr);


