"use strict";
const add2ImplFnExpr = function (a, b) {
    return a + b;
};
const add2ImplArrowFn = (a, b) => a + b;
const add3ImplArrowFn = (a, b, c) => a + b + c;
console.log(add2ImplArrowFn(1, 4), add2ImplFnExpr(1, 2), add3ImplArrowFn(1, 2, 3));
function fnThatReturnsNothing() {
    console.log('Executed the function that returns nothing!');
}
// TS is sad at both of the below instances
// if(fnThatReturnsNothing()) {}
// fnThatReturnsNothing().someProperty;
