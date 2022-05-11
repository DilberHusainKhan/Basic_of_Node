// filter is itself function  -->  filter()
// filter take as input a callback function --> filter(function(){})
// the callback take 3 parameter  (value , index , original_arr) --> filter( function(v,i,oarr){})
// filter will call the callback multiple time (one for each value)
// for each run of callback filter will pass v,i, and original array to callback
let arr = [10, 20, 30, 40, 50];
arr.filter(function (v, i, oarr) {
    console.log("Value --> " + v + " index --> " + i + " from  array -->" + oarr);
})

// callback will process the value and index and return single BOOLEAN value 
// Single value returned by each run of callback will be used by the filter
// wheneve the true is recived by filter(returned by the callback) the filter return that new array
// filter return that new array
// length of that new array will be equal to no of trues return;

let arr1 = [2, 3, 4, 5, 6, 7];
let odd = arr1.filter((v, i, oarr) => {
    if (v % 2 == 1)
        return true;
    else
        return false;
});
console.log(odd);

// Custom filter
Array.prototype.myFilter = (function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        let v = this[i];
        let rv = callback(v, i, this);
        if (rv) {
            res.push(v);
        }
    }
    return res;
})

let even = arr1.myFilter((v, i, oarr) => v % 2 == 0);
console.log(even);