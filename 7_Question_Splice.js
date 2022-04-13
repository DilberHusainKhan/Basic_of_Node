//remove all prime number in an array
let arr = [2, 9, 12, 11, 4, 5, 6, 7]

for (let i = 0; i < arr.length; i++) {
    let num = arr.splice(i, 1);
    for (let j = 2; j * j < num; j++) {
        if (num % j == 0) {
            arr.splice(i, 0, num);
            break;
        }
    }
}
display(arr);
function display(arr) {
    console.log(arr + " = " + arr.length)
}