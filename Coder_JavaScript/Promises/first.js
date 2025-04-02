// Callbackhell

// async task
// weather: 


const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)   // yeh fetech data utha ke laata hai 


/* 

//down there is promise chaining which is used to handle the async task where we have to wait for the data to be fetched and then we can use it

 const pro2 = Promises.then((response)=>{
     // const pro2 = response.json();      ->  response when in .jason() it will return a promise i.e. isme bhi time lgega toh isko handle krne ke liye hum phir se .then() lagate hain 

      pro2.then((data)=>{
          console.log(data);
      })
    return response.json();
 })



 */





// Promises
// .then(response=>response.json())
// .then(data=>console.log(data)) 



//one more way to write the same code
// Promises 

fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
.then(response=>response.json())  
.then(data=>console.log(data.current.temp_f))
.catch(error=>console.log(error));






// console.log(Promises);





// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })

//three states of promises
// pending   -> request marate  hi pending state mein chli jaati hai
// resolve 
// reject
