let obj = {
    fun: function () {
        console.log("This man name is " + this.fullName + " and his age is " + this.age);
    },
    fun1: function () {
        console.log("This man name is " + obj.fullName + " and his age is " + obj.age);
    },
    fullName: "Dilber Husain Khan",
    age: 23
}

obj.fun();
obj.fun1();
// output
// This man name is Dilber Husain Khan and his age is 23
// This man name is Dilber Husain Khan and his age is 23