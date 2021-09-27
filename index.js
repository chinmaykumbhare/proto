const Homies = [
    {index:0, name:"Aditya"},
    {index:1, name:"Mihir"},
    {index:2, name:"Pranav"}
];

console.log("Before Injection:");
console.log(Homies);

/**
 * console.log(Homies.__proto__); -> Function.__proto__
 * console.log(Homies.__proto__.__proto__); -> Object.__proto__
 * console.log(Homies.__proto__.__proto__.__proto__); -> null
 * Proof that in the end everything in JS is an object
 */

/**
 * Why is it harmful?
 * Data manipulation through backdoor possible.
 * Demonstrated below:
 */

let backdoor = [];
backdoor.__proto__ = Homies;
let manipulatedData = {index:3, name:"Chinmay"};
//assign
backdoor.__proto__[backdoor.__proto__.length] = manipulatedData;
//data injection into original object successful

console.log("After Injection:");
console.log(Homies);

//can be accessed by any function inside this file.
Function.prototype.greet = () => {
    console.log("Greetings of the day!");
}

const hello = () => {
    console.log("Hello!");
}
hello();
hello.greet();