//  reduce
// const arr = [10,20,30,40,50];

// // const result = arr.reduce(callback function, initialization)
// const result = arr.reduce((acc,curr)=> acc+curr, 0);

// console.log(result);




//real world explanation-> suppose this data hai come from backend and we need to show the count of the fruits hence how can we do it using reduce 

let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
//  final result ek object ke form
// orange:3
// apple:2
// acc = {
// orange:2,
// apple:2,
// banana:1}

// const result = arr.reduce((acc,curr)=>{        
//     if(acc.hasOwnProperty(curr))                     -> this shows ki  agar accumulator mei current key hai ya nhi aur agr nhi hai toh usee add kro ans uski value ko 1 set kr do
//has own property is used to check whether the object has a key or not 
  
//         acc[curr]++;
//     else
//       acc[curr]=1;

//     return acc;
// },{})    -> this is empty object  -> initialization

// above we can se array ke form mein data tha aur humne use object ke form mein return kar diya hai........ 




//this is method of doing the above code using ternary operator that is if else in one line 
//do not  prefer writing this code in this way as it is not readable
const result = arr.reduce((acc,curr)=>{
    
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;

    return acc;
},{})

console.log(result);