interface Data {
  name: string;
  unit: string;
  value: number;
}

function getData(type: string): ["data", Data] | ["error", Error] {
  if (type === "age") return ["data", { name: type, unit: "years", value: 15 }];
  if (type === "weight")
    return ["data", { name: type, unit: "kilograms", value: 5 }];
  return ["error", new Error("No data for the specified type.")];
}

const data = getData("aged");

// for 0 index element we get all string related methods
// data[0]

// for 1 index element we get to access only name property coz that is gauranteed in both Error and Data
// data[1]

if (data[0] == "data") {
  // for 1 index element now we get all three props from interface Data
  // this is because we have already made clear (in tuple declarations) that when data[0] is string "data"
  // then the 1 index element is definitely going to be of type Data
  // so instead of showing the common props from Error and Data we can see all three propeties of interface Data
  console.log(`${data[1].name} ${data[1].unit} ${data[1].value}`);
}

if (data[0] == "error") {
  // for 1 index element now we get all three props from interface Error
  // this is because we have already made clear (in tuple declarations) that when data[0] is string "error"
  // then the 1 index element is definitely going to be of type Error
  // so instead of showing the common props from Error and Data we can see all three propeties of interface Error
  console.log(`${data[1].name} ${data[1].message} \n${data[1].stack}`);
}

interface Fruit {
  pricePerUnit: number;
  name: string;
}

interface StoreItem {
  arrivalDate: Date;
  supplier: string;
}

function giveFruitIntersection(): Fruit & StoreItem {
  // this does not work!
  // return {
  //   pricePerUnit: 15,
  //   name: "apple",
  //   arrivalDate: new Date(),
  // };

  // this does not work!
  // return {
  //   name: "apple",
  //   arrivalDate: new Date(),
  //   supplier: "fresh farm ltd.",
  // };

  // this does not work!
  // return {};

  // specifying all properties in both of Fruit and StoreItem works!
  return {
    pricePerUnit: 15,
    name: "apple",
    arrivalDate: new Date(),
    supplier: "fresh farm ltd.",
  };
}

function giveFruitUnion(): Fruit | StoreItem {
  // this does not work!
  // return {};
  
  // this does not work!
  // return {
  //   pricePerUnit: 20;
  // }

  // this does not work!
  // return {
  //   arrivalDate: new Date();
  //   pricePerUnit: 20;
  // }

  // this works!
  // return {
  //   pricePerUnit: 15,
  //   name: "apple",
  // };

  // this works!
  // return {
  //   pricePerUnit: 15,
  //   name: "apple",
  //   arrivalDate: new Date(),
  // };

  // this works!
  // return {
  //   name: "apple",
  //   arrivalDate: new Date(),
  //   supplier: "fresh farm ltd.",
  // };

  // this works!
  return {
    pricePerUnit: 15,
    name: "apple",
    arrivalDate: new Date(),
    supplier: "fresh farm ltd.",
  };
}
