// synchronous code in sequence
// console.log("ONE");
// console.log("TWO");
// console.log("THREE");

// asynchronous code with setTimeout

// console.log("ONE");
// console.log("TWO");

// setTimeout(() => {
//     console.log("HELLO WORLD");
// }, 4000); // after 4 seconds //4 second = 4000 milliseconds bcz set timeout works in milliseconds

// console.log("THREE");
// console.log("FOUR");


// synchronous call back function //  in this we cannot pass our function with parenthesis bcz if we do that it will execute the function immediately instead of passing the function as a reference

// function sum(a,b)
// {
//     console.log(a+b);
// }

// function calculator(a,b,sum_callback)
// {
//     sum_callback(a,b);
// }
//calculator(5,7,sum);

// we can also do this as by arrow function

// calculator(10,15,(a,b)=>{
//     console.log(a+b);
// });

// asynchronous call back function r function

// const hello = ()=>{
//     console.log("HELLO WORLD");
// }
// setTimeout(hello,3000); // after 3 seconds


// callback hell or pyramid of doom

// function getData(dataId,getNextData)
// {
//     setTimeout(() => {
//     console.log("data = ",dataId);
//     if(getNextData)
//     {
//     getNextData();
//     }
//     }, 2000);
// }
// getData(1,()=>{
//     console.log("getting data2...");
//     getData(2,()=>{
//         console.log("getting data3...");
//         getData(3,() =>
//         {
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });

// promises in javascript

// function getData(dataId,getNextData)
// {
//     return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//     console.log("data = ",dataId);
//        resolve("sucess");
//     if(getNextData)
//     {
//     getNextData();
//     }
//     }, 5000);

//     });
// }


// const getPromise = () =>
// {
// return new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//    resolve("sucess");
//     //reject("network error");
// });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise resolved",res);
// });

// promise.catch((err)=>{
//     console.log(" rejected",err);
// });


// promise chaining


// function asyncfunc1()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
// });
// }

// function asyncfunc2()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
// });
// }

// console.log("fetching data1...");
// let p1 = asyncfunc1();
// p1.then((res)=>{
//     console.log("fetching data2...");
//     let p2 = asyncfunc2();
//     p2.then((res)=>{
//     });
// });

// we can also do this as

// console.log("fetching data1...");
// asyncfunc1().then((res)=>{
//     console.log("fetching data2...");
// asyncfunc2().then((res)=>{
//     });
// });



// OTHER EXAMPLE OF PROMISE CHAINING

// function getData(dataId)
// {
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     console.log("data = ",dataId);
//     resolve("success");
//     }, 3000);
//     });
// }


// promise  chaining of getData function

// console.log("fetching data1...");
// getData(1).then((res)=>{
//     console.log("fetching data2...");
//     return getData(2);
// })
// .then((res)=>{
//     console.log("fetching data3...");
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
//     });


// async await in javascript

// async function hello()
// {
//     console.log("HELLO WORLD");
// }

// function api()
// {
//     return new Promise((resolve,reject)=>
//         {
//             setTimeout(() => {
//         console.log("weather data");
//         resolve("200");
//         }, 2000);
//         });
//     }

//     async function getWeatherdata()
//     {
//     await api(); // 1st
//     await api(); // 2nd
//     }

// async await example with getData function
//  function getData(dataId)
// {
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     console.log("data = ",dataId);
//     resolve("success");
//     }, 3000);
//     });
// }

// async await 

// async function getAllData()
// {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
// }

// IIFE - Immediately Invoked Function Expression
// description : A JavaScript function that runs as soon as it is defined.
// syntax : (function() { /* code */ })();
// usage : To avoid polluting the global namespace, to create a private scope for variables, and to execute code immediately.

// (async function()
// {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
// })();