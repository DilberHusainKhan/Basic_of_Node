// fill , copywithin()

// fill
let arr = [10, 20, 30, 40, 50, 60];
// fill(value, start , end+1);
arr.fill(5, 1, 4);
console.log(arr);

// fill(value, start); from start t end
arr.fill(7, 1);
console.log(arr);

arr.fill(8)
console.log(arr);


// copywithin( target, start, end)
let arr1 = [10, 20, 30, 40, 50, 60, 70];
console.log(arr1);
arr1.copyWithin(2, 3, 5);
console.log(arr1);



