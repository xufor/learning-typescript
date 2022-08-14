interface UserInfo {
    name: string;
    age: number;
}
declare const user: UserInfo;
declare class Animal {
    eat(food: string): void;
}
declare class Dog extends Animal {
    bark(intensity: number): void;
}
declare const doggy: Dog;
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
declare class CarImpl implements Car {
    modelName: string;
    carType: string;
    brandName: string;
    isEV: boolean;
    transmission: string;
    constructor(modelName: string, carType: string, brandName: string, isEV: boolean, transmission: string);
    drive(fuel: number): void;
}
declare let myCar: CarImpl;
interface Food {
    ingredients: string[];
}
interface Food {
    calories: number;
}
