// map is itself function  -->  map()
// map take as input a callback function --> map(function(){})
// the callback take 3 parameter  (value , index , original_arr) --> map( function(v,i,oarr){})
// map will call the callback multiple time (one for each value)
// for each run of callback map will pass v,i, and original array to callback
let arr = [10, 20, 30, 40, 50];
arr.map(function (v, i, oarr) {
    console.log("Value --> " + v + " index --> " + i + " from  array -->" + oarr);
})

// callback will process the value and index and return single value 
// Single value returned by each run of callback will be collected in a new array
// map return that new array and the length of that array is same as original
let sqarr = arr.map(function (v, i, oarr) {
    return v * v;
})
console.log("Square of array");
console.log(sqarr);
