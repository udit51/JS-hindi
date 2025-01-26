let age = "21";

console.log(typeof age);
console.log(typeof(age));

let valueInNumber = Number(age);  //number mein convert kar diya , but if we will to covert 33abc ya koi string to number than woh convert nhi hoga woh , uska value NaN show krega but if we'll check type of NaN then it will show number...
console.log(typeof valueInNumber)


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "Udit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Udit" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);








let str1 = "hello"
let str2 = " Udit"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");

// console.log("1" + 2 + 2);  -> value will be 122 because yaha preference aati hai agar pehele string hai toh woh string ko join karega and agar pehele number hai toh woh number ko add karega

// console.log(1 + 2 + "2");  -> value will be 32

// console.log( (3 + 4) * 5 % 3); ->using parenthesis is a good practice...

// console.log(+true); -> value is 1 because true is 1 yaha conversion ho raha hai because + sign hai jisse woh number mein convert ho raha hai kuyki plus sign defines number


// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
++gameCounter; 
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion          