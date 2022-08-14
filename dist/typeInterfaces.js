"use strict";
// an interface is a way of defining an object type
// an “object type” can be thought of as, “an instance of a class could conceivably look like this"
const user = {
    name: "Sam Solman",
    age: 47,
};
console.log(user);
// class extends class
class Animal {
    eat(food) {
        console.log(`Animal ate ${food}!`);
    }
}
class Dog extends Animal {
    bark(intensity) {
        let result = "";
        for (let i = 1; i <= intensity; i++) {
            result += "bhow! ";
        }
        console.log(result);
    }
}
// TS is sad coz bark is not a property of Animal but Dog
// const doggy: Animal = new Dog();
// doggy.bark(5);
const doggy = new Dog(); // note how we used a class as type :0
doggy.bark(5);
doggy.eat("Pedigree");
// class implements interface
class CarImpl {
    constructor(modelName, carType, brandName, isEV, transmission) {
        this.modelName = modelName;
        this.carType = carType;
        this.brandName = brandName;
        this.isEV = isEV;
        this.transmission = transmission;
    }
    drive(fuel) {
        let result = "";
        for (let i = 1; i <= fuel; i++) {
            result += "vroom! ";
        }
        console.log(result);
    }
}
let myCar = new CarImpl("i10", "hutchback", "Hyundai", false, "manual");
console.log(myCar);
myCar.drive(5);
// redeclaration of an interface with new properties
// can be used to augment to already declared interfaces
// augmentation of props works across all of code
// in general, TS will check all the code at once for types
// thus augmenting to an interface, augments it for the entire code
