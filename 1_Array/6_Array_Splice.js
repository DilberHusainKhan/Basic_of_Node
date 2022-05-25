// splice ==> return remove items array 
// and update old array 
let arr = [10, 20, 30, 40, 50];
display(arr);

let newarr = arr.splice(2, 2, 300, 400, 500); //Ist 2 insert the element from ,  II nd 2 remove the 2 items, 
// last values are inserted in the old arr 
display(newarr);
display(arr);

function display(arr) {
    console.log(arr + " = " + arr.length);
}

