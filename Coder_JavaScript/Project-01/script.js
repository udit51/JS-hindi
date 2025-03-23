function timing(){   //sara code will pe put inside a function because we want to display time again and again

const Timer = document.getElementById("root");

const now=new Date(); //to show full time with date 
const IndianTime=now.toLocaleTimeString();  //to show only time and that too an indian time

Timer.innerHTML=IndianTime;
}
timing();
setInterval(timing,1000);    // yaha pe hum while (true) nhi lga skte kyuki yeh ek async function hai toh isme while(true) lgaane se yeh hang ho jayega isliye setInterval ka use kiya hai


//styling the timer
const Timer = document.getElementById("root");  // also we need this outside function too because we need to style this object too 
Timer.style.fontSize="100px";
Timer.style.color="black";
Timer.style.height="100vh";
Timer.style.alignItems="center";
Timer.style.justifyContent="center";
Timer.style.display="flex";
Timer.style.backgroundColor="Orange";