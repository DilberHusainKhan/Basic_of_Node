// print all sub arrays of an array using slice

let arr = [10, 20, 30, 40, 50]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++)
        console.log(arr.slice(i, j));
}

//output
// [ 10 ]
// [ 10, 20 ]
// [ 10, 20, 30 ]
// [ 10, 20, 30, 40 ]
// [ 10, 20, 30, 40, 50 ]
// [ 20 ]
// [ 20, 30 ]
// [ 20, 30, 40 ]
// [ 20, 30, 40, 50 ]
// [ 30 ]
// [ 30, 40 ]
// [ 30, 40, 50 ]
// [ 40 ]
// [ 40, 50 ]
// [ 50 ]