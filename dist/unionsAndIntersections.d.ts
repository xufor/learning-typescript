interface Data {
    name: string;
    unit: string;
    value: number;
}
declare function getData(type: string): ["data", Data] | ["error", Error];
declare const data: ["data", Data] | ["error", Error];
