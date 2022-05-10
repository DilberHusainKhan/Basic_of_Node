let arr = [
    {
        gender: "M",
        age: 24
    },
    {
        gender: "F",
        age: 24
    },
    {
        gender: "F",
        age: 27
    },
    {
        gender: "M",
        age: 20
    },
    {
        gender: "F",
        age: 19
    },
    {
        gender: "F",
        age: 29
    }, {
        gender: "F",
        age: 31
    }
];

let hire = arr.map(function (v, i, orr) {
    if (v.gender == "F" && (v.age >= 20 && v.age <= 30)) {
        return true;
    } else
        return false;
});
console.log(hire);

let newhire = arr.map((v, i, arr) => v.gender == "F" && v.age >= 20 && v.age <= 30);
console.log(newhire);