const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  -> using toString() method to convert number to string and opens some more properties and methods


// console.log(balance.toFixed(1));  -> using toFixed() method to convert number to string and round off the number to the given decimal places



const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); -> using toPrecision() method to convert number to string and round off the number to the given significant figures


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); -> using toLocaleString() method to convert number to string and add commas to the number and en-IN is the locale for India 

//Epsilon -> The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1. It is approximately 2.2204460492503130808472633361816 x 10-16.

// console.log(Number.EPSILON); -> 2.220446049250313e-16






//Maths library in JavaScript comes by default with the language and it has a lot of methods and properties to work with numbers


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  -> using abs() method to get the absolute value of the number i.e. positive value of the number

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); -> highest value 
// console.log(Math.floor(4.9)); -> lowest value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); //-> random number between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // -> random number between 10 and 20