"use strict";
// arrays: here no position has a particular type, infact all are same types
const counting = ["one", "two", "three", "four", "five"];
// tuples: here every position has a particular type
let carData = ["Honda City", 16, 2013];
// TS is a bit sad here coz we are not following the type of carData
// carData = ["Baleno", "Sedan", 2019];
// if we destructure the array then modelName will acquire a type of string
// similarly priceInLakhs will have a type of number
// and finally yearOfLaunch will have a type of number too
let [modelName, priceInLakhs, yearOfLaunch] = carData;
// since the type of modelName is of type number, then assigning it a number is definitely going to upset TS
// modelName = 6789;
