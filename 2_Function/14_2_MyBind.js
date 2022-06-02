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

// bind
let fun = obj.fun1.bind(obj2, "BBBB", "CCCCC", "DDDDDDD")
fun();

// custom bind
Function.prototype.myBind = function (func, ...args) {
    let self = this;
    return function () {
        return self.apply(func, [...args]);
    }
}
let fun2 = obj.fun1.myBind(obj2, "BBBB", "CCCCC", "DDDDDDD")
fun2();

// custom bind by pepcoding
Function.prototype.myBind1 = function () {
    let orgfun = this;
    let args = Array.from(arguments);   //change arguments to array and store in args

    let boundFunction = function () {
        let thisForOrgFun = args[0];    //I st parameter is function
        let argsForOrgFun = args.slice(1);  //argument are start from 1 to last
        let argFroInvocation = Array.from(arguments);   //parameter provide when function call
        argsForOrgFun = argsForOrgFun.concat(argFroInvocation);
        orgfun.apply(thisForOrgFun, argsForOrgFun);
    }
    return boundFunction;
}

let newBindResult = obj.fun1.myBind1(obj2, "JAZZ", "JJJJJ", "KKKKK", "LLLL");
newBindResult("MMMM");

