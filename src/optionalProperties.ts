let bike: {
  regNo: number;
  modelName: string;
  brandName?: string; // this is an optional property
} = {
  regNo: 54325278,
  modelName: "Alto 800",
};

// console.log(`The bike is electronic: ${bike.brandName.charAt(5)}`); TS is sad at this line!

if (typeof bike.brandName !== "undefined") {
  // when using this type gaurd, TS is happy!
  console.log(`The bike is electronic: ${bike.brandName.charAt(5)}`);
}
