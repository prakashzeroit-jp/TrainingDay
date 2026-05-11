//11-05-2026
// Hold  day
//calback    traditional  method
// function fetchData(callback) {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// function  hello(){
//      console.log('hello....');
// }

// fetchData(hello);

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise   resolve");
      console.log("all  done....");
    }, 2000);
  });
}

// fetchData()
//   .then((done) => {
//     console.log(done);
//     console.log("all  doen!");
//   })
//   .catch((err) => {
//     console.log("some  errror", err);
//   });

// async function display() {
//   try {
//     let result = await fetchData();
//     console.log(result);
//   } catch (err) {
//     console.log("Something  went  wrong!", err);
//   }
// }

// display();

// const fs =  require('fs');
// fs.writeFileSync('hell.txt','helo  jp');

// const   check =  function(){
//      console.log("thiis  is  check...");
// }

// module.exports = check

//Node.js Architecture
//Node.js uses a single-threaded, event-driven architecture that is designed to handle
//  many connections at once, efficiently and without blocking the main thread
//non blocking   example

//  console.log("1");
//   const  fs =   require('fs');
//   fs.writeFile("jp.txt","hello    jp  how  are    you..",(error,resolve)=>{
//    console.log(resolve);
//    return 'done';
//   });

//    console.log("2");
//    console.log("3");

//CRUD   operation  with   file system  in    node.js

// const fs = require("fs");

// // fs.writeFileSync("my.txt","hello jp, how  are  you...");  //write   file

// // fs.unlinkSync("my.txt");                                  //  delite  file

// //  const data =   fs.readFileSync("my.txt","utf-8");     // read  file
// //   console.log(data);

// fs.appendFileSync(                                       // update  file
//   "my.txt",
//   "Whether you go by your initials or just like the short, punchy vibe of your name, JP carries a lot of energy. It’s a name that sounds both professional and approachable, making it easy for people to remember. Usually, a name like JP suggests someone who is efficient, direct, and perhaps a bit of a ",
// );

// const  myTimer =  setTimeout(()=>{
//    console.log("hello   this  is myTime...");
// },2000);
//  function hello(){
//   setTimeout(()=>{
//      console.log("hello...");
//   },2000);
//  }
//  hello();

// let  count = 0;
// let  timer =  setTimeout(()=>{
//   count++;
//   console.log("hello jp....",count);
// },2000);

// let count = 0;
// let interval = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 5) {
//     clearInterval(interval);
//     console.log("break  the   interval...");
//   }
// },1000);
x=[1]
y=[1]
console.log(x==y);
// console.log([] === []);
// let arr1;
// let arr2 ;
// console.log(arr1 == arr2);

// for (var i = 0; i < 10; i++) {
//  setTimeout(() => console.log(i),2000);
// //  console.log(i);
// }
