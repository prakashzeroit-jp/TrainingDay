//23-04-2026
//variables  example
//------------------------------
// let  a = 120;
// let  b =33;
// let  c = 50;

//const { colors } = require("chalk");

// let addResult =  a+b+c;
// let subResult =  a-b-c;
// let mltResult =  a*b*c;
// let  divResult = a/b;

// console.log(addResult);
// console.log(subResult);
// console.log(mltResult);
// console.log(divResult);

//var  keyWord
// var  a=   20;
// var a = 30;  //redeclaired  allowed
//   a =  50;   //reassign allowed
// console.log(a); 


//let  keyword
//   let  a = 20;
//   //let a = 30; // not redeclaired  allowed
//     a= 40;  //reassign  allowed
    
// console.log(a);

//Block  scope
// {
//   let a = 30;
//      a =  70;
//       console.log(a);

// }

//  console.log(a);


// const  keyWord

//  const  a = 20;
//  // a = 39;  // reassign not allowed 

//   console.log(a);

// const  block scope 
//  {
//   const a  = 34;
//     console.log(a); 
//  }

//   console.log(a);

// Data types  

 //String 
//   let  carName = "SUV";
//   let  carColor =  "Red";
//   let   carPrice =  "1200k";
//    let  carFuelType = "EV";

//    console.log(carName);
//    console.log(carColor)  ;
//    console.log(carPrice);
//    console.log(carFuelType);

//symbol
//  let  syl1 = Symbol("Id1");
//  let  syl2 = Symbol("Id2");

//  console.log(syl1);
//  console.log(syl2);
//  console.log(syl1===syl2);


//Number 
//int type
// let a = 23;
// let b = 40;
//  console.log(a);
//  console.log(b);

//double type
// let  a = 23.443;
// let  c  = 20033.393;

// console.log(a);
// console.log(c);


//null
// let a =  null;
//  let  b = null
// console.log(a);
// console.log(b);

//Bool type
//  let  isLogin =   false;
//  let   isBatteryCharged = true;
 
//  console.log(isLogin);
//  console.log(isBatteryCharged);

//Bigint
//  let  a = 122393374447448484383;
//  let b= 37448439202393393333383837483787729;

//  console.log(a);
//  console.log(b);

//undifined
//  let  x ;
//  let  y  ;
//    console.log(x);
//    console.log(y);

//Object 
 
// const Laptop = {
//     name : "Mi NoteBook Ultra",
//     color : "Silver",
//     screenSize : 15.6,
//      price : 60000.500,
// }

//  console.log(Laptop);
//--------------------------------
// let Car = new Object({
     
//     name : "Scorpio N",
//     color : "Black",
//     price : "1200k",
//     isLoan : true

// });

// console.log(Car);
//---------------------------------

// let Pen = {};
// Pen.name   = "cello";
// Pen.price = 10;
// Pen.color = "red";
// console.log(Pen);
//-------------------------------
//nested object 
// let  Bike = {
//       color : "Black",
//       price : 12222,
//       isNew : false,
//       Cycle : {
//         name :" super",
//          type : "ranger"
//       }
// }

// console.log(Bike);
//---------------------------------
//object methods 
//this keyword 
//--------------------------------
 
// const  myData= {
//     name : "Ravi",
//     age : 22,
//     isCorrect : true,
//      myBook : function(){
//          return this.name  +" "+ this.age;
//      }
// };

// let  result = myData.myBook();
// console.log(result);
// console.log(myData);

// let Company = {
//    name : "toxsl",
//    location : "Mohali",
//     employee : function(){
//         return (this.name + " " + this.location).toLocaleUpperCase;
//     }
//  }

//  let  result =  Company;
//   console.log(result.employee());


// let  fruit = {
//     name : "Orange",
//     price : 120,
//     fruitPro :  function(){
//          return (this.name + " " + this.price);
//     }
// }


// console.log(fruit);
// console.log(fruit.fruitPro());
//---------------------------------------

// let planet = {
//     name : "Earth",
//     radius : "15000 km",
//     orbit : "sun",
//     isAtomshphare : true,
// }

// let  result  =  planet;
//  console.log(result);
//-------------------------------------------
//array to String
// let Car = ["name" ,"price","color"];

// let  result  = Car;
//  console.log(result);
//-------------------------------------------------
//object create new keyword
// let  userData = new Object({   //new keyword 
//      name : "ravi kumar",
//      age : 23,
//      id : 2
// });
// //object value  access  method 
// //dot  method  access

// userData.name = "Vinay Kumar"   //changing properties in object 

// console.log(userData.name);
// console.log(userData.age);
// console.log(userData.id);
// //bracket notation access
// console.log(userData["name"]);
// console.log(userData["age"]);
// console.log(userData["id"]);
//-----------------------------------

//display object method
// properties access with septrete string
// let Person = {
      
//      name : "jp",
//      age : 22,
//      id : 123,
//      height : `5.5'`,
// }

// let  result = Person.name + "," +Person.age + "," + Person.id+ "," +Person.height;
// console.log(result);

// with for  in  loop 

// let myCollage = {
  
//     name  : "Jm coolage kaimur BR",
//     estd : 1956,
//     type : "Half Govt."
// }

// for(let collage in myCollage){
//   console.log(collage);   //key print
//   console.log(myCollage[collage]);  //value print
//   console.log(collage + "," + myCollage[collage]);
// }


// const user = {
//   name: "Jyoti",
//   age: 22,
//   city: "Delhi"
// };

// // for (let key in user) {
// //   console.log(key);        // key print
// //   console.log(user[key]);  // value print
// // }
// //best  formate 
// for (let key in user) {
//   console.log(key + " : " + user[key]);
// }

// let  myPhone = {
//       name : "Vivo",
//       color : "Black",
//       price : 25000,
//       weight  : 700 + "gm"
// }

// for(key in myPhone){
//   console.log(key + " : " + myPhone[key]);  //best practice
// }

// let myLocation   = {
//       name : "Mohali",
//       pin: 123345,
//       nearby : "Shiva Temple"
// }

// for(location in myLocation){
//    console.log(location + " : " + myLocation[location]);
// }

// const humanData = {
//      height : "6.5 inch",
//      origin :  "Monkey",
//      planet : "Earth",
//      numberOfFinger : 20,
// }
// for(key in humanData){
//   console.log(key  + " : " + humanData[key]);
// }


//----------------------------------------------------
//using object.values()
// let  myBook =  {
//   name : "Freemind",
//   numberOfPages : 184,
//   page : "premmium",
//   isFull : false,
// }

// //  const note  = Object.values(myBook);
// //   const result =  note.toString();
// //   console.log(result);
//   for(let key in  myBook){
//     console.log(key + " : " + myBook[key]);
//   }

// let myDay = {
//    name : "My days",
//    noOfday : 7,
//    offDay : "Saturday ,Sunday"
// }


// let day  = Object.values(myDay);
// let  result = day.toString();
//  console.log(result);
//----------------------------------------------------
//using object.entries()

//  const myColors =  {
//     name :  "White",
//     primeColor : "RYB"
//  }

//     const  color = Object.entries(myColors);
//      const  result  =  color.toString();
//     console.log(result);
//------------------------------------------------------
//JSON.stringify()

// const  myCity = {
//     name : "Mohali",
//      pin : 234445,
//      nearBy : "chandigargh",
//      }
   
//      const  result  = JSON.stringify(myCity);
//      console.log(result);

// const  student =  {
//    name : "Ravi Kumar",
//    age : 23,
//    education : "B.tech in E&C",
//    cgpa : "7.6"
// }

//  const studentResult  =  JSON.stringify(student);
//  console.log(studentResult);









































