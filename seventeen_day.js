// 09-05-2026
// set  in js
// const mySet = new Set([" ravi", "deepak", "amit", "jp", "anjali", "jaya"]);
//     console.log(mySet);
// // set  method   in  js
// mySet.add('himesh');
// mySet.add('kartik');
// mySet.add('raj');
//   console.log(mySet);
// // mySet.clear();
// //  console.log(mySet);
// mySet.delete('kartik');
//  console.log(mySet);
//    let   result =  mySet.entries();
//     let    text = ' ';
//     for(value  of  result){
//         text +=  value;
//     }
//  console.log(text);

// const myName = require("./eighteen_day");

// let text = "";
// let result = mySet.forEach((value) => {
//   text += value + "\n ";
// });

// console.log(text);

// let    result =  mySet.values();
// let   text  =  '';
//  for(let  value  of result){
//        text  += value +  "\n ";
//  }
//     console.log(text);

//  let   result =  mySet.keys();
//  let   text=   '';
//   for(let  key of result){
//     text += key +  "\n ";

//   }
//     console.log(text);

// map in     js
// const myMap = new Map();
// myMap.set("name", "jp");
// myMap.set("age", 22);
// myMap.set("location", "Mohali");
// myMap.set("id", 123);
//  console.log(myMap);

// let myMap = new Map([
//   ["name", "jp"],
//   ["age", 22],
//   ["id", 123],
// ]);

// console.log(myMap);
// myMap.get('name');
//  console.log(myMap);

// myMap.size;
//  console.log(myMap);

// myMap.delete('id');
//  console.log(myMap);

// myMap.clear();
//  console.log(myMap);

//  console.log(myMap.has());
// let text = "";
// const result = myMap.forEach((value, key) => {
//   text += key + " = " + value + "\n";
// });

// console.log(text);

//RegExp in js
//A Regular Expression is a sequence of characters that forms a search pattern
// match()  method    in   js
// let myregExp = "Hello  jyoti prkash";
// let result = myregExp.match(/u/);
// console.log(result);

//  let  result = myregExp.replace('jy','mk');
//  console.log(result);

// let text = "Black, white, red, green, blue, yellow.";

// let result = text.match(/red|green|blue/g);
//  console.log(result);

// let text = "Give 100%!";
// const pattern = /\w/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "1, 100 or 1000?";
// const pattern = /10?/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "Is this all there is?";
// const pattern = /is/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "Hello World!";
// const pattern = /[HW]/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "This is W3School";
// const pattern = /[A-Z]/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "This is W3School";
// const pattern = /[a-z]/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "123456789";
// const pattern = /[1234]/g;

// let result = text.match(pattern);
//   console.log(result);

// let text = "123456789";
// const pattern = /[1-4]/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "Give 100%!";
// const pattern = /\d/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "Give 100%!";
// const pattern = /\D/g;    // The \D metacharacter matches non-digit characters.

// let result = text.match(pattern);
//  console.log(result);

// let text = "Give _100%!";
// const pattern = /\w/g;

// let result = text.match(pattern);  //The \w metacharacter matches word characters.

// // A word character is a character a-z, A-Z, 0-9, including _ (underscore).
//  console.log(result);

// let text = "Is this all there is?";
// const pattern = /\s/g;

// let result = text.match(pattern);
//  console.log(result);

// let text = "Visit W3Schools. Hello World!";
// let pattern = /\x6F/g;

// let result = text.replace(pattern, "*");
//  console.log(result);

// let text = "Visit W3Schools. Hello World!";
// const pattern = /\u0057/g;

// let result = text.match(pattern);
// console.log(result);

// const pattern = /^W3Schools/;
// let text = "3Schools Tutorial";

// let result = pattern.test(text); // true
// console.log(result);

// const pattern = /W3Schools$/;
// let text = "Hello W3Schools";

// let result = pattern.test(text); // true
//  console.log(result);

// let text = "HELLO, LOOK AT YOU!";

// let result = text.search(/\bLO/);
//  console.log(result);

// let text = "HELLO, LOOK AT YOU!";

// let result = text.search(/LO\b/);
//  console.log(result);

// let text = "W3Schools Tutorials";
// let pattern = /W3Schools(?= Tutorials)/;

// let result = pattern.test(text);
//  console.log(result);

// let text = "W3Schools Tutorials";

// let pattern = /W3Schools(?! Tutorials)/;
// let result = pattern.test(text);
//  console.log(result);

// let result = 3 + 2 + "7";
// console.log(result);

// let   myNumber =  2 + 4 + "3";
//  console.log(myNumber);

//   const   number =  12 + 2 + 4 + "3";
//    console.log(number);
//  const     x=   120 + 30 + 40  + "10";
//    console.log(x);

// let    x=  3 + (2 + "7");
//  console.log(x);
// let  x =  "10" - 2;
// console.log(x);

// let  x = "10" + 5 - 2;
//   console.log(x);

//  let x = true + 1;
//   console.log(x);

//   let  x  = false +  2;
//     console.log(x);
//  let  x  = false -  2;
//     console.log(x);

//  let  x  = true -  2;
//     console.log(x);

//  let  x  = true +  2;
// console.log(x);

//  let  x  = null + 5;
//     console.log(x);

//  let  x  = undefined + 5;
//     console.log(x);

// let x = "4" * "4";
// console.log(x);

// let x = "5" * "5";
// console.log(x);

// let   x= "3" +  "3";
//  console.log(x + " this  is x....");

// let   y= "3" -  "3";
//  console.log(y +  " this   is y....");

// let   z= "3" *  "3";
//  console.log(z +  " this   is  z...");

//  let  a= "3" /  "3";
//  console.log(a + " this  is  a...");

// let x = 5 + 5 + "5" - 5;
// console.log(x);

// let x = "";
//  console.log(x);

// let x = 10;
// let y = x++; // y = 10 , then x = 11

// console.log(y); // Output: 10
// console.log(x); // Output: 11

// let a = 10;
// let b = ++a; // a = 11 , then b  = 11

// console.log(b); // Output: 11
// console.log(a); // Output: 11

// let x = 20;
// let y = x++;
// console.log(y);
// console.log(x);

// let z = 30;
// let a = ++z;
// console.log(a);
// console.log(z);

// let x = 10;

// function printX() {
//   console.log(x);
// }

// function wrapper() {
//   let x = 20;
//   printX();
// }

// wrapper();

// let x = [1, 3, 4, 5];
// x[8] = 12;
// console.log(x);
//  console.log(x.length);

// console.log( typeof null === "object");

// let x ={Course: "DSA", Duration:30};
// delete x.Course;
// console.log(x);

// let x = 0;
// console.log(x++);
// console.log(++x);

// let x;
// console.log(x); // undefined

//  let   y   = null;
//   console.log(y);

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b, a === b);

// let y = 30;

// if (true) {
//   let y = 40;

//   console.log(y);
// }

// console.log(y);

//  const add = require("./eighteen_day");
// const  eighteen_day =  require("./eighteen_day");

//   // console.log("eighteen_day");
//    add(12,3);

// const  eighteen_day = require('./eighteen_day');

// eighteen_day.myName("jpraksh");
// eighteen_day.add(23,5);

// const { myName, add,sub,mlt,div,exp } = require("./eighteen_day");
// myName("ram");
// add(13, 5);
// sub(10,3);
// mlt(12,5);
// div(12,4);
// exp(4,2);



// const  {myObj,myFunction} =  require('./eighteen_day');
//  console.log(myObj);
//  myFunction("jp");
