// 07-05-2026
//advance function topic like function  expression,  function   contructor  ,arrow  function, callback function
// ,higher  order  function this keyword and  its  method  like call() , apply(),bind(),IIFE,closure"
// console.log("hello  jp How  are  You...");
// // function outer() {
// //   //let count = 0;

// //   return function inner() {
// //      let count = 0;
// //     count++;
// //     console.log(count);
// //   };
// // }

// // const counter = outer();

// // counter(); // 1
// // counter(); // 2
// // counter(); // 3

// (function() {
//   console.log("I run immediately!");
// })();

// function a(b) {
//   console.log(b);
//   // console.log(typeof b);
// }

// // a("hello ");
// // a({userName: "jp",userId : "122",userLocation : "Mohali"});
// a([12,3,4,5,9,6,7,88,9,9,]);
//   console.dir(a);

//function   constructor  in js
// const myFunction = new  Function('a','b','return a+b');
//   console.log(myFunction(12,4));

// const myObj =  {
//  fName : "jyoti",
//  lName : "prakash",
//  id : 123,
//  myFunction : function(){
//    return this.fName + this.lName;
//  }

// }

//  console.log(myObj);
//  console.log(myObj.myFunction());

//  "use strict"
// function myFunction() {
//   return this;
// }
// console.log(myFunction());

// const obj = {
//   myFunction: function() {
//     return this;
//   }
// };

// console.log(obj.myFunction());

// function myFunction() {
//     return this;
// }
// myFunction() ;

// let result = globalThis === global;
//  console.log(result);

// const obj = {
//   name: "JP",
//   show: () => {
//     console.log(this);
//   }
// };
// console.log(obj.show());

// function myFunction(){
//   console.log("hello  jp....");
//   return 'done';
// }

// // myFunction();

// const x =  myFunction;
//  x.age = 23;
//   console.log(x.age);

// function myFunction(name, callback) {
//   console.log("this  is", name);
//   callback();
// }

// function sayHello() {
//   console.log("this  is   call back  function.....");
// }
// console.log(myFunction("jp", sayHello));

// function myFunction(name, sayHello) {
//   // console.log("this  is", name);
//  return  sayHello(name);
// }

// function sayHello(a) {

//    return console.log("this  is   call back  function....." , a);
// }
// console.log(myFunction("jp", sayHello))

// function myFunction(name, callback) {
//   // myFunction is the Higher-Order Function
//   return callback( name);
// }

// function sayHello(a) {
//   // sayHello is the Callback
//   return "This is callback function... " + a;
// }

// // Now it will log the actual string instead of undefined
// console.log(myFunction("jp", sayHello));

// this  is   callback  function
//   function greet(name){
//      console.log("hello" ,name);

//   }

//   function processUserInput(callback){
//    let  name  =  "jp";

//     callback(name);
//   }

//   processUserInput(greet);

//   //Higher Order Function (HOF)
//Function as argument
//  function  sayHello(){
//    console.log("hello......");
//  }

//   function execute(fn){        //HOF
//    fn();
//   }

//   execute(sayHello);

// Function as a return
// function   multiply(x){    // HOF
//    return function(y){
//     return x* y ;
//    }
// }

// let double  = multiply(12);
//  console.log(double(5));

//Immediately Invoked Function Expressions

// (function sayHello(){
//   console.log("hello  jp....");
// }
// )();

// (function (){
//   let   x=  10;
// })();

// (function () {
//   let text = "Hello! I called myself.";
//   console.log(text);
// })();

//Arrow Function IIFE
// (()=>{
//   console.log("this  is arrow  function IIFE");
// })();

//  Arrow Function IIFE with Parameter

// ((a,b)=>{
//    console.log(a+b);
// })(12,3);

// ((name) => {
//   console.log("your  name is :-", name);
// })("JP");

// Named Function Expression IIFE

// (function myFunction(){
//    console.log("this  is  my function-----");
// })();

// myFunction();

// (function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1); // recursive call
//   console.log(factorial(3));
// })(5);

// const counter = (function () {
//   let value = 0;
//   return {
//     increment() { value++; },
//     get() { return value; }
//   };
// })();

// counter.increment();
// let x = counter.get();

// closure  in   js

// function  sayHello(){
//   let  x=  0;

//   function inner(){
//     x++;
//      console.log(x);
//   }

//   return inner;

// }

// let   res =  sayHello();
//  res();  //1
//  res();  //2
//  res();  //3

// function myCounter() {
//   let counter = 0;

//   function innerCounter() {
//     counter++;

//     console.log(counter);
//   }

//   return innerCounter;
// }

// let res = myCounter();
// res();
// res();
// res();
// res();

//  local   variable
// function add(){
// let   x=  20 ;
//  console.log(x);

// }

// x =30;
// add();

// globle  variable
// let y = 40;
// function myAdd() {
//   console.log(y);
// }
// y = 500;
// y = 7000; //   so  this  is  global  variable

// myAdd();

// let   counter =  0;
// function myCounter(){
//   let   counter =  0;
//    counter ++;
//     console.log(counter);

// }

//   myCounter();
//   myCounter();
//   myCounter();
//   myCounter();
//   myCounter();

// let counter = 0;

// // Function to increment counter
// function add() {
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();
//  console.log(counter);

// Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   let counter = 0;
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();

//  console.log(counter);

// function add() {
//   let counter = 0;
//   function plus() {
//     counter += 1;
//   }
//   plus();
//   return counter;
// }
// console.log(add());
// console.log(add());

// function main() {
//   let name = "Jyoti Prakash";

//   function myName() {
//     console.log(name);
//   }

//  return myName;
// }

//   let  result =   main();
//    result();
//    result();
//    result();
//    result();

// create utility  function   with  the   help  of  closure

// function myAdd(fixNumber) {
//   function userAdd(num) {
//     console.log(fixNumber + num);
//   }

//   return userAdd;
// }

// let result = myAdd(10);
// result(2);
// result(8);
// result(6);
// result(5);
// result(99);

// function hello(){
//   let  name   =  "ravi kumar";
//    function  inner(){
//      console.log("your  name is " ,name);
//    }
//    return   inner;
// }

// let  res =   hello();
// res();

// function myAddNumber(num1) {
//   function inner(num2) {
//     console.log(num1 + num2);
//   }
//   return inner;
// }

// let res = myAddNumber(20);
// res(5);
// res(6);
// res(8);
// res(9);
// res(4);

// const getName = person.getName;
// getName();

// const person = { name: "John" };
// function getName() { return this.name; }
// console.log(getName());



// call() , Apply() , Bind(), method  to  control the  this keyword
// function myFunction(city) {
//   console.log(`${this.name},${city}`);
// }

// const person =  {
//   name  :  "deekap  kumar"
// }

// myFunction.call(person,"CDG");
// call() method
function myCallFunction(name){
    console.log(`${name},${this.age}`);
  return  'done';
}

 let  myData =  {
   age: 22,
 }
myCallFunction.call(myData,"sumit kumar ");   // call methods
myCallFunction.apply(myData,["ravi kumar"]);   // apply  method
let   result =  myCallFunction.bind(myData,"prkash kumar");  //bind() method  ,its not  call  directly  store new variable  then  call
result();                          

