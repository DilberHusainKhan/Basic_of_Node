let obj = {
    fun1: function (friend1, friend2) {
        console.log("This man is called " + this.fullName + ". His age is " + this.age + ".");
        console.log(this.fullName + " say Hello to " + friend1);
        console.log(this.fullName + " say Hello to " + friend2);
        console.log(arguments);
    },
    fullName: "Dilber Husain Khan",
    age: 34,
}

// new onject
let obj2 = {
    fullName: "Humayun Anwar",
    age: 23
};

// call is a function. it is available on all functions.it canbe used to call the functions.
// the usecase is, if you want to overridethe default this.
// in below ex obj.fullName become Humayun Anwar.
console.log("-----------CALL()-------");
// obj.fun1.call(obj2, "Saif", "Jazz");

Function.prototype.myCall = function (value, ...ags) {
    var self = this;
    self.bind(value, ...ags)();
}

obj.fun1.myCall(obj2, "SSSS", "JJJJJ");

// 
Function.prototype.myBind = function (func, ...args) {
    let self = this;
    return function () {
        return self.apply(func, [...args]);
    }
}
let fun = obj.fun1.myBind(obj2, "BBBB", "CCCCC", "DDDDDDD")
fun();