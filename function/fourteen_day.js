// 06-05-2026

//  String method
//  const myName =  "Prakash";
//   console.log(myName.toLowerCase());
//   console.log(myName.toUpperCase());
//   console.log(myName.isWellFormed());
// const userName = "    ravi    ";
//  console.log(userName.trim());
// const minutes = "5";
// const result = minutes.padStart(3,"0");    //005
// const result2 = minutes.padEnd(3,"0");    //500
// console.log(result);
// console.log(result2);

// let myText = "Hello jp ";
// let result =  myText.repeat(2);
// console.log(result);

//String Search Methods in js
// const myData =  "Hello my  name  is  jp!";
//  let  res  =  myData.indexOf("my");
//  let  res2  =  myData.lastIndexOf("is");
//  console.log(res);
//  console.log(res2);

// const myName =  "hello my name is  jp";
// //  console.log(myName.search("name"));
//   const  result =  myName.match("is");
//    console.log(result[0]);
//    console.log(result.index);
//    console.log(result.input);
// const match =  myName.matchAll("e");
// const result  =  [...match];
//  console.log(result[0].index);
//  console.log(result[1].index);
//  console.log(myName.includes("jp"));
//  console.log(myName.includes("is",16));
//  console.log(myName.startsWith("my",5));
//  console.log(myName.endsWith("is",16));

// // Numbers in js
// const x = 20;
// const y = 10.23344;
// console.log(`${x}, ${y}`);
// const a = 29;
// const b = "Hello";
// console.log(a / b);

// let x = 20 / "jp";
// console.log(isNaN(x));

// const x = NaN;
// const y = 2;
// const z = NaN + 2;
// console.log(z);

// const x = NaN;
// const y = "7";
// //   const  z =  x + y;
// //    const  z =  x - y;
// //   const  z =  x * y;
// const z = x / y;
// console.log(z);

// Infinity  in js

// console.log(Infinity > 2999999999);
// console.log(Infinity < 299999999009099);
// console.log(Infinity < -299999999009099);
// console.log(Infinity > -299999999009099);

// let  myNumber =   2;
// text = "";
//  while(myNumber != Infinity){
//     myNumber =  myNumber * myNumber;
//      text += myNumber;
//       console.log(text);
//  }

//  let  myNum =  2;
//   let myString = "";

//   while(myNum != Infinity){
//     myNum  =  myNum * myNum;
//      myString += myNum;
//       console.log(myString);
//   }

//   console.log(3/0);
//   console.log(-3/0);

// let   x =  0xAF;
//  console.log(x);

// let    x=  459;
//  let   res =  x.toString();
//    console.log(res);

// const count = 255;
// console.log(count.toString());

// let num = 123;
// console.log(num.toString());
// let num = 499;
// let res = JSON.stringify(num.toString());
// console.log(res);

// Numbers as  Object
// let   myNum =   new Number(12);
//   console.log(myNum);

// Number Methods in js
//The toString() Method
// let   x =   344;
//  console.log( x.toString());
//  console.log( (344).toString());
//  console.log( (300+40+4).toString());

//The toExponential() Method in js

// let x = 9.656;
// console.log(x.toExponential(2));
// console.log(x.toExponential(4));
// console.log(x.toExponential(6));
// console.log(x.toFixed(2));
// console.log(x.toFixed(4));
// console.log(x.toFixed(6));
// console.log(x.toPrecision());
// console.log(x.toPrecision(2));
// console.log(x.toPrecision(6));
// console.log(x.valueOf());

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("20"));
// console.log(Number("20"));
// console.log(Number("   20"));
// console.log(Number("     20          "));
// console.log(Number("20.233"));
// console.log(Number("20,233"));
// console.log(Number("20 233"));
// console.log(Number("jp"));

// let   tuday =  new Date();
//  console.log(tuday);

//  console.log(Number(new Date()));

// console.log(parseFloat("12"));
// console.log(parseFloat("-12"));
// console.log(parseFloat("12.889"));
// console.log(parseFloat("12WE"));
// console.log(parseFloat("12,23"));
// console.log(parseFloat("12 23"));
// console.log(parseFloat("12,ASEE"));
// console.log(parseFloat("ASEE,344"));

//  console.log(Number.isInteger(12));
//  console.log(Number.isInteger(12.2));
//  console.log(Number.isInteger("12,3"));
//  console.log(Number.isInteger("12,a"));

//  console.log(Number.isFinite(12));

//  console.log(Number.isNaN(123));

//  console.log(Number.isSafeInteger(122233646448382839838783799733939774));

// Number Properties IN JS

// let x = Number.EPSILON;
//   console.log(x);

// let  x=  23;
//    console.log(x.MAX_VALUE);
//    console.log(x.MIN_VALUE);

// const d = new Date();
// console.log(d.getDay());
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMonth());

// const d = new Date("January 01, 2025");
//  console.log(d.setFullYear(2020));
//  console.log(d.setMonth(11));

// Maths Object   in  js

// console.log(Math.round(2.44));
// console.log(Math.round(2.9099));
// console.log(Math.floor(4.9));
// console.log(Math.floor(4.12));
// console.log(Math.ceil(4.14));
// console.log(Math.ceil(4.92));
// console.log(Math.random());
// console.log(Math.trunc(40.39));
// console.log(Math.sign(-7));
// console.log(Math.sign(0));
// console.log(Math.sign(3));
// console.log(Math.pow(4, 2));
// console.log(Math.sqrt(4));
// console.log(Math.abs(-4.8)); //  RETURN  ONLY  +VE  VALUE
// console.log(Math.sin(Math.PI / 2));
// console.log(Math.sin(Math.PI / 4));

// let num = [12, 34, 5, 75, 78, 87];
// let res = Math.min(...num);
// let res2 = Math.max(...num);
// let   res3 = num[Math.floor(Math.random()*num.length)];   // Random  numbe r  find  in   array
// console.log(res);
// console.log(res2);
// console.log(res3);

// console.log(Math.log(1));
// console.log(Math.log(2));
// console.log(Math.log(3));
// console.log(Math.log2(1));
// console.log(Math.log2(2));
// console.log(Math.log2(3));
// console.log(Math.log10(1000));
// console.log(Math.random()*6);
//  console.log(Math.floor(Math.random()*11));
//  console.log(Math.floor(Math.random()*3)+1);

//  random     function   in   js
//   function  getRandomNumber(min, max){
//           return Math.floor(Math.random()*(max-min)+min);     //min (included) and max (excluded)
//   }

//  console.log(getRandomNumber(12,3));

// function getAllRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let res = getAllRandomNumber(10, 15);
// console.log(res);

// let pattern = /hello/;
//  console.log(pattern);

// let text = "Is this all there is?";
// const pattern = /is/g;

// let result = text.match(pattern);
// console.log(result);

// console.log(a);
// var a =  20;

// advance  function in js
// function declaration
// function myFunction() {
//   console.log("helllo jp!");
// }

// myFunction();
// const result = myFunction();
// console.log(result);

//  function  experassion  with  name
//  const myFunction =  function myFirstFunction(){
//      console.log("hello  jp");
//  }

//   myFunction();

//   function  expression  anonymous
// const myData = function () {
//   console.log("hello  jp-----------");
//   return "done";
// };

// myData();

// arrow   function
// const helloFuntion = () => "hello jp ++++++++";
// console.log(helloFuntion());

// function   constructor
// const helloFuntion = new Function(
//    console.log('hello jp  this   constructor  function------'),
// );
// helloFuntion();

//object    method
// const myObj = {
//   myFunction() {
//     console.log("this  is   object method  in js++++++");
//     return "Done";
//   },
// };

//  console.log(myObj.myFunction());

// hoisting

// const sum = add(2, 3); // Will work
// console.log(sum);

// function add(a, b) {return a + b;}

// const sum = add(2, 3); //  Will generate error
//  console.log(sum);

// const add = function (a, b) {return a + b;};

//The Function() Constructor
// const myFunction = new Function("a", "b", "return a * b");

// let x = myFunction(4, 3);
// console.log(x);

// const  helloFuntion =  new Function('a','b','return a*b');
//  console.log(helloFuntion(12,3));

//   console.log(typeof helloFuntion());

// callback

// function add(a, b) {
//   console.log("this  is   add function....");
//   return a + b;
// }

// let x = 20;
// let y = 30;
// console.log(add);

// function myCallBack(callback) {
//   console.log("this  is  call back   function  in js----");
//   callback();
//   return "all Done...";
// }

// function hello() {
//   console.log("hello   function====");
//   return "done!";
// }
// console.log(myCallBack(hello));

// function main(){
//   console.log("log1");
//   console.log("log2");
//   console.log("log3");
//   console.log("log4");
// }
//  main();

// syncrnous  function
// function a(){
//    console.log("this  is a...");
// }
// function b(){
//    console.log("this  is b...");
// }
// function c(){
//    console.log("this  is c...");
// }
// function d(){
//    console.log("this  is d...");
// }

// function main(){
// a();
// b();
// c();
// d();
// }

// main();

// asynccronous function
// function a(){
//    setTimeout(()=>{
//     console.log("this  is a...");
//    },2000);
// }
// function b(){
//   setTimeout(() => {
//    console.log("this  is b...");

//   }, 1000);
// }
// function c(){
//    setTimeout(() => {
//     console.log("this  is c...");
//    }, 1000);
// }
// function d(){
//   setTimeout(()=>{
//    console.log("this  is d...");

//   },2000);
// }

// function main(){
// a();
// b();
// c();
// d();
// }

// main();

// using  callback
// function a(callback) {
//   setTimeout(() => {
//     console.log("this  is a...");
//     callback();
//   }, 2000);
// }
// function b(callback) {
//   setTimeout(() => {
//     console.log("this  is b...");
//     callback();
//   }, 1000);
// }
// function c(callback) {
//   setTimeout(() => {
//     console.log("this  is c...");
//     callback();
//   }, 1000);
// }
// function d(callback) {
//   setTimeout(() => {
//     console.log("this  is d...");
//     callback();
//   }, 2000);
// }

// function main() {
//   a(() => {
//     b(() => {
//       c(() => {
//         d(() => {
//           console.log("all Done!....");
//         });
//       });
//     });
//   });
// b();
// c();
// d();
// }

// main();

// using  promises
// function a() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("this  is a...");
//       resolve();
//     }, 2000);
//   });
// }
// function b() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("this  is b...");
//       resolve();
//     }, 1000);
//   });
// }
// function c() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("this  is c...");
//       resolve();
//     }, 1000);
//   });
// }
// function d() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("this  is d...");
//       resolve();
//     }, 2000);
//   });
// }

// function main() {
//   a()
//     .then(() => {
//       b();
//     })
//     .then(() => {
//       c();
//     })
//     .then(() => {
//       d(() => {
//         console.log("all  complite....😎");
//       });
//     })
//     .catch((error) => {
//       console.log("something  went wrong====", error);
//     });
// }

// main();

//   using async  await

// function a() {
//   setTimeout(() => {
//     console.log("this  is a...");
//   }, 4000);
// }
// function b() {
//   setTimeout(() => {
//     console.log("this  is b...");
//   }, 1000);
// }
// function c() {
//   setTimeout(() => {
//     console.log("this  is c...");
//   }, 1000);
// }
// function d() {
//   setTimeout(() => {
//     console.log("this  is d...");
//   }, 2000);
// }

// async function main() {
//   await a();
//   await b();
//   await c();
//   await d();
//   console.log("all  task  complite....👍");
// }

// main();

