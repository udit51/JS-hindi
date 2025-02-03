// singleton  -> constructor se banega toh humesha singleton hi hoga 
// Object.create  -> this is a constructor mathod and isimein singleton bntaa hai 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Udit", //by default name is string
    "full name": "Udit Singh",

    [mySym]: "mykey1",  //-> if square brackets are used then the key will be treated as a variable and if not used then it will be treated as a string hence the above declaration (on 6th Line) will not work...

    age: 18,
    location: "Jaipur",
    email: "udit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

///not a good practice to  use this in order to access the object properties
// console.log(JsUser.email)


//accessing object properties 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])



JsUser.email = "hitesh@chatgpt.com" // can override values if not freezed 
// Object.freeze(JsUser)  -> this will freeze the object and we cannot change the values of the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // string interpolation and this keyword used to access the object properties
}

console.log(JsUser.greeting()); //if we will not use parenthesis then it will return the function definition

console.log(JsUser.greetingTwo());

// and here function will return one undefined too as an output because we are not returning anything from the function and hence it will return undefined by default -> this is the default behaviour of the function in JS -> more details further in the course