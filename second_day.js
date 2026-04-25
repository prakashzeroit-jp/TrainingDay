

//Object  constructor
//--------------------------------------
// function Phone(name, price,colour,weight){  //Object  constructor
//     this.name = name;
//     this.price = price;
//     this.colour =  colour;
//     this.weight =  weight;
// }

//  let   myPhone = new Phone("Vivo 1933",25000,"black",700);   //object
//  let   raviPhone =  new Phone('Samsung' ,22222,"purple",400); 
//  let   deepakPhone = new Phone('Oppo',10000,'blue',450);
//  let   rahulPhone =  new Phone('iphone',120000,'silver',600);
//  let   princePhone  = new  Phone('realme',22222,'white',370);
//  let   abhiPhone =  new Phone('Tecno',20000,'red',340);

//  console.log(myPhone);
//  console.log(raviPhone);
//  console.log(deepakPhone);
//  console.log(rahulPhone);
//  console.log(princePhone);
//  console.log(abhiPhone);

 

// function Bottle(name,color,height){  //object  constructor
//    this.name = name;
//    this.color = color;
//    this.height =  height;
// }

// let hariBottle =  new Bottle('cello','red',12.5);        //object
// let souBottle =  new Bottle('nobrand','brown',11.5);
// let akBottle =   new  Bottle('shiny','green',10.5);
// let rvBottle  =  new  Bottle('DK','white',10.6);

// console.log(hariBottle);
// console.log(souBottle);
// console.log(akBottle);
// console.log(rvBottle);

// function Bike(name,color,price,owner) {
// this.name =  name;
//  this.color = color;
//  this.price = price;
//  this.owner =  owner;
// }

  

//  const rjBike =  new  Bike("Honda","black",12345,'rj');
//  const gvBike = new Bike('royel Enfield','blue',200000,'gv');
//  const kkBike = new Bike('Hero','red',2000,'kundan kumar');

//  console.log(rjBike);
//  console.log(gvBike);
//  console.log(kkBike);

//---------------------------------------------

//advance js object
//Object Literal defination :- An object literal is a list of property key:values inside curly braces { }.

//this is  simple   object  
//  const  Laptop = {
//    name  : "Mi Notebook ultra",
//    color : "Silver",
//    price : 5000,
//  }

//  console.log(Laptop);

//using this kyeword to crate  object 
 
// let Book  = new Object({
//      name : "AV book",
//      page : 123,
//      price : 20
// });

// const result  = Book;
//  console.log(result);

// const car = new Object({
//       name : "Safari",
//       price : 20000000,
//       color : "White",
//       isSunRoof : true
// });
// console.log(car);

//object.create() method  defn :-  Create new  object of Exisiting object 
//----------------------------------------------------
//  let  student = {
//    name : "ravi kumar",
//    age : 22,
//    id : 233,
//    location : "Mohali"
//  }

//  let myStudent = Object.create(student);
//  student.name = "deepak kumar"
//  console.log(myStudent.name);
 
// const mouse = {
//     name : "Dell",
//     color : "Black",
//     price : "350₹"
// }

// const myMouse = Object.create(mouse);
// myMouse.price =  "430₹";
//  console.log(myMouse);

//  const  phone  = [
//  ["apples", 300],
// ["pears", 900],
// ["bananas", 500]
//  ];
//Object.fromEntries() method
//---------------------------------------------
// console.log(phone);
//   const result  = Object.fromEntries(phone);
//   console.log(result);

// const bike =  [
//     ['name' , 'Hunter' ],
//     ['milage' , 42],
//     ['price' ,2363633]
// ];

//    const  myBike  = Object.fromEntries(bike);
//    console.log(myBike);
    
// const planet = [
//   ['name' , "Earth"],
//   [ 'orbit', "sun" ],
//   ['galexy' ,"milkyway"],
//   ['radius','150000k km']
// ];
 
// const  myPlanet = Object.fromEntries(planet);
//  console.log(myPlanet);

// Object.assign();

// const bike1 = {
//      name : "shine  Honda",
//      color : "Black",
//      price : 30000,
// }

//    const bike2  = {
//      name : "Appache",
//      color : "Red"
//    }

//    const result  = Object.assign(bike1,bike2);
//    console.log(result);

//this in an Object Method 
//------------------------------------
// const myAssets = {
//    name : "Laptop",
//    price : 200000,
//     color : "Silver",
//     save : function (){
//     return this.name + " , "  + this.price + " , " + this.color
//     }
// }

//  const  result  = myAssets;
//  console.log(result.save());

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
//  console.log(fullName);

//-------------------------------------------------
//array   in   js 
// const name  = ['ravi', 'deepak' ,'suman' ,'kundan','nitin'];
// console.log(name);

// const laptop =  [];
//  laptop[0] = 'dell';
//  laptop[1] = 'apple';
//  laptop[2] = 'lenvo';
//  laptop[3] = 'MI';
//  laptop[4] = 'Hp';
//  laptop[5] = 'accer';

//  console.log(laptop);

//create array  using  new keyword

// const myData = new Array('phone','laptop','mouse','paper','pen','bottle','earphone');
//   console.log(myData);

// const    phone  = new Array('vivo','redmi','realme','oppo','samsang','apple');
//  console.log(phone);
   
// const  student = new Array('ak','aj','rk','jk','vk');
// console.log(student);

//Accessing Array Elements

//  const laptop = ['lenvo','Mi','dell','accer','hp','asus'];
//  const  result   =   laptop[3] + "," + laptop[1]  + ","  + laptop[0] + "," + laptop[2] ;
//  console.log(result);

//const color =  ['red', 'yello','blue','pink','oranage'];
// color[1] = 'darkBlue';
// color[3] = 'shineBlue'
//  console.log(color);

//Converting an   // and  more methode
// const myData = ['laptop','phone','earphone','mouse'];
// console.log(myData.toString());       //Array to a String
// console.log(myData.toReversed());    //Array to   reverse
// console.log(myData);                 //Access the Full Array

//Arrays are Objects
// const  bike = [10, 2, 100]
//  //console.log(bike);
//  //console.log(bike.length);  //Array Properties and Methods
//  console.log(bike.sort());

//const arr = [10, 2, 5];
// const arr = [1, 20, '3', 4];
// console.log(arr.sort());

// const arr = [5, undefined, 1];
// console.log(arr.sort());

// const arr = ['apple', ' cpple', 'banana'];
// console.log(arr.sort());




















































































