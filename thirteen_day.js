// 05-05-2025

// why    use  function
// const x = 20;
// const y = 30;
// let res = x + y;
// console.log(res);

// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 20));

// function myAdd() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(myAdd(12, 3, 5, 34, 6, 8));

// max  value  in argument
// function maxValue() {
//   let max =  -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if(arguments[i] > max){
//           max = arguments[i];
//     }
//   }
//   return max;
// }

// console.log(maxValue(12, 3, 5, 34, 6, 8));

// min    value   in   argument
// function minValue() {
//    let min =  Infinity;
//    for (let i = 0; i < arguments.length; i++) {
//      if(arguments[i] < min){
//            min = arguments[i];
//      }
//    }
//    return min;
//  }

//  console.log(minValue(12, 3, 5, 34, 6, 8,2));

// const myData = {
//   name: " jp",
//   age: 22,
//   location: "Mohali",
// };

//  console.log(myData);

// const myData =  new  Object({
//     name : "prakash kumar",
//     age :  22,
//     id : 123,
// });

//  console.log(myData);

//  const myArray = ["laptop","book","mouse","charger"];
//   console.log(myArray);

//   const userData =  new Array("email","id","mob");
//    console.log(userData);

// const cars = ["Saab", "Volvo", "BMW"];
// //cars = ["Toyota", "Volvo", "Audi"];   //error
//  console.log(cars);

// this  is  syncronous  work  means   line  by   line  code  execution
// function hello() {
//   console.log("helllo  js");
// }

// function myFunction() {
//   console.log("this   is   my   function----");
// }

// function add(a, b) {
//   console.log(" this  is  add  function  call");
//   return a + b;
// }

// hello();
// myFunction();
// console.log(add(12, 3));

//  this  is   asynccronous   code
// function hello() {
//   console.log("helllo  js");
// }

//     function myFunction() {
//   console.log("this   is   my   function----");
// }
//  setTimeout(()=>{
//   myFunction();
//  },3000);

// function add(a, b) {
//   console.log(" this  is  add  function  call");
//   return a + b;
// }

// hello();
// myFunction();
// console.log(add(12, 3));

// function  hello(callback){
//     console.log("this   is   hello  function -----");
//     return callback();
// }

// function myData(){
//      console.log("this  is  callback  function----------");
// }

// hello(myData);

// function laptop(name, cb) {
//   console.log("This is name" + name);
//   cb();
// }

// function charger() {
//   console.log("this   is my charger---------------");
// }

// laptop("jp", charger);

// function myLaptop(callback) {
//   console.log("this is  myLaptp-------");
//   callback();
// }

// function myPhone(callback) {
//   console.log("this  is  phone----------");
//   callback();
// }

// function myCharger(callback) {
//   console.log("this  is  myCharger------------ ");
//   callback();
// }

// // callback hell
// myLaptop(() => {
//   myPhone(() => {
//     myCharger(() => {
//       console.log("all done ----- ✅");
//     });
//   });
// });

// promise resolve  callback hell
// function myLaptop() {
//   return new Promise((resolve) => {
//     console.log("this   is my  laptop+++++++++++");
//     resolve();
//   });
// }

// function myPhone() {
//   return new Promise((resolve) => {
//     console.log("this  is  my   phone+++++++++++");
//     resolve();
//   });
// }

// function myCharger() {
//   return new Promise((resolve) => {
//     console.log("this  is  my charger++++++++++++++++");
//     resolve();
//   });
// }

// promise  use
// myLaptop()
//   .then(() => {
//     myPhone();
//   })
//   .then(() => {
//     myCharger();
//   })
//   .then(()=>{
//      console.log("all  Done ✅");
//   })
//   .catch((err) => {
//     console.log("something went wrong ---" + err);
//   });

// use  async  await   and  is   a  modern way
// async function allprocess() {
//   await myLaptop();
//   await myPhone();
//   await myCharger();
//   console.log("all  done ✔️");
// }

// allprocess();

// simple  callback   function
// function myData(name, callback) {
//   console.log("Name is :- " + name);
//   callback();
// }

// function myCallBack() {
//   console.log("this  is  my    call  back function---------");
// }

// myData("jp", myCallBack);

// function bottle(callback) {
//   console.log("thi  is   my   bottle----");
//   callback();
// }

// function cup(callback) {
//   console.log("thi  is   my   cup----");
//   callback();
// }

// function mouse(callback) {
//   console.log("thi  is   my   mouse----");
//   callback();
// }

// // callback hell
// bottle(() => {
//   cup(() => {
//     mouse(() => {
//       console.log("all   work done--✅");
//     });
//   });
// });

// function bottle() {
//   return new Promise((resolve) => {
//     console.log("thiis  is  a  bottle  function ---------");
//     resolve();
//   });
// }

// function cup() {
//   return new Promise((resolve) => {
//     console.log("thiis  is  a  cup  function ---------");
//     resolve();
//   });
// }

// function mouse() {
//   return new Promise((resolve) => {
//     console.log("thiis  is  a  mouse  function ---------");
//     resolve();
//   });
// }

// then and   catch
// bottle()
//   .then(() => {
//     cup();
//   })
//   .then(() => {
//     mouse();
//   })
//   .then(() => {
//     console.log("all   is   done-------✅😍");
//   })
//   .catch((error) => {
//     console.log("Some Error" + error);
//   });

// async function myAllObject() {
//   try {
//     await bottle();
//     await cup();
//     await mouse();
//     console.log("all  done +++++++++++");
//   } catch (err) {
//     console.log("some error--" + err);
//   } finally {
//     console.log("always  execute ✅");
//   }
// }

// myAllObject();

// JavaScript fetch API  in js

// basic  syntax
// fetch(url)
// .then((response)=> response.json)
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

// fetch('https://jsonplaceholder.typicode.com/albums')
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// async  await   with  fetch  data

// async function getData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/albums");
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("something  went  wrong ", err);
//   }
// }

// getData();

// async function getMyData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("something   went   wrong!", error.message);
//   } finally {
//     console.log("all done");
//   }
// }

// getMyData();

// Fetching data from a placeholder API
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Parse the response body as JSON
//   })
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// async function myDataFetch() {
//   try {
//     let response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1/comments",
//     );
//     let data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log("something went wrong! 🥱", e);
//   }
// }

// myDataFetch();

// async function getProductData() {
//   try {
//     let response = await fetch("https://dummyjson.com/products");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("some error", error.message);
//   } finally {
//     console.log("allways  execute-------------");
//   }
// }

// getProductData();

//  post request   in js
// fetch(url, {
//   method: "GET",        // GET, POST, PUT, DELETE
//   headers: {},          // extra info
//   body: {},             // for  send data
//   mode: "cors",         // cross-origin
//   credentials: "include"
// })

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method : "POST",
//     headers : {
//         "Content-Type" : "application/json"
//     },
//     body : JSON.stringify({
//         title : "hello",
//         body : "this  is  post",
//         userId : 1
//     })

// })
// .then((res)=>res.json())
// .then((data)=>console.log(data));

// async function loadData() {
//   try {
//     let response = await fetch("missing.json");            //error: Invalid URL
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function loadData() {
//   try {
//     let response = await fetch("missing.json");
//     if (!response.ok) {
//       console.log(response.status);
//       return;
//     }
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Network  Error");
//   }
// }

// loadData();

// async function myLoadData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//       console.log("HTTP Eerror", response.status);
//       return;
//     }
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Something went  wrong!");
//   }
// }

// myLoadData();

// async function laodCartData() {
//   try {
//     let response = await fetch("https://dummyjson.com/carts");
//     if (!response.ok) {
//       console.log("http error", response.status);
//     }
//     let data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log("Something  went Wrong!😇");
//   }
// }

// laodCartData();

// string  in  js
// strings are storing   text  in  quotes
// let  name =  "jp";
//  console.log(name);

// Template  String  or  Template literals  are  modern  way to  write String  that  offer  more  fexible
//  using backticks.
//key  feature is String  interpolation  means  ${...}
//  const name =  "jp";
//   console.log(`hello  ${name}!`);

// multiline  support
// const name =    `j
//    p`
//     console.log(name);

// string   as a   object
//  const name  = new String(`hello  jp`);
//   console.log(name);

// String  method  in js
// const myName = "Prakash";
// console.log(myName.length);
// console.log(myName.charAt(2));
// console.log(myName.charCodeAt(1));
// console.log(myName.charCodeAt(1));
// console.log(myName.codePointAt(2));
// console.log(myName.at(-1));
// console.log(myName.at(-1));
// const myName2 = "Kumar";
// console.log(myName.concat(" " + myName2));

const userName = "prakash"
console.log(userName.slice(-3));     
console.log(userName.substring(-3));



