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

// ways of calling a function
obj.fun1("Javvad ", "Abdullah");

// new onject
let obj2 = {
    fullName: "Humayun Anwar",
    age: 23
};

// call is a function. it is available on all functions.it canbe used to call the functions.
// the usecase is, if you want to overridethe default this.
// in below ex obj.fullName become Humayun Anwar.
console.log("-----------CALL()-------");
obj.fun1.call(obj2, "Saif", "Jazz");


// apply is simlar to call  --> apply(this,paremeter in array);
console.log("--------Apply()------------");
obj.fun1.apply(obj2, ["Javvad", "Saif", "Abdullah", "Wajahat"]);


// bind is dis-similar. it doesn't make call. it give you a new function to call.
console.log("----------Bind()-----------");
let boundFunction = obj.fun1.bind(obj2, "SAM", "RAM", "JOY");
boundFunction();
boundFunction("ROY")
