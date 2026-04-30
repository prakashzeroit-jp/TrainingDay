// 28-04-2026
// function myfunction() {
//   var x = 1;
//   let y = 2;
//   const z = 3;
//   return x +y +z;
//    console.log(x);
//  console.log(y);
//  console.log(z);

// }

// //    console.log(x);   //function  block scope
// //  console.log(y);
// //  console.log(z);

// console.log(myfunction());
// if condtion  in  js
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// if statement in java script

// let age =  19;
// if(age>18){
//    console.log("adult");            //true  statement  in  js
// }

// Nested if in js

// let age = 19;
//  let  country  = "india";
//  let text = "You not are elligible  for vote!";

//  if(age>=18){
//   if(country == "india"){
//    text = "You are elligible  for vote!";
//   }
//  }
//  console.log(text);

// let atmpin = 1234;
// let balence = 8000;

// if (atmpin === 1234) {
//   console.log("pin is correct");
//   if (balence >= 5000) {
//     console.log("Sufficient  balence you take  money");
//   } else {
//     console.log("InSuffecient balence  in your   account ");
//   }
// } else {
//   console.log("plase Enter correct pin!");
// }

// let age = 49;
// let isticket = true;

// if (age >= 18) {
//   console.log("your age  elligible for  watch  movie ******************");
//   if ((isticket === false )) {
//     console.log("you have a  ticket  ++++++++++++++++++");
//   } else {
//     console.log("not ticket -------------");
//   }
// } else {
//   console.log("You are  not  elliggible  watching movie____________________");
// }

// let age = 38;
// let isLicence = true;

// if (age >= 18) {
//   console.log("elligible for  drive!");
//   if (isLicence === false) {
//     console.log(" you have a licence !");
//   } else {
//     console.log(
//       "You  have not a   licence!,  thet  means  you are not  elligble  for  drive !",
//     );
//   }
// } else {
//   console.log(
//     "You are a  minor   so that  you  can  not  ellligble   for  drive !",
//   );
// }

// let studentMarks = 46;

// if (studentMarks >= 95) {
//   console.log("Excellent marks!");
// } else if (studentMarks >= 65) {
//   console.log("good marks!");
// } else if (studentMarks >= 33) {
//   console.log("only  passing  marks number!");
// } else {
//   console.log("Soory! You are  failed!");
// }

// Ternary operator in
// this is  short  form of  if else  condition

//  let isLoggedIn = true;

//  let  result  = isLoggedIn ? "Welcome!" : "please login !";
//   console.log(result);

// let age = 18;

// let   result = (age >= 18) ? "Adult" : "Monor";
//  console.log(result);

// switch  case in js

// let day = 70;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("please choose any day!");
// }

// Booleans in js

// let x, y;
// x = 10;
// y = 30;

// console.log(x===y);

// let a = 120;

// console.log(a === 7);

//Logical Operators in js
//  The && operator returns true if both expressions are true, otherwise false:

// let x = 20;
// let y = 35;

// let result = x < 30 && y < 35;
// console.log(result);

// The || operator returns true if one or both expressions are true, otherwise false:

// let x =  20;
//  let  y = 300 ;
//   let  result  =  x < 30 || y < 40;
//   console.log(result);
//   console.log(!result);     // not ! oprator

// nullish  oprator in js

// let distence = 0;
// let currentDistence = distence || 20;  //trditional method     // 20
// console.log(currentDistence);
// let  currentDistence2 = distence ?? 20;                       // 0
//  console.log(currentDistence2);
