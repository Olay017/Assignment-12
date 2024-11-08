//SOLUTION 1
const message = "Welcome to Javascript ES6!";

const lowerCaseMessage = message.toLowerCase();
console.log(lowerCaseMessage);

const position = message.indexOf("Javascript");
console.log(position);

const replaceMessage = message.replace("Javascript", "ES6");
console.log(replaceMessage);

//SOLUTION 2
const ages = [21, 18, 45, 30];

const allAgesAbove18 = ages.every((age) => age >= 18);
console.log(allAgesAbove18);

const anyAgesBelow20 = ages.some((age) => age < 20);
console.log(anyAgesBelow20);

//SOLUTION 3
function greet(name = "Friend") {
  return `Hello, ${name}!`;
}

console.log(greet());

//SOLUTION 4
const numbers = [3, 6, 9, 12, 15, 18, 21];

const numbersGreaterThan10 = numbers.filter((num) => num > 10);
console.log(numbersGreaterThan10);

//SOLUTION 5
const msg = "Welcome to Javascript ES6!";

const lowerCaseMsg = message.toLowerCase();
console.log(lowerCaseMsg);

const positions = message.indexOf("Javascript");
console.log(positions);

const replaceMsg = message.replace("Javascript", "ES6");
console.log(replaceMsg);

//SOLUTION 6
const name = "Javascript";

const messages = `The length of the word '${name}' is ${name.length} characters.`;
console.log(messages);

//SOLUTION 7
const scores = [10, 15, 20, 25];

const totalScores = scores.reduce(
  (totalScores, currentScore) => totalScores + currentScore,
  0
);
console.log(totalScores);

//SOLUTION 8
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//SOLUTION 9
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];

const phoneProducts = products.find((product) => product.name === "Phone");
console.log(phoneProducts);

const productIdIndex = products.findIndex((product) => product.id === 3);
console.log(productIdIndex);

//SOLUTION 10
const items = ["apple", "banana", "cherry"];

const capitalizeItems = items.map(
  (item) => item.charAt(0).toUpperCase() + item.slice(1)
);
console.log(capitalizeItems);
