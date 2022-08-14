"use strict";
// using the type alias Coordinate
const firstPoint = {
    x: 1.4315,
    y: 5.8975,
};
const secondPoint = {
    x: 8.1234,
    y: 3.7654,
};
function findDistanceBetweenTwoPoints(p1, p2) {
    let result = ((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2) ** 0.5;
    return result;
}
console.log(findDistanceBetweenTwoPoints(firstPoint, secondPoint));
