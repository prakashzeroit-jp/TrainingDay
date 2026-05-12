//12-05-2026

// const { readFile } = require("fs");

// function a(){
//  console.log("this  is    a...");
// }

// function b(callback){
//      console.log("this  is b...");
//      if(typeof callback === "function"){
//      callback();
//      }
// }

// b(a);

// function a(callback) {
//   setTimeout(() => {
//     console.log("this  is  a...");
//     callback();
//   }, 2000);
// }
// function b(callback) {
//   setTimeout(() => {
//     console.log("this  is  b...");
//     callback();
//   }, 1000);
// }
// function c(callback) {
//   setTimeout(() => {
//     console.log("this  is  c...");
//     callback();
//   }, 1000);
// }

// a(() => {
//   b(() => {
//     c(() => {
//       console.log("all  done...");
//     });
//   });
// });

// function a(callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("this  is  a...");
//       resolve();
//     }, 2000);
//   });
// }

// function b(callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("this  is  b...");
//       resolve();
//     }, 1000);
//   });
// }

// function c(callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("this  is  c...");
//       resolve();
//     }, 1000);
//   });
// }

// a()
//   .then(() => {
//     b();
//   })
//   .then(() => {
//     c();
//   }).then(()=>{
//     console.log("all  done...");
//   })
//   .catch((err) => {

//     console.log("some issue....",err);
//   });

// async function result() {
//   try {
//     await a();
//     await b();
//     await c();
//     console.log("all  done...");
//   } catch (err) {
//     console.log("some  error....", err);
//   }
// }

// result();

// Synchronous File Read

// const fs = require("fs");

// fs.writeFileSync('hello.txt',"this  is   hello    text...");
// console.log("this  is 1..");
// const result = fs.readFileSync("hello.txt", "utf-8");
// console.log(result);
// console.log("this  is  2...");
// console.log("this  is  3...");

//Asynchronous File Read

// const  fs =   require('fs');

//  console.log("file 1 content...");

//  fs.writeFile('myhello2.txt',"this  my hello file",(err)=>{
//  if(err){
//  throw err;
//  }
//   console.log("this   is  hello2========");
//  });

//  console.log("file  3  content..");

// fs.readFile('myhello2.txt','utf-8',(err,data)=>{
//     if(err){
//       console.log('some error',err);
//       return;
//     }
//   console.log('read file...',data);
// });

// function hello(callback){
//  console.log("thsi  is    hello..");
//  callback();
// }

//  function myFunction(){
//      console.log("this  is  my  function..");
//  }
//  hello(myFunction);

// modern  async  pattern
//  promises

// const fs = require("fs").promises;

// fs.writeFile('myfile.txt','this  is  mywrite  file.......>>>');

// console.log("this  is 1 read  file...");
// fs.readFile("myfile.txt", "utf-8")
//   .then((data) => {
//     console.log("my file read 3", data);
//   })
//   .catch((err) => {
//     console.log("something  went wrong", err);
//   });

// console.log("this  is file 3");

// const fs = require("fs").promises;

// async function writeFile() {
//   try {
//     console.log("this   is  write   file 1...");
//    const  data1 = await fs.writeFile("hellojp1.txt", "hello jp1....");
//     const   data2 = await fs.writeFile("hellojp2.txt", "hello jp2....");
//      return {data1,data2};
//   } catch (err) {
//     console.log("some error", err);
//   }
// }

// writeFile();

// async function readFile() {
//   try {
//     console.log("start   read file..");
//     const data1 = await fs.readFile("hellojp1.txt", "utf-8");
//     const data2 = await fs.readFile("hellojp2.txt", "utf-8");
//      console.log('read file successfull...');
//     return { data1, data2 };
//   } catch (err) {
//     console.log("something   went  wrong", err);
//   }
// }

// readFile();

//basic   promises  syntex
// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("operation  successfull!");
//   } else {
//     reject("operation  failed");
//   }
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("process   successsfull...");
//   });

// const helloPromises = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("promices  resolve....");
//   } else {
//     reject("promisses   reject...");
//   }
// });

// helloPromises
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("all done...");
//   });

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("promise  resolve....");
//   } else {
//     reject("promise reject....");
//   }
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("promise  done....");
//   });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success =  Math.random() > 0.05;
//     if (success) {
//       resolve("promise   resolve...");
//     } else {
//       console.log("promise  reject...");
//     }
//   }, 1000);
// });

// myPromise
// .then((result)=>{
//    console.log(result);
// })
// .catch((err)=>{
//    console.log(err);
// })
// .finally(()=>{
//     console.log("promise   done!");
// });

// async function getData() {
//   console.log("staring...");
//   const result = await someasyncOperation();
//   console.log(`result : ${result}`);
//   return result;
// }

// function  someasyncOperation(){
//     return  new  Promise((resolve)=>{
//      setTimeout(()=>{
//         resolve('operation   successfull...');
//      },1000);
//     });
// }

// getData()
// .then((done)=>{
//    console.log(done);
// })
// .catch((error)=>{
//     console.log('some  error...',error);
// })
// .finally(()=>[
//      console.log('all    done...')
// ])

// async function fetchData() {

//   try {
//     const response = await fetch(
//      'https://jsonplaceholder.typicode.com/posts/1'
//     );

//     if (!response.ok) {
//       throw new Error(`some  error ... ${response.status}`);

//     }
//      const data =await response.json();
//       console.log(data);
//   } catch (error) {
//     console.log(`fetch  failed ${error.message}`);
//   }
// }

// fetchData();

// async function myData() {
//   try {
//     const response = await fetch(
//       "https://dummyjson.com/quotes",
//     );
//     if (!response.ok) {
//       throw new Error(`http  error ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('result',data);
//   } catch (error) {
//     console.log(`fetch data  error ${error.message}`);
//   }
// }

// myData();

// async function fetchQuotes() {
//   try {
//     const response = await fetch("https://dummyjson.com/quotes");
//     if (!response.ok) {
//       throw new Error("some  issue", response.status);
//     }

//     const data =await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("some  error", err.message);
//   }
// }

//  fetchQuotes();

// 1.
// async function fetchProduct() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     if (!response.ok) {
//       throw new Error("some  error", response.status);
//     }

//     const done =  await response.json();
//     console.log(done);
//   } catch (error) {
//     console.log("some error", error.message);
//   }
// }

// fetchProduct();

//2.
// async  function fetchUser(){
//    try{
//   const  response =  await  fetch('https://dummyjson.com/users');
//      if(!response.ok){
//        throw new Error("some  error",response.status);

//      }
//      const   done  = await response.json();
//      console.log(done);
//    }catch(error){
//   console.log('some error',error.message);
//    }
// }

// fetchUser();

//3.

// async function fetchComments() {
//   try {
//     const response = await fetch("https://dummyjson.com/comments");
//     if (!response.ok) {
//       throw new Error("some  issue", response.status);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("some  error", error.message);
//   }
// }

// fetchComments();

//4.
// async function fetchTodos() {
//   try {
//     const response = await fetch("https://dummyjson.com/todos");
//     if (!response.ok) {
//       throw new Error("http error", response.status);
//     }

//     const done = await response.json();
//     console.log(done);
//   } catch (error) {
//     console.log("something  went  wrong...", error.message);
//   }
// }

// fetchTodos();

//5.
// async function fetchCarts() {
//   try {
//     const response = await fetch("https://dummyjson.com/carts");
//     if (!response.ok) {
//       throw new Error("HTTP error", response.status);
//     }
//     const done = await response.json();
//     console.log(done);
//   } catch (error) {
//     console.log("some error", error.message);
//   }
// }

// fetchCarts();

//6.
// async function fetchPosts() {
//   try {
//     const response = await fetch("https://dummyjson.com/posts");
//     if (!response.ok) {
//       throw new Error("some HTTPP   error", response.status);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("some error", error.message);
//   }
// }

// fetchPosts();

//7.
// async  function  fetchQuotes(){
//     try{

//     const  response  =  await  fetch('https://dummyjson.com/quotes');
//        if(!response.ok){
//       console.log('some  http error',response.status);

//     }
//      const   data  =    await   response.json();
//       console.log(data);

//     }catch(error){
//    console.log('some error',error.message);

//     }
// }

// fetchQuotes();

// 8.

// async function fetchRecipes() {
//   try {
//     const response = await fetch("https://dummyjson.com/recipes");
//     if (!response.ok) {
//       console.log("some http  error", response.status);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("something   went    wrong!", err.message);
//   }
// }

// fetchRecipes();

// 9.
// async function fetchPost() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//       throw new Error("some http  errror", response.status);
//     }

//     const data =await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("something  went  wrong", error.message);
//   }
// }

// fetchPost();

//10.

// async function fetchUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error("some http error", response.status);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("some error", error.message);
//   }
// }


// fetchUsers();

//  simple   http  server  
    //  const   http =   require('http');
    //   http.createServer((req,res)=>{
    //   res.writeHead(200,{'Content-Type': 'text/plain'});
    //   res.end('hello  jpp');
    //   }).listen(8000);

//     const http = require('http');

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello world!..');
// }).listen(5000, () => {
//   console.log('Server is running on http://localhost:5000');
// });


// const    http = require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type' : 'text/plain'});
//     res.end('hello  jp  how     are   you...');
// }).listen(5000,()=>{
//     console.log('server start! view  it  at http://localhost:5000');
// });


// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// setImmediate(() => {
//   console.log("Immediate 1");
// });

// process.nextTick(() => {
//   console.log("NextTick 1");
// });

// console.log("End");

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout callback");
// }, 0);

// console.log("End");

// const  http  =  require('http');
// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type': 'text/plain'});
//   res.end('hello  jp  i am  from   server, ok  so finally   i  create  basic server  successfully!, congrats  jp 👍');


// }).listen(8000,()=>{
//    console.log('http server  port : http://localhost:8000');
// });

































































