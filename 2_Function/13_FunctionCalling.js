function fun(a, b) {
    console.log(a + " " + b);
    console.log(arguments); // argument is not an array it is like an array
    let res = Array.from(arguments); //how to make an array.
    let sq = res.map(x => x ** 2);
    console.log(sq);

}
fun();
fun(10);
fun(10, 20);
fun(10, 20, 30);