const myNumber = 42;
const myFloat = 42.012345;
const myString = "42";
console.log(myString === myFloat);
console.log(Number(myString)+3);
console.log(Number(true));
console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myFloat));
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myFloat));
console.log(typeof Number.parseFloat(myFloat));
console.log(Number.parseFloat("4.2345").toFixed(2).toString());
console.log(Number.isNaN("Pavel"));