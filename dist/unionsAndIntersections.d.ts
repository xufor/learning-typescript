interface Data {
    name: string;
    unit: string;
    value: number;
}
declare function getData(type: string): ["data", Data] | ["error", Error];
declare const data: ["data", Data] | ["error", Error];
interface Fruit {
    pricePerUnit: number;
    name: string;
}
interface StoreItem {
    arrivalDate: Date;
    supplier: string;
}
declare function giveFruitIntersection(): Fruit & StoreItem;
declare function giveFruitUnion(): Fruit | StoreItem;
