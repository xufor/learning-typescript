"use strict";
let bike = {
    regNo: 54325278,
    modelName: "Alto 800",
};
// TS is sad at this line!
// console.log(`The bike is electronic: ${bike.brandName.charAt(5)}`);
if (typeof bike.brandName !== "undefined") {
    // when using this type gaurd, TS is happy!
    console.log(`The bike is electronic: ${bike.brandName.charAt(5)}`);
}
