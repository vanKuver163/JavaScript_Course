
const myArray = [];

myArray[0] = "Pavel";
myArray[1] = 1001;
myArray[2] = false;

console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length-1]);

console.log(myArray[1]);

myArray.push("Dnd");

console.log(myArray);

const lastItem = myArray.pop();

console.log(lastItem);

const newLength = myArray.unshift(42);

console.log(newLength);

const firstItem = myArray.shift();

console.log(firstItem);
console.log(myArray);

myArray.splice(1,0, 42);

console.log(myArray);

const newArray = ['A', 'B', 'C', 'D', 'E', 'F'];

const newArr = newArray.slice(2, 5);

console.log(newArr);

console.log(newArray.reverse());

const newString = newArray.join();

console.log(newString);

const arr = newString.split(",");

console.log(arr);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const abArray = [...myArrayA, ...myArrayB];

console.log(abArray);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);

console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clotheaDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clotheaDept[1][0]);

const sportsStore = [equipDept, clotheaDept];

console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);





