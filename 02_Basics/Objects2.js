//Singleton Objects


 // const tinderUser = new Object() -> this is a constructor method and will create a new object every time it is called . hence it is a singleton object


const tinderUser = {} // this is a non singleton object and will create a new object every time it is called

tinderUser.id = "123abc"
tinderUser.name = "Udit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);





const regularUser = {
    email: "some@gmail.com",
    fullname: {  // this is an object
        userfullname: { //this is another object inside the object ; and hence we can use object inside an object and it is totally accessible by the dot notation
            firstname: "Udit",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);    -> this is how we can access the object inside an object






// combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) -> this is the way to combine objects in JS and if we remove the parenthesis then also it will work but it is a good practice to use the parenthesis 
// here parenthesis acts as target and the objects written acts as source 

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
]

users[1].email  // this is how we can access the object inside an array i.e accessing first value of the array 


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  -> this will return the keys of the object and iska datatype is array

// console.log(Object.values(tinderUser)); -> this will return the values of the object and iska datatype is array
// console.log(Object.entries(tinderUser));-> isme key and values dono return ho jayengi and iska datatype is also array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); -> this will return true or false depending on the key is present in the object or not , isme hum puch rhe hai ki kya ye key present hai ya nahi hence depending upon presence it will return true or false 






// Destructuring of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Udit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // yaha curly braces ka use hua hai toh iska mtlb hai ki hum destructuring kar rhe hai and ismein humne courseInstructor ko instructor ke naam se access kiya hai 

// console.log(courseInstructor);
console.log(instructor);



//json object  -> keys and values are also strings
// {
//     "name": "Udit",
//     "coursename": "js in hindi",
//     "price": "free"
// 
// }

//api in from of Array of objects
//API is a way to communicate with the server and get the data from the server and it is in the form of JSON object in simple words api ka kaam hai ki server se data fetch karna and us data ko use karna as a frontend developer 
[
    {},
    {},
    {}
]