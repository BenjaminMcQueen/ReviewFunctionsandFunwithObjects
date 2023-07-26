function add2(a, b) {
    return a + b
}

function add3(a, b, c) {
    return a + b + c
}

function add4(a, b, c, d)
{
    return a+b+c+d;
}

console.log(add2(1,2));
console.log(add3(3,4,5));
console.log(add4(6,7,8,9));

let derf1 = {"derfiness": true, "number":8008, "string":"Cheese"};
let derf2 = {"derfiness": false, "number":69, "string":"Theory"};
let derf3 = {"derfiness": null, "number":420, "string":"Instruments"};

console.log(derf1.derfiness);
console.log(derf2.number);
console.log(derf3.string);

console.log(derf1["number"]);
console.log(derf2["string"]);
console.log(derf3["derfiness"]);

derf1.florb="What.";
derf2.florb="Why?!";
derf3.florb="WHY?!";

derf1.florb="All is Florb.";
derf2.florb="All is Florb.";
derf3.florb="All is Florb.";