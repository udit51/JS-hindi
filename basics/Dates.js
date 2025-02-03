// Dates A pain point in JS 
//Temporal API -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal  This is the new way to work with dates in JS and it is still in experimental phase

let myDate = new Date()
// console.log(myDate.toString()); -> gives the date and time in string format
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); -> object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // -> gives the timestamp in milliseconds from 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); -> gives the timestamp in seconds from 1970

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `  -> gives the day of the week

newDate.toLocaleString('default', {
    weekday: "long", //-> we define objects here to get the day of the week hence we can customize the output
    
})