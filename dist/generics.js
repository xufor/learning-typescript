"use strict";
function Stack() {
    this.stack = [];
    this.pop = function () {
        const poppedElement = this.stack.shift();
        if (poppedElement) {
            return poppedElement;
        }
        throw Error("No element to pop.");
    };
    this.push = function (item) {
        this.stack.unshift(item);
    };
}
// The as keyword is a Type Assertion in TypeScript.
// It tells the compiler to consider the object as another type than the type the compiler infers the object to be.
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
try {
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
}
catch (e) {
    console.log(`Stack is empty. ${e.message}`);
}
