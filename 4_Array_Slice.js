// slice  like substring
// clone the arr 

let arr = [10, 20, 30, 40, 50];
display(arr)    //10,20,30,40,50 = 5
// first is include , 2 is exclude
let na1 = arr.slice(0, 2);
display(na1);   //10,20 = 2

let na2 = arr.slice(1, 3);   // form 1 to 2
display(na2);   //20,30 = 2

let na3 = arr.slice(1); // from 1 to end
display(na3);   //20,30,40,50 = 4

let na4 = arr.slice() // clone whole arr
display(na4);   //10,20,30,40,50 = 5

let na5 = arr.slice(-3, -2) // form third last 
display(na5);   //30 = 1

let na6 = arr.slice(-3); //from 3 last to end
display(na6)    //30,40,50 = 3

let na7 = arr.slice(1, -2) // from 1 to 3 last
display(na7)    //20,30 = 2

// display function 
function display(arr) {
    console.log(arr + " = " + arr.length);
}

// Shallow copy
console.log("Shallow copy");

let o1 = {
    age: 100
}
let o2 = {
    age: 200
}
let o3 = {
    age: 300
}

let anarr = [o1, o2, o3];
displayObjectArray(anarr);

let scopy = anarr.slice()
displayObjectArray(scopy);

scopy[0].age = 110;
displayObjectArray(anarr)
displayObjectArray(scopy);

//display function for object
function displayObjectArray(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i].age + " , "
    }
    console.log(str);
} 
