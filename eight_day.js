// 30-04-2025
// if , Nested if , else if , switch and  ternary

// let age =  9;
// if(age > 18){
//    console.log("hello jp!");                       // true condtion
// }else{
//     console.log("something  went  wrong !");       // false  condtion
// }

// let isLoggedIn = false;
// if(isLoggedIn){
//  console.log("Loggin Successfully!");
// }else{
//      console.log("Something Went wrong!");
// }

// let money = 300;
// if (money < 1000) {
//   console.log("watch movie!");
// } else {
//   console.log("not watch movie!");
// }

//  let  temp = 30;
//   if(temp>34){
//       console.log("High temperature!");
//   }else{
//       console.log("Min temperature!");
//   }

// let  marks = 95 ;
//  if(marks>90){
//     console.log("Excellent  marks!");
//  }else if(marks > 60){
//   console.log("Good  marks !");
//  }else if(marks > 33){
//    console.log("only  passing  marks!");
//  }

// Ternary  in js
// let  age  = 33 ;
//  let  result  = (age>18) ? "Adult" : "Minor";
//   console.log(result);

// let isLoggedIn = false;
// let res = isLoggedIn ? "Home Screen" : "Login Screen";
// console.log(res);

//  Switch  statement in js

// let week = 8;
// switch (week) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednsady");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log(" Some  thing  Went   wrong!");
// }

// logical   operator  based  if  esle  statement  in js

// let  temp = 43;
// if(temp >= 30 && temp <=35){
//    console.log("Normal Temperature !");
// }else if(temp >=36 && temp >=40){
//   console.log("High Temperature !");
// }else if( temp>=41 && temp >=50){
//   console.log("Very  High   temperature!");
// }else{
//     console.log("cloudy!");
// }

//  loop  in js
//for   loop in js

//  for(let i= 0;i<=10;i++){
//    console.log(i);
//  }

// while loop in js

//  let i = 0;
//  while(i <=5){
//    console.log(i);
//   i++;
//  }

// break  in for loop  in js
// for(let  i =  0; i<= 10; i++){
//    if(i===5){
//     break;

//    }
//    console.log(i);
// }

// continue in  for  loop  in  js
//  for(let i =  0; i<= 10;  i++){
//      if(i===7){
//         continue;
//      }
//       console.log(i);
//  }

// do while  loop  in js

// let i=  0;                                       // initialization
// do{
//   console.log(i);
//   i++;                                          // increament
// }while(i<=10){                                 // condition
// }

// function in js
// what is  function in  js
//  function is  block of code to   perform   some action and  task and also made  code  resuable.

// function myFunction(){
//   return console.log("hello  jp!");
// }

// myFunction();

// function myAdd(a,b){
//    return a + b ;
// }

//   let res =   myAdd(12,23);                // invoke function
//  console.log(res);

//  console.log(myAdd(33,33));
//  console.log(myAdd(11,73));
//  console.log(myAdd(8,30));
//  console.log(myAdd(23,93));

// function sub(a,b){
//      return a-b;
// }

// console.log(sub(12,4));
// console.log(sub(8,9));
// console.log(sub(52,4));
// console.log(sub(16,4));

// function mlt(x,y){
//   return x*y;
// }

// console.log(mlt(13,4));
// console.log(mlt(5,4));
// console.log(mlt(3,4));
// console.log(mlt(177,4));

// function div(a,b){
//   return a/b;

// }

// console.log(div(12,4));
// console.log(div(55,4));
// console.log(div(80,4));

// function with  one  parameter

// function nameFunction(name){
//      return "Hello " + name;
// }

//  console.log(nameFunction("jp"));
//  console.log(nameFunction("deepak kumar"));

// convert celcius  to fahrenheit

// function toCelcious(fahrenheight){
//    return  (5/9)*(fahrenheight-32);
// }

//  console.log(toCelcious(77));

// return  statement in js
// function message() {
//   console.log("excute the  pirnt code"); //code excute
//   return "Only jp";
//   console.log("not excute the  pirnt code"); //not code excute
// }

// console.log(message());

// function fullName(fname,lname){
//     return fname + " " + lname;
// }

// let  res = fullName("jyoti","prakash");
// console.log(res);

// function add(a, b) {
//  return "Done!";

//   return a + b;              // this line  will naver run
// }

// console.log(add(12, 23));

// without return  function  show undefined

// function add(a, b) {
//   let x = a + b;
// }

// console.log(add(12,3));

// scope in js

// let age = 23;
// function myAge() {
//   console.log(age);
// }

// myAge();
// console.log("from  consonal " + age);

// function scope
// function myAge(){
//     let age = 29;
//      console.log(age);
// }

// myAge();
//     console.log(age);     // function  scope   means  show error

// block scope  in js
// {
//   let age = 20;
//   console.log(age);
// }

// console.log(age);               // show  error

// arguments object  in js
// function demo() {
//   console.log(arguments);
// }

// demo(10, 20, 30,344);

// function demo(name){
//     console.log(arguments);
// }

// demo(23);

// function myFunction(){
//     for(let   i = 0; i< arguments.length;i++){
//         console.log( "Numebr is " + arguments[i]);
//     }
// }

// myFunction(12,3,3,46,6,88);


// // /

//  myArr.reverse();
// console.log( " =============="+myArr);

// let  a ,b;
// a = 20;
// b= 30;

// let temp =
let myArr = [1, 2, 3, 4, 5, 6];

let a = myArr.length;

res = parseInt(a / 2);

//2nd method   without  using variable 
// for (let i = 0; i < res; i++) {
 

//   myArr[i] = myArr[i] +  myArr[a - i - 1];
//    myArr[a - i - 1]=myArr[i] - myArr[a - i - 1];
//   myArr[i] = myArr[i] - myArr[a - i - 1];
 
// }

// for (let i = 0; i < res; i++) {
//   first = myArr[i];
//   second = myArr[a - i - 1];

//   first = first + second;
//   second = first - second;
//   first = first - second;

//   myArr[i] = first;
//   myArr[a - i - 1] = second;
// }

console.log(myArr);



