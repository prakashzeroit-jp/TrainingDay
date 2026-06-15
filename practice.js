// let mySet = new  Set([1,2,2,3,1,4,5]);

// console.log(mySet);

// let myMap = new Map([
//     ['name' ,'jp']

//     ]);

// console.log(myMap);

// function hello(callback){
//     setTimeout(()=>{
//         console.log('hello----------');
//         callback();
//     },2000);

// }

// function user(){
//     console.log('this is callback function');
// }

// hello(user);

// function myFun(callback){
//     setTimeout(()=>{
//         console.log('hello myFun------');
//          callback();
//     },3000);

// }

// function hello(){
//     console.log('this  is callback function....');
// }

// myFun();

// function sayHello(callback){
//     setTimeout(()=>{
//         console.log('say hello ----');
//      if(callback){
//         callback();
//      }else{
//          console.log('error...');
//      }
//     },3000);

// }

// function hello(){
//     console.log('this is callcack function call ');
// }

// sayHello(hello);

// function sayHello(callback){
//      setTimeout(()=>{
//          console.log('say hello call....');
//          callback();
//      },2000);

// }

// function hello(){
//     console.log('hello function call....');
// }

// sayHello(hello);

// function sayHello1(callback){
//      setTimeout(()=>{
//          console.log('say hello call....1');
//          callback();
//      },2000);
// }

// function sayHello2(callback){
//      setTimeout(()=>{
//          console.log('say hello call....2');
//          callback();
//      },1000);
// }

// function sayHello3(callback){
//      setTimeout(()=>{
//          console.log('say hello call....3');
//          callback();
//      },3000);
// }

// function res(){
//   sayHello1(()=>{
//       sayHello2(()=>{
//           sayHello3(()=>{
//               console.log('done');
//           });
//       });
//   });

// }

// res();

// function sayHello(callback){
//     setTimeout(()=>{
//         console.log('say  hello....');
//         callback();
//     },2000);

// }

// function jp(){
//     console.log('hello jp.....');

// }

// sayHello(jp);

function userFun1(callback) {
  setTimeout(() => {
    console.log("userFun1 call....");
    callback();
  }, 2000);
}

function userFun2(callback) {
  setTimeout(() => {
    console.log("userFun2 call....");
    callback();
  }, 1000);
}

function userFun3(callback) {
  setTimeout(() => {
    console.log("userFun3 call....");
    callback();
  }, 2000);
}

// function res(){
//     userFun1(()=>{
//         userFun2(()=>{
//             userFun3(()=>{
//                 console.log('all task done');
//             });
//         });
//     });

// }

// res();

// function user1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('user1 call..........');
//             resolve();
//         },2000);
//     });
// }

// function  user2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('user2 call..........');
//             resolve();
//         },1000);
//     });
// }

// function user3(){
//     return  new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('user3 call..........');
//             resolve();
//         },3000);
//     });
// }

// user1().then(()=>{
//     user2()
// }).then(()=>{
//     user3();
// }).catch(()=>{
//     console.log('some error.....');
// });

// function hello1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('hello1 call ....');
//             resolve();
//         },2000);
//     });
// }

// function hello2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('hello2 call ....');
//             resolve();
//         },1000);
//     });
// }

// function hello3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('hello3 call ....');
//             resolve();
//         },3000);
//     });
// }

// hello1().then(()=>{
//     hello2();
// }).then(()=>{
//     hello3();
// }).catch(()=>{
//     console.log('some error.....');
// });

// function myFun1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('myFun1 call....');
//             resolve();
//         },1000);
//     });
// }

// function myFun2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('myFun2 call....');
//             resolve();
//         },3000);
//     });
// }

// function myFun3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('myFun3 call....');
//             resolve();
//         },2000);
//     });
// }

// myFun1().then(()=>{
//   return myFun2();
// }).then(()=>{
//   return  myFun3();
// }).catch(()=>{
//     console.log('some error');
// });

//  async function hello1(){
//   setTimeout(()=>{
//         console.log('hello call1 ....');
//   },2000);
// }
//  async function hello2(){
//   setTimeout(()=>{
//         console.log('hello call2 ....');
//   },1000);
// }

//   async function hello3(){
//   setTimeout(()=>{
//         console.log('hello call3 ....');
//   },2000);
//   }

// async  function res(){
//     await  hello1();
//     await hello2();
//     await hello3();

// }

// res();

// async function hello(){
//     return 'hello  function....'
// }

// async function sayHello(){

//     let res = await hello();
//     console.log(res);
//     return;
// }
// sayHello();

// async function getData() {
//   return "Hello, Async!";
// }

// async function main() {
//   let result = await getData();
//   console.log(result);
// }

// main();

//callback

// function sayHello(callback){
//     setTimeout(()=>{
//         console.log('sayHello function call....');
//         callback();
//     },2000);

// }

// function hello(){
//     console.log('hello function  call..');

// }

// sayHello(hello);

//callback hell

// function sayHello1(callback){
//     setTimeout(()=>{
//         console.log('sayHello function call1....');
//         callback();
//     },2000);

// }

// function sayHello2(callback){
//     setTimeout(()=>{
//         console.log('sayHello function call2....');
//         callback();
//     },1000);

// }

// function sayHello3(callback){
//     setTimeout(()=>{
//         console.log('sayHello function call3....');
//         callback();
//     },3000);

// }

// function res(){
//     sayHello1(()=>{
//         sayHello2(()=>{
//             sayHello3(()=>{
//                 console.log('all done...');
//             });
//         });
//     });

// }

// res();

// promise

// function sayHello1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("sayHello call ...1");
//       resolve();
//     }, 2000);
//   });
// }

// function sayHello1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("sayHello call ...1");
//       resolve();
//     }, 2000);
//   });
// }

// function sayHello2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("sayHello call ...2");
//       resolve();
//     }, 1000);
//   });
// }

// function sayHello3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("sayHello call ...3");
//       resolve();
//     }, 3000);
//   });
// }

// sayHello1()
//   .then(() => {
//     return sayHello2();
//   })
//   .then(() => {
//     return sayHello3();
//   })
//   .catch(() => {
//     console.log("Some error");
//   });

// async function sayHello() {
//   return "sayHello function call...";
// }

// async function hello() {
//   let res = await sayHello();
//   console.log(res);
// }

// hello();

// const fs = require('fs');

// // 2. Create a file named 'hello.txt' with content inside it
// fs.writeFileSync('helloday.txt', 'Hello World!');

// console.log('File created successfully!');

// const fs = require('fs');
// console.log('Before file read');
// fs.readFile('myfiles.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('File contents:', data);
// });
// console.log('After file read');

//basic http server create

// const http = require('http');
//  const PORT = 8000;
// const server = http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type' : 'text/plain'});
//   res.end('Hello  jp!');
// });

// server.listen(PORT,()=>{
//     console.log(`Server run  at : http://localhost:${PORT}`);

// });

// const http = require("http");
// const PORT = 3000;
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("hello node.js=================");
// });

// server.listen(PORT, () => {
//   console.log(`Server run at http://localhost:${PORT}`);
// });

// const buffer = Buffer.from('hell jp');

// console.log(buffer);
// console.log(buffer.toString());

// buffer and stream

// const buffer = Buffer.from('hello abc');

// console.log(buffer);
// console.log(buffer.toString());

// const fs = require("fs");

// const stream = fs.createWriteStream("myfiles.txt", "utf-8");

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// const fs  =   require('fs');

// const stream = fs.createWriteStream('okfiles.txt','utf-8');

// stream.on('data',(chunk)=>{
//  console.log(chunk);

// });

// const buffer = Buffer.from("Only JP");

// console.log(buffer);
// console.log(buffer.toString());

// const fs = require("fs");

// const stream = fs.createWriteStream("ppt.txt", "utf-8");

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });
