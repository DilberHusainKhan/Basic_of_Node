// Question 

let str = "My name is Dilber Husain Khan. I am a Software Developer. I believe in learning by doing. I need courage and patience.";

// ans = "Khan Husain Dilber is name My."


// slpit with .
let res = str.split(".").splice(" ");
console.log(res);

// remove last " "
let res1 = res.filter(v => v.length > 0);
console.log(res1);

// remove space before string
let res2 = res1.map(v => v.trim());
console.log(res2);

//make 2D arr 
let res3 = res2.map(s => s.split(" "));
console.log(res3);

// reverse by using Foreach 
res3.forEach(function (a) {
    a.reverse();
})
console.log(res3);

// join with space
let res4 = res3.map(s => s.join(" "));
console.log(res4);

// now add . using map
let res5 = res4.map(s => s + ".");
console.log(res5);

// join the all str
let final = res5.reduce(function (pv, cv, ci, oarr) {
    return pv + " " + cv;
})

console.log(final);
