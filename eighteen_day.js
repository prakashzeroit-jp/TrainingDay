// "use strict";
// 10-05-2026
//  module   in  js
// function   add(a,b){
//  console.log(a+b);
// }

const check = require("./hold_day/nineteen_day")

// function  sub(a,b){
//    console.log(a-b);
// }

// module.exports =  add;

// function myName(name) {
//   console.log("hello :" + name);
// }

// function add(a, b) {
//   console.log(a + b);
// }

// function sub(a, b) {
//   console.log(a - b);
// }
// function mlt(a, b) {
//   console.log(a * b);
// }

// function div(a, b) {
//   console.log(a / b);
// }

// function exp(a, b) {
//   console.log(a ** b);
// }

// module.exports = {
//   myName,
//   add,
//   sub,
//   mlt,
//   div,
//   exp,
// };

// const myObj = {
//   name: " jp",
//   age: 12,
//   id: 234,
//   location: " Mohali",
//   mob: 12345678900,
// };

//  function   myFunction(name){
//    console.log("Hello , how   are    You : " ,name);

//  }

// module.exports = {
//     myObj,
//     myFunction,
// }

//   setTimeout(()=>{
//      function hello1() {
//     console.log(" this   is    hello1......");
//   }
//   hello1();
//   },2000);
// setTimeout(()=>{
//       function hello2() {
//     console.log(" this   is    hello2......");
//   }
//   hello2();
// },1000);
//   setTimeout(()=>{
//      function hello3() {
//     console.log(" this   is    hello3......");
//   }
//   hello3();

//   },1000);
//  setTimeout(()=>{
//       function hello4() {
//     console.log(" this   is    hello4......");
//   }
//   hello4();
//  },2000);

// function hello1(callback) {
//   setTimeout(() => {
//     console.log("this    is     hello1......");
//     callback();
//   }, 2000);
// }
// function hello2(callback) {
//   setTimeout(() => {
//     console.log("this    is     hello2......");
//     callback();
//   }, 1000);
// }
// function hello3(callback) {
//   setTimeout(() => {
//     console.log("this    is     hello3......");
//     callback();
//   }, 2000);
// }

// hello1(() => {
//   hello2(() => {
//     hello3(() => {
//       console.log("all  done....");
//     });
//   });
// });

// function hello1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello1....");
//       resolve();
//     }, 2000);
//   });
// }
// function hello2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello2....");
//       resolve();
//     }, 1000);
//     resolve();
//   });
// }
// function hello3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello3....");
//       resolve();
//     }, 2000);
//   });
// }

// hello1()
//   .then(() => {
//     return hello2();
//   })
//   .then(() => {
//     return hello3();
//   })
//   .then(() => {
//     console.log("all   done!");
//   })
//   .catch((error) => {
//     console.log("something    went   wrong..", error);
//   });

// async function allFunction() {
//   await hello1();
//   await hello2();
//   await hello3();
// }

// allFunction();

// function  hello1(){
//   console.log("hello1....");
// }
// function  hello2(){
//   console.log("hello2....");
// }
// function  hello3(){
//   console.log("hello3....");
// }

// hello1();
// hello2();
// hello3();

// function  hello1(){
//   setTimeout(()=>{
//      console.log("hello1....");

//   },2000);
// }
// function  hello2(){
//   console.log("hello2....");
// }
// function  hello3(){
//   console.log("hello3....");
// }

// hello1();
// hello2();
// hello3();

// function hello1(callback) {
//   setTimeout(() => {
//     console.log("hello1....");
//     callback();
//   }, 2000);
// }
// function hello2(callback) {
//   setTimeout(() => {
//     console.log("hello2....");
//     callback();
//   });
// }
// function hello3(callback) {
//   setTimeout(() => {
//     console.log("hello3....");
//     callback();
//   });
// }

// hello1(() => {
//   hello2(() => {
//     hello3(() => {
//       console.log("all done....");
//     });
//   });
// });

// function hello1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello1.....");
//       resolve();
//     }, 3000);
//   });
// }

// function hello2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello2.....");
//       resolve();
//     }, 1000);
//   });
// }

// function hello3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello3.....");
//       resolve();
//     }, 2000);
//   });
// }

//  hello1().then(()=>{
//    return hello2();
//  }).then(()=>{
//     return  hello3();
//  }).then(()=>{
//      console.log('all done😎✅');
//  }).catch((error)=>{
//      console.log('something went  wrong...',error);
//  });

// async function result() {
//   try {
//     await hello1();
//     await hello2();
//     await hello3();
//     console.log("all done......😍");
//   } catch (error) {
//     console.log("some errors....", error);
//   } finally {
//     console.log("always  executed.......");
//   }
// }

// result();

// function add(a, b, callback) {
//   callback();
//   return a + b;
// }

// let x = 10;
// let y = 20;

// let w = x;
// let p = y;

// function hello() {
//   console.log("hello jp....");
// }

// let res = add(w, p, hello);
// console.log(res);

//  "use strict";
// x =  20;
//  console.log(x);

// x = 80; // ❌ should give ReferenceError
// console.log(x);

//  console.log("hello  jp....")

// function add(){
//  y=  20;
//    console.log(y);

// }

// add();

// function hello(a,a){
//    return   a*a;
// }
//  let   res =   hello(3,2);
//   console.log(res);

// function  add(a,b,z){
//     z();
// console.log(a+b);
// }

// let   x=  20;
// let   y=  10;
// let w = x;
// let p = y;

// function hello(){
//      console.log("hello......");
// }

// add(w,p,hello);
// add(22,3);

// function hello1(callback) {
//   setTimeout(() => {
//     console.log("hello1.....");
//     callback();
//   }, 3000);
// }
// function hello2(callback) {
//   setTimeout(() => {
//     console.log("hello2.....");
//     callback();
//   }, 1000);
// }
// function hello3(callback) {
//   console.log("hello3.....");
//   callback();
// }

// hello1(() => {
//   hello2(() => {
//     hello3(() => {
//       console.log("done...");
//     });
//   });
// });

// function hello1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello1.....");
//       resolve();
//     }, 2000);
//   });
// }
// function hello2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello2.....");
//       resolve();
//     }, 1000);
//   });
// }
// function hello3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello3.....");
//       resolve();
//     }, 4000);
//   });
// }

// .then() .catch()

// hello1(()=>{
//     hello2();
// }).then(()=>{
//     hello3();
// }).catch(()=>{
//      console.log("jpp....");
// });
// hello1()
//   .then(() => {
//     hello2();
//   })
//   .then(() => {
//     hello3();
//   })
//   .catch((err) => {
//     console.log("something   went  wrong....", err);
//   });
//

// function hello1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello1.....");
//          resolve();
//     }, 5000);
//   });
// }
// function hello2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello2.....");
//       resolve();
//     }, 3000);
//   });
// }
// function hello3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hell31.....");
//          resolve();
//     }, 1000);
//   });
// }

// async function result() {
//   await hello1();
//   await hello2();
//   await hello3();
// }
// result();

// function a() {
//   console.log(" this   is    a....");
// }

// function result(a) {
//   a();
// }

// result(a);

// let x = 2;
// console.log(x == "2");

 const  checks = require('check');
  check();


