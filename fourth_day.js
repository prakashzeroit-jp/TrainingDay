
//26/04/2026
// let  x = 2;
//  let y = x **3;
//  console.log(y);

// let  x= 20;
// let y = 5;
// let  result = x % y;
//  console.log(result);

// let x= 30+40/2*5-3;
//  console.log(x);
// let x = 7;
// let y = 2;
// let z = x % y;
// console.log(z);
// let x = 5;
// x--;
// let z = x;
// console.log(x);
// let x= 20;
// x = x + 2;
//  console.log(x);
// let  x=   3;
//  let y = 20;
//  let z= x && y;
//   console.log(z);

// let  x= true && true;
// console.log(x);
// let  y = true && false;
//  console.log(y);
 
// let x= true || true;
// console.log(x);
// let y=  true || false;
// console.log(y);
// Assignment operators  advance
//The += Operator
// let x = 10;
// x += 5;
//  console.log(x);
//The -= Operator
// let x = 30;
//   x -= 3;
//   console.log(x); 
//The *= Operator
// let x = 20;
//  x*=4;
//   console.log(x);
//The **= Operator
// let x = 10;
//  x**=3;
//  console.log(x);
//The /= Operator
// let  x=  30;
//  x /= 4;
//   console.log(x);
// The %= Operator
// let x = 20;
//  x %= 3;
//   console.log(x);
//String Assignment operator  in js 
//The += Operator
// let myData = "jyoti";
//  myData  += " prakash";
//  console.log(myData);
//The &&= Operator
// let x = true;
//   let  y =  x &&= 10;
//    console.log(y);
// let x = false;
//  let y = x &&= 45;
//   console.log(y);
// let x= 1;
//  let  y  = x &&= 39;
//   console.log(y);
// let   x= 33444;
//  let  y = x &&= 45;
//    console.log(y);
// let   x= 0;
// let  y  = x &&= 90;
//    console.log(y);
// let  x= null;
//  let y = x &&= x;
//   console.log(y);
// let  x= undefined;
//  let  y = x &&= 23;
//   console.log(y);
//The ||= Operator
// let  x= false;
// let  y = x ||= 30;
//  console.log(y);
// let x=  true;
//  let  y = x ||= 50;
//   console.log(y);
// let x= null;
//  let y = x ||= 35;
//   console.log(y);
// let  x= undefined;
//  let  y = x ||= 48;
//   console.log(y);
//The ??= Operator
// let x = 10;
// let y = 5;
// x ??= 10;
// console.log(x);
// let a = null;
// a ??= 10;
// console.log(a);
// let x = undefined;
// let  y = x ??= 24;
//   console.log(y);
//The Spread (...) Operator
// let myDigit1 = [1,23,45,67,89];
//  let myDigit2 = [...myDigit1,556,7,89,78,9,8,9,8];
//   console.log(myDigit2);
// let myData1  =  {
//      name : "jp",
//      age : 23,
//      height : "5.4' inch "
// }

// let myData2  = {
//      dress : "green",
//      isLaptop : true,
// }  

// let  result  = {...myData1, ...myData2};
//  console.log(result);
//  const  personData1 = {
//     name : "ravi kumar",
//     age : 24,
//  }

//  const personData2 = {
//     location : "mohali",
//     isCar : false
//  }

//   //const result = {personData1 , personData2}  //here not spared
//   const result = {...personData1 , ...personData2}  //here  spared
//   console.log(result);

//Comparison Operators in js 
// Comparison operators always return true or false.
// let  x =  5;
// console.log(x !== 5);
// console.log(5 !== "5");
// console.log(2 < 12);  
// console.log(5 < "20");   // true
// console.log(5 < "abc");  // false (abc → NaN)
// console.log("a" < "a");   // false
// console.log("5" < "5");   // false
// console.log("10" < "100"); // false
//Conditional Statements in js 
// let  age = 14;
// if(age >18){
//     console.log("u are  adult!"  );
// } else{
//      console.log("not----------");
// }
//The else if Statement   //else if ladder
// let marks = 59;
//  if(marks >=33 && marks <=50){
//      console.log("U are pass----------");
//  }else if(marks >=51 && marks <= 65){
//  console.log("good marks -----------");
//  }else if(marks >=66 && marks <= 85){
//  console.log("best marks--------------");
//  }else if( marks >= 86 && marks <= 98){
//  console.log("Excellent markas-------------");
//  }else{
//     console.log("u are  failed-------");
//  }
//switch Statement in js 
// let  color = 2;
// switch(color){
//    case 1:
//    console.log("red");
//     break;
//  case 2:
//     console.log("brown");
//     break;
//  case 3: 
//      console.log("black");   
//    default: 
//    console.log("Unknown  color"); 
// }

// let week =  2;
// switch(week){
//  case 1:
//   console.log("sunday");
//     break;
//     case 2:
//   console.log("monday");
//     break;                   
//      case 3:
//   console.log("tuesday");
//     break;  
//     default :
//      console.log("Unknown----------");
// }
// Ternary Operator in jS
//condition ? expression1 : expression2
// let  age = 19;
// let  result =  (age>18) ? "adult" : "minor";
//  console.log(result);
// let mode = 2;
// let result = (mode==1) ? "Dark" : "light";
//  console.log(result);
//JavaScript Objects
//Object is  a  collection of Properties which  perform  some  operation like add,update  and delite 
//  let  myData = {
//   name : "jp",
//   age : 22,
//  location : "mohali",
//  }
  
//  let  result  =   myData;
//   console.log(result);
//craete object  with new   keyword 
// let myLaptop  = new Object({
//    name : "Mi Notebook ultra",
//    price :  29000,
//    color  : "Silver",
// });
//  console.log(myLaptop);

// let fan = new Object({
//      name : "Usha",
//      wing : 3,
//      rpm : 800,
//      price : 1800,
//      color : "dark red"
// });
// let result = fan;
//  console.log(result);

// let color = new Object({
//     name : "red",
//     wevlenght : "390 nm",
//     symbol : "danger"
// });
// console.log(color);

// let person ={
//   firstName : "Jyoti",
//   secondName : "Praksh",
//   age : 22,
//   location  : " mohali",
//   fullName : function(){
//    return this.firstName + ', ' + this.secondName;
//   }
// }

// let result = person.fullName();
//  console.log(result);

// let  myPhone = {
//     name : "vivo",
//     color : "darkblue",
//     price : 20000,
//     isNew : false  
// }
// myPhone.name = 'oppo';
// myPhone.color = 'skyBlue' ,
// myPhone.price = 448840;
// delete myPhone.name;
// console.log(myPhone);
//Object Methods in js 

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   getId: function() {
//     return this.id;
//   }
// };
// let number = person.getId();
//  console.log(number);
// let bike = {
//    fname : 'Hero',
//    lName : 'honda',
//    price : 20000,
//    color : 'black',
//    isNew : true,
//    fullName : function(){
//      return this.fname + " " + this.lName;
//    }
// }
// let  result = bike.fullName();
//  console.log(result);
// method to dispaly  object
// let myFev = {
//   color : 'white',
//   bike : "Sports",
//   salary : 50000,
// }

//method 1
// let result = myFev.color + " " + myFev.bike + " " + myFev.salary;
// console.log(result);

// //method 2
// console.log(myFev);

//using for in loop   //method 3
//  for(let key  in myFev){
//   console.log(`${key} : ${myFev[key]} `);
//  }
// let bag = {
//      name : "Mi Bag",
//      colors : "silver",
//      isNew : false,
// }

// for(key in bag){
//   console.log(`${key} : ${bag[key]}`);
// }
//Using Object.values()
// let phone = {
//   name : "vivo",
//   price : 20000,
//   color : "dark blue"
// }

// let  myArray = Object(phone);  
//  console.log(myArray);

// Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// Create an Array
// const myArray = Object.values(person);

// //Stringify the Array
// let text = myArray.toString();
// console.log(text);
//object  constructor  
//  function userData(name, age , rollNumber){
//     return this.name, this.age,this.rollNumber;
//  }





































































     


































