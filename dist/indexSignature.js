"use strict";
// const dict = {
//   home: { number: 547387, country: "IN" },
//   work: { number: 675381, country: "EN" },
//   fax: { number: 831389, country: "US" },
// };
var _a;
const dict = {
    home: { phone: 547387, country: "IN" },
    work: { phone: 675381, country: "EN" },
    fax: { phone: 831389, country: "US" },
};
console.log(dict["farmhouse"].country); // TS should warn me for undefined, code will break here!
// A better version of this can be written as!
const betterDict = {
    home: { phone: 547387, country: "IN" },
    work: { phone: 675381, country: "EN" },
    fax: { phone: 831389, country: "US" },
};
// TS now warns correctly
// console.log(betterDict['home'].country);
console.log((_a = betterDict["home"]) === null || _a === void 0 ? void 0 : _a.country); // no warning
if (betterDict["home"]) {
    // no warning
    console.log(betterDict["home"].country);
}
if (typeof betterDict["home"] !== "undefined") {
    // no warning
    console.log(betterDict["home"].country);
}
