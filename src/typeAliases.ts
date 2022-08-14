type Coordinate = {
  x: number;
  y: number;
};

// TS breaks here as we cannot have multiple type aliases with same name
// export type Coordinate = {
//   x: number;
//   y: number;
// };

// TS breaks here as we cannot have a interface with same name as type alias
// interface Coordinate {}

// TS is perfectly ok if we have two interfaces with the same name
interface Car {}
interface Car {}

// using the type alias Coordinate
const firstPoint: Coordinate = {
  x: 1.4315,
  y: 5.8975,
};

const secondPoint: Coordinate = {
  x: 8.1234,
  y: 3.7654,
};

function findDistanceBetweenTwoPoints(p1: Coordinate, p2: Coordinate): number {
  let result: number = ((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2) ** 0.5;
  return result;
}

console.log(findDistanceBetweenTwoPoints(firstPoint, secondPoint));
