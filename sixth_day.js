//28-04-2026
//object  constructor in js
//    function myData(name,age,id){
//    this.name =  name;
//    this.age = age;
//    this.id =  id;
//    }

//    const data =new  myData("depak",23,1);
//     console.log(data);

// function userData(name,age,mob){
//  this.name = name;
//  this.age = age;
//  this.mob = mob;
// }

// const  user = new userData("jp",12,2345678901);
//  console.log(user);

// const myData = [1,3,53,55];
//  //console.log(myData.at(-1));

//   console.log(myData[myData.length -1]);

//array search method
// IndexOf() ,lastIndexOf(), includes() methods  in js
//   const myData =  [10, 20, 30, 20, 40];
//    console.log(myData.indexOf(20));      // 1 first(20)
//    console.log(myData.lastIndexOf(20));    // 3 last (20)
//    console.log(myData.includes(30));      // bool value

//  find() method in js
//  const myArr = [12,33,44,53,23];
//   console.log(myArr.find((x)=>{
//   return  x > 44;
//   }));

// const myArray = [
//   { name: "jp" },
//   { age: 22 },
//   { id: 1 },
//   { location: "Mohali" },
// ];

//  console.log(myArray.find((data) =>{
//   return data.name === "jp"
//  }));

// findIndex() method  in js 
// const myArr=  [12,33,4,5,75,3];
// console.log(myArr.findIndex((data) =>{
//  return data > 13;
// }));

// const myArr =  ["laptop","bag","phone","mouse","bottle"];
// console.log(myArr.findIndex((asts) => {
//   return  asts === "phone";
// }));

// findLast() Method in js 
//  const  myArr = [13,54,67,78,56,79,99];
//   console.log(myArr.findLast((data)=>{
//   return  data>79 ;  
// }));

// sort  method  in js 
//  const myArr =  [2,4,1,6,3,9,7];
//   console.log(myArr.sort());

// reverse() method  in js  
//  const myArr =  [2,4,1,6,3,9,7];
//   console.log(myArr.reverse());

// tosorted() method  in js 
//  const myArr =  [2,4,1,6,3,9,7];
//    const  sorted = myArr.toSorted();
//    console.log(myArr);
//    console.log(sorted);

// const numbers = [1,2,3,4,5];
// const myNum  = numbers.toReversed();

// // console.log(numbers.reverse());
// //  console.log(numbers);
// console.log(myNum);
// console.log(numbers);

// sorting object in  js 
  
// Assignment  answer 
// --------------------------------*********************-----------------------*********************---------------------------
// ---------*********************-----------------------*********************---------------------------**********-------------
 /* section 1 : Basics & Introduction
Q. what  is java script ? 
ans : Java Script is  a high level   and  versetile  programming language . primarlly used for  dynamic web data show  in web browser.
Q. List different ways to include JavaScript in an HTML file.
 Ans : three types of way to  show  java script file in  HTML.    
 like 1. inline method
      2. in script tag 
      3. creating  a  seprate file in script tag 

Q.  Write a simple script to display “Hello, World!” using:
 ans : console.log("hello world!");

Section 2: Output & Syntax
Q.  Explain different JavaScript output methods with examples. 
ans : java script provide many  types  of  method to  get  input 
 like ,  console.log("hello jp"); , innerHTML and  window.alert() 

 Section 3: Statements & Comments
Q. Write a program to print your name, age, and city using proper JavaScript syntax.
ans :
 const name =  "Jyoti prakash";
 const age  = 22;
 const city =  "Mohali";
console.log(`${name} , ${age} , ${city} `);

Q. Identify and correct errors in the following code:
var x = 10
console.log(x)

Ans :  semicolon (;)  is  missing 

 Q. What are JavaScript statements?
 Ans :  In  java Script  statement   are  instructions to preform  some action .
  for example :  console.log("Hello  js");   
     let x= 12;   
  
 Q. Write a program using single-line and multi-line comments.
   Ans : commnet  is  non excutable  code .
   and two type  of  commnet  first  is   single line comment and multiLine  comment.
   
 Q. Why are comments important in programming?
  ans : there are  many  reasons to comments important in programming  like easy to readabilty and maintain , read any  developer easily and function for  what  so we can  use  comment .
 
 Section 4: Variables & Data Types
  Q. Differentiate between var, let, and const.
   Ans : var =     redeclare allowed ,     reassign  allowed , globle  scope,
         let  =    redeclare  not allowed, reassign  allowed ,  block scope,
         const =   redeclare  not allowed,reassign  not allowed , block scope
 Q.  Write examples demonstrating scope differences.
 ans : 
  {
  var x =  20;
   console.log(`block  print  statement ${x}`);

 }
   console.log(`out  of  block  print  statement ${x}`);

     {
  let  x =  20;
   console.log(`block  print  statement ${x}`);

 }
   console.log(`out  of  block  print  statement ${x}`);


     {
  const  x =  20;
   console.log(`block  print  statement ${x}`);

 }
   console.log(`out  of  block  print  statement ${x}`);

 Q. List all basic data types in JavaScrip and its  example .
  ans :  primitive data type  (String , Symbole, null, Number , bool , bigint ,  undefined  ) 
        non primitive data type (Object , array , function etc.. )
     const name  =  " Prakash";   // String
     console.log(name);
      const x = Symbol();       // Symbol
     console.log(x);
     const num =  22;          //Number
     console.log(num);
     const x = null;           //null
     console.log(x);
     const isTrue =  true;    //  bool
     console.log(isTrue);
     const myNum = 122337733373737733838;   //bigInt
     console.log(myNum);
     let x;                             //undefined
     console.log(x);
   
      const myData = {               //object
     name : "jp",
    age : 22,
    id : 1
     }
    console.log(myData);           //function
      function myFun(a,b){
   return a+ b;
    }
   console.log(myFun(12,3));
     const myArr = [12,43,5,56,66];   // array
   console.log(myArr);
   Q . Write a program to:
Declare variables of different types
Display their types using typeof
 Ans : 
   // String
    let x = "hello jp";
    console.log(typeof x);
    // Symbol 
         let x = Symbol();
    console.log(typeof x);
    //Number
           let x = 22;
    console.log(typeof x);
   // null        
    let x = null;
    console.log(typeof x);
           let x = true;
    console.log(typeof x);
    // number
          let x = 33;
    console.log(typeof x);
    // bigint 
     let x = 3326373334666666666666666666666n;
    console.log(typeof x);
    //undefined
       let x ;
    console.log(typeof x);
    // object 
   let mydata  =  {
       name : "jp",
        age  : 12,
        id : 2,
   }
    console.log(typeof mydata);
    // array ,  return  object 
        let mydata  =  [12,43,54,74,87,43]
    console.log(typeof mydata);
    // function 
  function myData(name){
     console.log(`my name  is ${name} `);

    }
    console.log(typeof myData("jp"));

    //  Section 5: Operators
  Q . Arithmetic : in java script  perform  some  mathematical  operation.
    Ex. + , - , * , / , % 
    Comparison :  compare of two  value 
     Ex. = , == , === , < ,> <= , >= 
    Logical : both condtion true  use  && operator , only one  true   use || , and behave  oposite type  like  if  true and  return  false  or false  return  true .
Q. Write a program to perform all arithmetic operations on two numbers.
ans : const num1 = 10;
     const num2 = 5;
      console.log(num1 + num2);
     console.log(num1 - num2);
     console.log(num1 * num2);
     console.log(num1 / num2);
     console.log(num1 % num2);
     console.log(num1 ** num2);
     
   Q.  What will be the output of:
     Ans:      console.log(5 == "5");  // true
               console.log(5 === "5");  //false  
Section 6: Objects
 Q. What is a JavaScript object? 
 ans : in java script   object is a container  to  conatain  properties and  methods. 
  Ex.
   const student = {
  name: "prakash",
  age: 22,
  marks: 450,
  greeting : function(){
   return `${this.name} ,${this.age} , ${this.marks}`
  }
}
 
console.log(student);
console.log(student.greeting());

  Q. Explain the use of this keyword with example
  ans: this  keyword refer to the  object   properties below  example 
  const myData = {
  name: "Jyoti  prakash",
  age: 22,
   id : 1,
  data : function(){
   return `${this.name} ,${this.age} , ${this.id}`
  }
}
 
console.log(myData);
console.log(myData.data());  

Q. What is an object constructor?
 Ans :  object constructor is a special  type  of  method which  initial the  object 
 Example.
    function userData(name, age , location){
  this.name = name ;
  this.age = age;
  this.location = location ;
}

 const dpData = new  userData("deepak",23,"delhi");
  const rkData = new userData("rakesh kumar",20,"goa");
  const skData = new userData("suman kumari",30,"mumbai");
  console.log(dpData);
  console.log(rkData);
  console.log(skData);
 
 Section 7: Arrays
 Q. What is an array in JavaScript?
 Ans : In  java script   array  is a speacial type  of  object to store  item  in single variable .

 Q. Create an array of 5 numbers and:
Display all elements
Add a new element
Remove the last element
Ans.
  const  myArr = [12,32,33,54,34];
   console.log(myArr);
   myArr.push(17);          // add new element 
   console.log(myArr);
   myArr.pop();
   console.log(myArr);     //remove element  from end 

  Q. Explain and demonstrate at least 3 array methods (e.g., push, pop, shift).
    
  ans.
push() : element add from end .
pop() : element remove from end .
shift() : element remove from  start .
Ex. 
const  myArr = [12,32,33,54,34];
   console.log(myArr);
   myArr.push(17);          // add new element 
   console.log(myArr);
   myArr.pop();
   console.log(myArr);     //remove element  from end 
   myArr.shift();      //remove   from start
    console.log(myArr); 
  Q. Sort an array of numbers
Ans.  
const myArr = [2,6,3,1,8,7];
 console.log(myArr.sort());     // sort()  method
Q. Find the largest number
  ans. 
  const myArr = [24,69,32,16,58,47];
 const  max  = Math.max(...myArr);
  console.log(max); 
  Section 8: Array Advanced Concepts
  Q. What is array iteration? 
   Ans. in java script  Array iteration is a processs of accessing  each element  to  perform  some  some an operation
    such  as modifying value ,filtring  data or calculate  data .
   example : forEach(),map() , flatmap(), filter(), reduce(),every() etc.
   Q. Use forEach() to print all elements of an array.
  Ans.  const myArr = [12,32,13,45,54,23];
     myArr.forEach((value)=>{
         console.log(`${value}`);
     });

  Q. Write a program using map() to double all numbers in an array.
 ans. 
   const myar = [36,34,75,44,58,90];
    myar.map((value)=>{
     console.log(`${value*2}`);
    });
   
Q. Use filter() to get numbers greater than 10 from an array.
Ans.   
  const myArr = [2,6,9,21,12,14,17];
   const result  =   myArr.filter((value)=>{
       return value > 10;
     }
     );
   console.log(result);
   
 Q. Explain difference between find() and filter().
   ans. find() : check first  matching  element , no match show  undefined and stop at  first  Match 
       filter(): Array of all matching elements , not metch show [] empty and iterates full  array  

       Ex . find()
     const myArr = [2,34,37,23,14,16];
     const result = myArr.find((value)=>{
     return value >10;
     });
    console.log(result);
 
       const myArr = [2,34,37,23,14,16];
     const res  = myArr.filter((value)=>{
        return value > 12;
     });
      console.log(res);
section 8 complite 

 */

 




//Array Iterations  in js 
 //forEach() method in js 
// const  myArr = [23,44,65,87,13,22,3];
//     const  result =   myArr.forEach((num, index,array)=>{
//      console.log(` ${num*2} , ${index} ,${array}` );
//     });
 
//  const myData = ["name","age","rollNumber","location"];
//       myData.forEach((nm,index,array)=>{
//      console.log(`${nm} ,${index} ,${array}`);
//       }); 

//   const myData = ["name","age","rollNumber","location"];
//       myData.forEach(function data(value, index,array){
//           console.log(`${value}, ${index}, ${array}`);     
//       });

//  map() method  in js 
// const myArrj = [10,20,30,40,50];
//    myArrj.map((value,index,array)=>{
//       console.log(`${value *2},${index},${array}`);
//    });




    






  
 






 
































