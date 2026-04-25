//Assignment 
//JS Tutorial
//HTML: to define the content of web pages
//CSS: to specify the layout of web pages
//JavaScript: to program the behavior of web pages
//JavaScript Introduction

//JavaScript Syntax
//JavaScript Statements
//let x, y, z;    // Statement 1
//let name = "jp";
//name = "prakash";    //assign  value
// Keyword:	Description //----------------------------
// var :	Declares a variable
// let :	Declares a block variable
// const :	Declares a block constant
// if :	Marks a block of statements to be executed on a condition
// switch	:  Marks a block of statements to be executed in different cases
// for :	Marks a block of statements to be executed in a loop
// function :	Declares a function
// return :	Exits a function
// try	: Implements error handling to a block of statements 
 //JavaScript Comments------------------------------------------
 //Single Line Comments
//  let x= 23; // single  line   comment
/*
Multi-line Comments
*/
//JavaScript Variables
//Modern JavaScript keyword let, const 
//Older JavaScript keyword   var         
//JavaScript Underscore (_)
// let _Name = "Jp";
//  console.log(_Name);
//JavaScript Dollar Sign $
// let $ = 15;
// let $$ = "jp";
// let $$$ = true;
// let  $name = "Deepak  kumar";

// console.log($);
// console.log($$);
// console.log($$$);
// console.log($name);
//Declaring a Variable Automatically  // not recomended
// x = 3444;
// console.log(x);
// Declaring a Variable Using var    //not recommended
// var name = "akash kumar";
//  var age =  23;
//   console.log(name);
//   console.log(age);
//JavaScript Data Types
//SNBU ,object,array,  function
//JavaScript Let
// {
//     let name  =  "jp";
//     //let name =  "deepak  kumar"  //redeclared not  allowed
//      name =  "prakash"  //reassign  allowed
//       console.log(name);
// }

// name = "hello"
// console.log(name);
//JavaScript Const

// {
//     const name = "jp";
//     // const name = "ravi  kumar";  //redeclared not  allowed
//     //   name = "raju";   //reassign   not allowed
//     console.log(name);
// }

// carName = "Volvo";
// var carName;
// console.log(carName);
//JavaScript has 8 Datatypes  //Done 
//type of
//    let result  = typeof 22;
//    console.log(result);
// let car = "";
// console.log(car);
//JavaScript Operators
//Assignment operators  //(=)
// Assign the value 5 to x
// let x = 5;
// console.log(x);

// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

//JavaScript Assignment Operators

// Operator	Example    Same As
// =	x = y	       x = y
// +=	x += y         x = x + y
// -=	x -= y	       x = x - y
// *=	x *= y	       x = x * y
// /=	x /= y	       x = x / y
// %=	x %= y	       x = x % y
// **=	x **= y	       x = x ** y

//Logical Assignment Operators

// Operator	   Example	        Result
// &&=	       true &&= 10	    x = 10
// ||=	       false ||= 10	    x = 10
// ??=	       null ??= 10     	x = 10
//JavaScript Comparison Operators

//Operator  Description	                           Example
// ==	    equal to	                            x == 5
// ===	    equal value and equal type	            x === 5
// !=	    not equal	                            x != 5
// !==	    not equal value or not equal type	    x !== 5
// >	    greater than                          	x > 5
// <	    less than	                            x < 5
// >=	    greater than or equal to	                x >= 5
// <=	    less than or equal to	                x <= 5

//JavaScript Logical Operators
// Operator    	Description
// &&	        logical and
// ||	        logical or
// !	        logical not

//The Spread (...) Operator
//array example
// let  myArray1 = [1,2,43,44];
// let  myArray2 = [...myArray1,77,88,99,100];
//  console.log(myArray2);

//object example 
// const myData1 = {
//      name : "jp",
//      age : 22,
// }

// const myData2 = {
//     id : 123,
//     mob : 1234567890
// }

// const result =  { ...myData1, ...myData2};
// console.log(result);
// let x;
// x ??= null;
// console.log(x);

//comaparision oprator  in js 
//  let  age1 = "23";
//  let  age2 = 23;
//  console.log(age1 == age2);
//  console.log(age1 === age2);

//String  comparision  in js 
//  const  myText1 = "A";
//  const  myText2 = "B";
//  const result  = myText1 > myText2;
//   console.log(result);
//When numbers are compared, JS uses math rules (not a dictionary)
//Golden Rule
// number vs number     	normal math
// let text1 = 2;
// let text2 = 12;
// let result = text1 < text2;
// console.log(result);
// string vs string	        dictionary compare
// let  myNum1 = "12";
// let myNum2 =  "20";
// let  result  = myNum1 < myNum2;
// console.log(result);
// number vs string	        string → number convert
// let  myNum1 = 13;
// let myNum2 =  "10";
// let  result  = myNum1 < myNum2;
// console.log(result);