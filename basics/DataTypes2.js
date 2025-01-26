//Primitive Data Types -> all are call by value i.e. they are stored in stack memory and they are immutable here we do not get direct access to memory location we just get the copy of the value and only allowed to makes changes there

// String , Number , Boolean , BigInt -> big values , Symbol , Undefined , Null


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n





//Reference data types or non primitive -> Objects stored in heap memory and we get the direct access to memory location and we can make changes there

//Array , Object Literals , Functions or Methods , Dates , Anything else


// JavaScript is a loosely typed language, which means that you don't have to declare the data type of a variable when you declare it. JavaScript automatically converts the variable to the correct data type, depending on its value. For example, if you declare a variable and assign it a string value, JavaScript will automatically convert the variable to a string data type.

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3