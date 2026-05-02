// // 01-05-2026

// // function argument  in js
// // function myFunction(parm1,parm2){               //parmameter
// //    return parm1 + parm2 ;
// // }

// // console.log(myFunction(20,2));                 //argument

// // Object  as a  argument in js
// // function myFunction() {
// //   console.log(arguments); // Object  as a  argument
// // }

// // console.log(myFunction(12, 3));

// // function sumFunction() {
// //   let sum = 0;
// //   for (let i = 0; i < arguments.length; i++) {
// //     sum += arguments[i];
// //   }
// //   return sum;
// // }

// // console.log(sumFunction(12, 33));

// // function myFunction() {
// //   console.log(arguments);
// // }

// // myFunction(12, 33);

// // function addFunction() {
// //   let sum = 0;
// //   for (let i = 0; i < arguments.length; i++) {
// //     sum += arguments[i];
// //   }
// //   return sum;
// // }

// // console.log(addFunction(12,33,4));

// // function myFunction() {
// //   let sum = 0;
// //   for (let i = 0; i < arguments.length; i++) {
// //     sum += arguments[i];
// //   }

// //   return sum;
// // }

// // console.log(myFunction(12, 1,6,8,9,36));

// // Function Rest Parameter   or  rest operator in js

// // normal function
// // function myFunction(a, b) {
// //   // without rest
// //   console.log(a, b);
// // }
// // myFunction(1, 3, 7, 9);
// // // 1 3    only print because pass   two argument

// // //   using  rest  operator in  js
// // function myFunctionWithRest(...args) {
// //   console.log(args);
// // }

// // myFunctionWithRest(4, 5, 6, 7, 9, 6);

// // function addFunctionWithRest(...args){
// //      let  sum = 0;
// //      for(let i = 0;  i<args.length; i++){
// //        sum += args[i];
// //      }
// //    return sum;
// // }
// // console.log(addFunctionWithRest(12,34,1));

// // rest also  work in  arrow  function  in js
// // let myFunction = (...args) => {
// //   console.log(args);
// // };

// // myFunction(2, 4, 5, 4, 5);

// // let myArr = [2,3,5,7,8];

// // console.log(...myArr);    // spread in js

// //  function myFunction(...args){
// //     console.log(args);
// //  }

// //  myFunction(1,2,4,6);

// // let myArr = [1, 3, 5, 7, 8, 4];
// // console.log(...myArr);

// // function myFun(...args) {
// //   console.log(args);
// // }

// // myFun(1, 3, 5, 7, 8, 4);

// // Function Expressions in js
// // standard  function
// // function myFunction(a, b) {
// //   return a + b;
// // }
// // console.log(myFunction(12, 3));

// // // function experation  in  js
// // const myFunctionExp = function (a, b) {
// //   return a + b;
// // };
// // console.log(myFunctionExp(23, 5));

// // anonymous  function  in js
// // function myFunction(){                                         //named function  in js
// //     console.log("hello  jp from named  function!");
// // }
// // myFunction();

// // const hello = function(){                                      //anonyous function  in js
// //      console.log("hello jp  from  anonyous  function!");
// // }
// // hello();

// // Hoisting in js
// //  console.log("======"+x);
// //  var x = 10;   //undefined

// // myFunction();

// // function myFunction(){
// //     console.log("hello jp!");
// // }

// // const a = "jp========";
// // console.log(a);
// // //var a = "jp========";

// // let sum = add(2, 3); // Will work
// // console.log(sum);

// // function add(a, b) {return a + b;}

// // arrow function in js
// // simple  function
// // const simpleFunction =  function (){
// //     console.log("helllo  jp------");
// // }

// // simpleFunction();

// // // arrow  function
// // const simpleFunction1 =   () =>
// //     console.log("helllo  jp++++++");

// // simpleFunction1();

// // const myFunction = (a,b)=> a + b;
// // console.log(myFunction(12,3));
// // Q. any number  squire   arrow  function
// // const numberSquire = (x) =>  x*x;
// // console.log(numberSquire(13));

// //arrow function  with  this keyword   in js
// const arrowFunWithThis = {
//   fname: "jyoti",
//   lname: "prakash",
//   age: 12,
//   location: "Mohali",
//  fullName : ()=> {
//     return this.fname + this.lname;
//    }
  

// //   fullName : function(){ 
// //    return  this.fname + " " + this.lname
// //   }

// //   fullName : function(){ 
// //    return  this.fname + " " + this.lname
// //   }
// };


// // function User(first, last) {
// //   this.fname = first;
// //   this.lname = last;

// //   // Arrow function captures 'this' from the User function scope
// //   this.fullName = () => {
// //     return this.fname + " " + this.lname;
// //   };
// // }

// // const user1 = new User("jyoti", "prakash");
// // console.log(user1.fullName()); // "jyoti prakash"

// console.log(arrowFunWithThis.fullName());

// const arrowFunWithThis = {
//   fname: "jyoti",
//   lname: "prakash",
//   age: 12,
//   location: "Mohali",
//   // Use the object name 'arrowFunWithThis' instead of 'this'
//   fullName: () => {
//     return this.fname + " " + this.lname;
//   }
// };

// console.log(arrowFunWithThis.fullName()); // "jyoti prakash"

//  scope  in js
//   three types of  scope in js  
// 1. Global scope ,  Function  scope  , block  scope 
// Error in js 
// Error  is  some  code  mistake .
// Type  of  Error   in js 
//

try {
  console.log("A");
  throw new Error("Oops");
  console.log("B");
} catch (e) {
  console.log("C");
} finally {
  console.log("D");
}













