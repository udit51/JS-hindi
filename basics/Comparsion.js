//if data types is different then sometimes it will convert the data type and then compare the values and gives the output  and sometimes does not gives the predictable output hence make sure data types are same before comparing the values

console.log(NULL == 1); //false
console.log(NULL == 0); //false
console.log(NULL >= 0); //true ; because NULL is converted to 0 and 0 is greater than or equal to 0

//comparison operator and equal to operator both are different in java script , comparison operator is used to compare the values and equal to operator is used to compare the values and data types as well

console.log(undefined == 0); //false

console.log(undefined == NULL); //true because both are converted to 0

console.log(undefined == false); //false because undefined is converted to NaN and false is converted to 0

console.log(undefined >= NULL); //true because both are converted to 0

//Strict check equality operator -> it checks the values and data types as well and if data types are different then it will not convert the data types and gives the output
console.log(undefined === NULL); //false
console.log(2 === 2); //true