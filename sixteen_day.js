// 08-05-2026
// let  my_array = [7, 12, 9, 4, 11];
//  find   lowest
//  let    lowest  = Math.min(...my_array);
//   console.log(lowest);
//   let  highest  =  Math.max(...my_array);
//    console.log(highest);

//  let min =  my_array[0];
//   for(let  i= 1;i<my_array.length;i++){
//      if(my_array[i]<min){
//      min = my_array[i];
//      }
//   }

//   console.log(min);

// carName = "Volvo";
//  console.log(carName);
// var carName;

// greet(); // Works! Output: "Hello!"
// function greet() { console.log("Hello!"); }

// hello();
//  function hello(){console.log("hello  jp...")}
//    let    hours = 18;
//     if ( hours <19) {
//   greeting = "Good day";
//   console.log(greeting);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     //    break;
//     continue;
//   }
//   console.log(i);
// }

// function   hello(){
//      console.log("hello1");
//      console.log("hello2");
//      console.log("hello3");
//      console.log("hello4");
//      console.log("hello5");
//      console.log("hello6");
//       return 'all   done!'
//      console.log("hell7");
//      console.log("hello8");

// }

//  hello();

// function  mlt(a,b){
//      console.log(2*(a*b));
//    return 'done';
// }

//  let  res  = mlt(13,4);
//   console.log(res);

// function allNUmbers() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// allNUmbers(12, 44, 36, 44, 3, 3, 5, 5, 7, 8, 87, 7, 7);

// function allNUmbers() {
//     let  sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//    sum += arguments[i];
//   }
//    return  sum;
// }

//   console.log(allNUmbers(12, 44,5,7,87,90,7));

// formEntries  method  in   object  in    js
// const myData = [
//   ["name", "jp"],
//   ["age", 22],
//   ["Id", 123],
// ];

// let res = Object.fromEntries(myData);
// console.log(res);

// assign  method  in   Object in  js
// const userData = {
//   name: "ravi kumar",
//   age: 23,
//   lovation: "Mohali",
//   mob: "1234567890",
// };

// let res = Object.create(userData);
// res.name  =  'suman kumari'
// console.log(res);

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Create Source Object
// const person2 = {firstName: "Anne",lastName: "Smith"};

// // Assign Source to Target
//  let   res  = Object.assign(person1, person2);
//   console.log(res);

// const userData1 = {
//   name: "Ankit  kumar",
//   age: 22,
//   location: "mohali",
//   id: 123,
// };

// const userData2 = {
//   name: "vikram  kumar",
//   age: 25,
//   location: "chandigarh",
//   id: 14,
// };

// let res = Object.assign(userData1, userData2);
// console.log(res);

// let  user =  {
//     fname :  "j",
//     lname :  "p",
//     age : 22,
//     id : 123,
//     fullname : function (){
//         return this.fname + "" + this.lname;
//     }

// }

//     console.log( user.fullname());

// call()   method   use  in  Object in  js
// let  user1 =  {
//     fullname : function (){
//         return this.fname + " " + this.lname;
//     }
// }

//   const   user2 = {
//     fname : "ravi",
//     lname : "kumar",
//   }

//     let   res = user1.fullname.call(user2);
//       console.log(res);

// const myData1 = {
//   fullName: function () {
//     return this.firstName + " " + " " + this.middleName + " " + this.lastName;
//   },
// };

//  const   myData2 =  {
//     firstName :  "Deepak",
//     middleName :  "Kumar",
//     lastName :   "Singh"
//  }

//   console.log( myData1.fullName.call(myData2));

// bind()   method in   js
//  const   myData =  {
//         firstName :  "Deepak",
//     middleName :  "Kumar",
//     lastName :   "Singh",
//    fullName: function () {
//     return this.firstName + " " + " " + this.middleName + " " + this.lastName;
//   },
//     isLaptop :true,
//  }

// const  otherUser =  {
//        firstName :  "ravi",
//     middleName :  "singh",
//     lastName :   "Ravat",
//        location : "Mohali",
//     id :  123,
//     mob :  12234567890,
// }

// let   fullName  =  myData.fullName.bind(otherUser);
//   console.log(fullName());

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);
//      console.log(fullName());

// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

// let text = Object.values(person);
//  console.log(text);

// const fruits = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500]
// ];

// const myObj = Object.fromEntries(fruits);
//  console.log(myObj);

// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

//  for(key in  person){
//       console.log(key);
//  }

//  get Keyword  in   js
//  const   myData =   {
//    firname :  "Ravi",
//    lastname :  "kumar",
//       get   fullName(){                       //  get    keyword  in js
//          return   this.firname +  " " +  this.lastname;
//       }
//  }

//    console.log(myData.fullName);

// const user = {
//   name: "",

//   set setName(value) {
//     return (this.name = value);
//   },
// };

// user.setName =  "j prakash";
//  console.log(user.name);

// const myData = {
//   fName: "jyoti",
//   lName: "prakash",
//    get fullName(){
//         return this.fName + " " + this.lName;
//     },

//     set fullName(value){
//         const   part =  value.split(' ');
//         this.fName =  part[0];
//         this.lName =  part[1];

//     }
// };

// // getter
//  console.log(myData.fullName);

//  // setter
//  myData.fullName =  "ravi ravat";
//    console.log(myData.fName);
//    console.log(myData.lName);

// Create an Object
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "EN"
// };

// // Get all Properties
// console.log(Object.getOwnPropertyNames(person));
//  console.log(person);

// Create an Object
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "EN"
// };

// // Change the "language" Property
// Object.defineProperty(person, "language", {enumerable:false});

// // Get all Enumerable Properties
// console.log(Object.keys(person));

// Object Protection in js
// const user = {
//   name: "sandip  kuamar",
//   age: 22,
//   location: "Mohali",
// };

// user.name = "Ravi kumar";
// delete user.age;

//Object.freeze()    method   in js
// const user = {
//   name: "sandip  kuamar",
//   age: 22,
//   location: "Mohali",
// };

// Object.freeze(user)
// user.name = "Ravi kumar"; //  no any  update
// delete user.age;
//  console.log(user);

//seal() method
// const userData = {
//   name: "himesh  kuamar",
//   age: 12,
//   id: 123,
//   mob: "1234567890",
//   location: "Mohali",
// };

// Object.seal(userData);
// userData.name = "kundan kumar";
// userData.house = 105; // not   add  because  not  exist
// userData.age = 22; // upadete age
// delete userData.mob; // not  delite
// console.log(userData);

//preventExtensions() method
// const userData = {
//   name: "himesh  kuamar",
//   age: 12,
//   id: 123,
//   mob: "1234567890",
//   location: "Mohali",
// };

// Object.preventExtensions(userData);
// userData.name =  'ashish kumar';
// userData.age =  22;
// delete userData.mob;
// console.log(userData);

//Object.defineProperty() in js
// const user = {};

// Object.defineProperty(user, "name", {
//   value: "JP",
//   writable: false,   //  not change
//   configurable: false, //   not delete
//   enumerable: true
// });

// user.name = "Rahul"; // not
// delete user.name;    //  not
//  console.log(user);

//  smart  protection   with the  help  of    getter   and   setter     in  js
// const user = {
//   _age: 0,

//   get age() {
//     return this._age;
//   },

//   set age(value) {
//     if (value < 0) {
//       console.log("Invalid✖️");
//       return;
//     }
//     this._age =  value;
//   },
// };

// user.age =  -2;
//  console.log(user);

// const userData = {
//   _age: 0,

//   get age() {
//     return this._age;
//   },

//   set age(value) {
//     if (value < 0) {
//       console.log("invalid   value ❎");
//       return;
//     }
//     return (this._age = value);
//   },
// };

// userData.age = -20;
// userData.age = 30;

//  prototype  =  Inheritence system
// const person = {
//   greet() {
//     console.log("hello jp...!");
//   },
// };

// const user = Object.create(person);
// user.greet(); // hello jp  in  herite    from   person

// Prototype Chain  in  js
// const animal = {
//   eat: true,
// };

// const dog = Object.create(animal);
// dog.bark  =  true;
// dog.run =   true;
// console.log("eat.... " +dog.eat);
// console.log("bark...." +dog.bark);
// console.log("run.... " +dog.run);

// function myData(name, age, id, mob) {
//   this.name = name;
//   this.age = age;
//   this.id = id;
//   this.mob = mob;
// }

// let res = new  myData("jp", 12, 123, 1223467);
// console.log(res);

//  function dataUser(name,age,idNumber){
//     this.name =  name;
//     this.age = age;
//     this.idNumber = idNumber;

//  }

//   let      res  = new   dataUser('ravi kumar',33,12);
//    console.log(res);

// function  user(name){
//    this.name  =  name;
// }
// user.prototype.sayHi =  function(){
//      console.log(this.name);
// }

// const  u1 = new  user("jp");
// u1.sayHi();

//  contructor  function +   prototype
//  function  unknownUser(name,age,mob){
//   this.name = name;
//   this.age =  age;
//   this.mob =  mob;
//  }

//  unknownUser.prototype.display =   function(){
//      console.log(this.name);
//      console.log(this.age);
//      console.log(this.mob);
//  }

//  const   res = new unknownUser('aman kumar',12,1234678899);
//   res.display();

// function person(fname, lname, age, eyeColor) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.eyeColor = eyeColor;
// }

// const p1 = new person("adi", "kumar", 22, "blue");
// const p2 = new person("rav", "kumar", 32, "black");
// const p3 = new person("adi", "kumar", 32, "brown");
// const p4 = new person("raman", "kumar", 22, "blue");
// const p5 = new person("sumit", "kumar", 24, "blue");
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);
// console.log(p5);

// const user = new Set(["12", "3", "4", "6", "1", "1"]);
// const user2 = ["12", "3", "4", "6", "1", "1"];
// console.log(user);
// console.log(user2);

// const user = new Set(["12", "3", "4", "6", "1", "1"]);
// user.add("123");
//  console.log(user);

// const   mySet =  new Set();

// const  a =  "a";
// const  b =  "b";
// const  c =  "c";
// const  d =  "d";

//  console.log(mySet.add(a));
//  console.log(mySet.add(b));
//  console.log(mySet.add(c));
//  console.log(mySet.add(d));


const  user = {
    name : "jp",
    age  :  22,
     id :  123,

}


 let   res = user = null;
 console.log(res);







