console.log("this is main... also... YOU GOT THIS");

// import manufacturingBusinesses from "./manufacturing.js";
// import DOM from "./DOM.js";
// import agents from "./purchaseAgents.js";
// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const totalRainfall = monthlyRainfall.reduce(reducer);

// console.log(totalRainfall);

const words = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumped",
  "over",
  "the",
  "lazy",
  "dog",
];
const reducer = (accumulator, currentValue) => `${accumulator} ${currentValue}`;
const sentence = words.reduce(reducer);

console.log(sentence);
