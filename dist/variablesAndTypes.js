"use strict";
let x = 7; // ts figures out that x has a type of number
// x = "hello"; since a variable is born with a type, ts is sad at this line
const y = 10; // y has a type 10 - WAT!
const z = 10; // z has a type number - WAT!
let a = 10;
console.log(a * 15);
let b = "hello";
a = b; // thus keep in mind, that a variable with any type can break our typed code
console.log(a * 70);
