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
