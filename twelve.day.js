// 04-05-2026
// Error in js

// try{
// let  res = x+20;
//  console.log(res);
// }catch(error){
//  console.log("Some error");
//  console.log(error.message);
// }

// try{
//   let x= 10;
//   console.log("try block execute");
// }catch(error){
//     console.log("something went  wrong!");
//     console.log(error.message);
// }finally{
//      console.log("always  execute");
// }

// let   age = 15;
//  try{
//   if(age<18){
//    throw "Not  elligible  for voting";
//   }
//   console.log("Elligble ");
//  }catch(e){
//     console.log(e);
//     console.log("something  went    wrong-----");
//  }

// try{
//  console.log(myName);
// }catch(e){
//     console.log("errror  cought" ,e.message);
// }

// try{
//   let name = myname();
//   console.log("try block!");
// }catch(e){
//    console.log("error cought! " ,e.message);
// }

// try{
//  let x= 2;
//   console.log(x);
//  console.log("try  block   execute");
// }catch(e){
//    console.log("error cought!" , e.measage);
// }finally{
//     console.log("always execute!");
// }

// try{
//     //risky  code
//     console.log("try  block  execute!");
// }catch(e){
//     // Error catch
//    console.log("catch block",e.message);

// }finally{
//     //always  execute
//     console.log("always execute!");
// }

// async in js
// console.log("Start");

// for (let i = 0; i < 1e9; i++) {
//   // console.log(i);
// } // heavy task

// console.log("End");

// function sequence  in js
// function hello(){
//     console.log("hello----------");
// }

// function  goodMorning(){
//      console.log("good morning============");
// }

// function  howRU(){
//      console.log("How  Are  you!");
// }

// function fine(){
//      console.log("yes, I am  fine !=======");
// }

// hello();
// goodMorning();
// howRU();
// fine();

// function A() {
//   console.log("print A");
// }

// function B() {
//   console.log("print B");
// }

// setTimeout(function C() {
//   console.log("Print C");
// }, 2000);

// function D() {
//   console.log(" print D");
// }

// A();
// B();
// D();

// function hello(){
//      console.log("hello");
// }

//  setTimeout( function name(){
//      console.log("Jp!");
//  },2000);

//  hello();

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("get data-------");
//   }, 2000);
// }

// fetchData((data)=>{
//     console.log(data);
// });

// let result;

// setTimeout(function() {
//   result = 5;
//     console.log(result);
// }, 2000);

// function helloJp(){
//     console.log("hello jp! How  Are U?");
// }

// setTimeout(helloJp,2000);

// function myFun() {
//   console.log("tuday  is  Monday!");
// }

// setTimeout(myFun, 2000);

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// let a = 20;
// let b = 30;

// add(a, b);

// function hello() {
//   console.log("hello jp... this  is   hello   function!");
// }

// hello();

//  let myFun = function (){
//      console.log("This is my   function....");
//  }

//  myFun();

// function add(a,b){
//      console.log(a+b);
// }

// let num1 = 20;
// let num2 = 40;

// add(num1,num2);

// function mainFunction(callback) {
//   console.log("main function  is   work!");
//   callback();
// }

// function helloFun(){
//      console.log("this   is  hello   funtion call..........");
// }

// mainFunction(helloFun);

// function myFunction(callback1, callback2) {
//   console.log("myFunction work!");
//   callback1();
//   callback2();
// }

// function myCallBack1() {
//   console.log("this  is  my  callback function1 .....");
// }
// function myCallBack2() {
//   console.log("this  is  my  callback function2 😂 ------");
// }

// myFunction(myCallBack1,myCallBack2);

// callback hell  example in js
// function step1(callbak) {
//   setTimeout(() => {
//     console.log("step1 complite!......");
//     callbak();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("step2  complite!........");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("setp3 complite----");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("all  step done");
//     });
//   });
// });

// function useData1(callback){
//   setTimeout(()=>{
//       console.log("Userdata1.....");
//     callback();
//   },1000

//   );
// }

// function userData2(callback){
// setTimeout(()=>{
//        console.log("userData2....");
//    callback();
// },1000);

// }
//  function userData3(callback){
//   setTimeout(()=>{
//      console.log("userdta3.....");
//    callback();
//   },1000);
//  }

//  function userData4(callback){
//    setTimeout(()=>{
//      console.log("userdata4......");
//  callback();
//    },1000);
//  }

//  function userData5(callback){
//    setTimeout(()=>{
//         console.log("userData5...");
//      callback();
//    },1000);
//  }

//  useData1(()=>{
//     userData2(()=>{
//         userData3(()=>{
//             userData4(()=>{
//                  userData5(()=>{
//                     console.log("all user complited ✅");
//                  });
//             });
//         });
//     });
//  });

// callback hell  solution  in js
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 complete");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 complete");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 complete");
//     callback();
//   }, 1000);
// }

// // Callback Hell
// // step1(() => {
// //   step2(() => {
// //     step3(() => {
// //       console.log("All steps done");
// //     });
// //   });
// // });

// // named function  experation
// function allDone() {
//   console.log("All steps done");
// }

// function step3Handler() {
//   step3(allDone);
// }

// function step2Handler() {
//   step2(step3Handler);
// }

// step1(step2Handler);

// simple   call back    funtion
// function orderPizza(callback){

//     setTimeout(()=>{
//          console.log("Pizza is   ready.....");
//      callback();
//     },2000);

// }

// orderPizza(()=>{
//     console.log("Eat pizzaa...");
// });

// callback hell in  js
// function orderPizza(callback) {
//   setTimeout(() => {
//     console.log("pizaa  is  ready ...");
//     callback();
//   }, 1000);
// }

// function orderBread(callback) {
//   setTimeout(() => {
//     console.log("bread  is  ready ...");
//     callback();
//   }, 1000);
// }

// function orderPasta(callback) {
//   setTimeout(() => {
//     console.log("pasta is  ready ...");
//     callback();
//   }, 1000);
// }

// function orderSweet(callback) {
//   setTimeout(() => {
//     console.log("Sweet  is  ready ...");
//     callback();
//   }, 1000);
// }

// // callback hell
// orderBread(() => {
//   orderPasta(() => {
//     orderPizza(() => {
//       orderSweet(() => {
//         console.log("all  order complited.....✅");
//       });
//     });
//   });
// });

//Promises  in js
// function orderPizza() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Piza is  ready-----");
//       resolve();
//     }, 1000);
//   });
// }

// function orderBread() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Bread is  ready----");
//       resolve();
//     }, 1000);
//   });
// }

// function orderPasta() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("pasta  is  ready-----");
//       resolve();
//     }, 1000);
//   });
// }

// function orderSweet() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Sweet is  ready------");
//       resolve();
//     }, 1000);
//   });
// }

// orderPizza()
//   .then(() => orderBread())
//   .then(() => orderPasta())
//   .then(() => orderSweet())
//   .then(() => console.log("all  order done-----✔️"))
//   .catch((error) => console.log("Some error" + error));

//promise  exmample
// function orderPizza() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pizza Order------😎");
//     }, 2000);
//   });
// }

// function orderColdDrink() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Cold  drink Order------😍");
//     }, 1000);
//   });
// }
//    // Promise  in js
// // orderPizza()
// //   .then((pizaa) => {
// //     console.log(pizaa);
// //     return orderColdDrink();
// //   })
// //   .then((drink) => {
// //     console.log(drink);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // promise   some   issue  resolve    async   await
// //  async  and   awiat    is   odern way   to  call    callback function in js

// async function getOrder() {
//   try {
//     let pizza = await orderPizza();
//     console.log(pizza);
//     let coldrink = await orderColdDrink();
//     console.log(coldrink);
//   } catch (err) {
//     console.log("Some error-----", err.message);
//   }
// }

// getOrder();

// function workOut() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("WorkOut--------------------------------");
//     }, 1000);
//   });
// }

// function eat() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Eat------------------------------------");
//     }, 1000);
//   });
// }

// function market() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("go to market---------------------------");
//     }, 1000);
//   });
// }

// function read() {
//   return new Promise((resolve) => {
//     resolve("Read  4 hours  , 10 pm  to   2am-------");
//   }, 1000);
// }

// async function routine() {
//   try {
//     let myWorkOut = await workOut();
//     console.log(myWorkOut);
//     let myEat = await eat();
//     console.log(myEat);
//     let myMarket = await market();
//     console.log(myMarket);
//     let myRead = await read();
//     console.log(myRead);
//   } catch (err) {
//     console.log("something went wrong-----", err);
//   }
// }

// routine();

// function myLaptap() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("This is  my laptop--------------💻");
//     }, 1000);
//   });
// }

// function myPhone() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("This is  my  phone--------------📱");
//     }, 1000);
//   });
// }

// function myCharger() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("This  is   my phone charger------");
//     }, 1000);
//   });
// }

// function myEarBuds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("This  is  my    white earbuds-----");
//     }, 1000);
//   });
// }

// async function myObj() {
//   try {
//     let laptop = await myLaptap();
//     console.log(laptop);
//     let phone = await myPhone();
//     console.log(phone);
//     let charger = await myCharger();
//     console.log(charger);
//     let earbuds = await myEarBuds();
//     console.log(earbuds);
//   } catch (err) {
//     console.log("SomeThing went wrong!", err);
//   }
// }

// myObj();


