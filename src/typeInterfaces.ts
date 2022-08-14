// an interface is a way of defining an object type
// an “object type” can be thought of as, “an instance of a class could conceivably look like this"

interface UserInfo {
  name: string;
  age: number;
}

const user: UserInfo = {
  name: "Sam Solman",
  age: 47,
};

console.log(user);

// class extends class

class Animal {
  eat(food: string): void {
    console.log(`Animal ate ${food}!`);
  }
}

class Dog extends Animal {
  bark(intensity: number): void {
    let result: string = "";
    for (let i: number = 1; i <= intensity; i++) {
      result += "bhow! ";
    }
    console.log(result);
  }
}

// TS is sad coz bark is not a property of Animal but Dog
// const doggy: Animal = new Dog();
// doggy.bark(5);

const doggy: Dog = new Dog(); // note how we used a class as type :0
doggy.bark(5);
doggy.eat("Pedigree");

// interface extends interface

interface Vehicle {
  brandName: string | undefined;
  isEV: boolean | undefined;
  transmission: string | undefined;
}

interface Car extends Vehicle {
  modelName: string | undefined;
  carType: string | undefined;
  drive(fuel: number): void;
}

// class implements interface

class CarImpl implements Car {
  modelName: string;
  carType: string;
  brandName: string;
  isEV: boolean;
  transmission: string;

  constructor(
    modelName: string,
    carType: string,
    brandName: string,
    isEV: boolean,
    transmission: string
  ) {
    this.modelName = modelName;
    this.carType = carType;
    this.brandName = brandName;
    this.isEV = isEV;
    this.transmission = transmission;
  }

  drive(fuel: number): void {
    let result: string = "";
    for (let i: number = 1; i <= fuel; i++) {
      result += "vroom! ";
    }
    console.log(result);
  }
}

let myCar: CarImpl = new CarImpl(
  "i10",
  "hutchback",
  "Hyundai",
  false,
  "manual"
);
console.log(myCar);
myCar.drive(5);

// first time delclaration of Food
interface Food {
  ingredients: string[];
}

// TS is sad here coz even though we added calories later into the interface
// we have to give that property even before it was actually added

// const dosa: Food = {
//   ingredients: ['rice', 'coconut']
// }

// second declaration will add new properties to Food
interface Food {
  calories: number;
}

// redeclaration of an interface with new properties
// can be used to augment to already declared interfaces
// augmentation of props works across all of code
// in general, TS will check all the code at once for types
// thus augmenting to an interface, augments it for the entire code