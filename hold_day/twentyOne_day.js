//  13-05-2026
// Core Modules  in node.js

// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Set status code and multiple headers
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//     'X-Powered-By': 'Node.js',
//     'Cache-Control': 'no-cache, no-store, must-revalidate',
//     'Set-Cookie': 'sessionid=abc123; HttpOnly'
//   });

//   res.end('<h1>Hello, World!</h1>');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Log all request headers
//   console.log('Request Headers:', req.headers);

//   // Get specific headers (case-insensitive)
//   const userAgent = req.headers['user-agent'];
//   const acceptLanguage = req.headers['accept-language'];

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}`);
// });

// server.listen(3000);

// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Get the URL and HTTP method
//   const { url, method } = req;

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(`You made a ${method} request to ${url}`);
// });

// server.listen(5000, () => {
//   console.log('Server running at http://localhost:5000/');
// });

// this  is   part  of commonjs  module
// const add = require("./twenty_day");
// const result = add(12, 3);
// console.log(res);

// const { add, sub } = require("./twenty_day");
// const addres = add(12, 4);
// const subres = sub(40, 5);
// console.log(addres, subres);

// ES6   module  import  export  is  modern
//  import {add} from './twenty_day.js';
//     const    result = add(90,30);
//   console.log(result);

// import  {add,sub,mlt,div } from "./twenty_day.js";

// const addresult = add(90, 30);
// console.log("this  is addition " +" " +addresult);

// const subresult = sub(90, 30);
// console.log("this  is sub " +""+subresult);

// const mltresult = add(90, 30);
// console.log( 'this  is  mlt'+ " " + mltresult);

// const divresult = add(90, 30);
// console.log("this  isdiv" +" " +divresult);

// async function run() {
//   let module = await import("./twenty_day.js");
//   let result = module.add(12, 3);
//   return  result;
// }

//   1st    method   to   show     output
//  run().then((display)=>{
//    console.log(display);
//  });

//   2nd    method   to   show     output
//   let    display =   await run();
//    console.log(display);

// const fs = require("fs");
// fs.writeFileSync('day20.txt','hello  jp  this  is 20th   file.... ,today  i  am  learning ');

// fs.writeFile('twday.txt','tuday  20th  day',(err)=>{
//    if(err){
//     console.log('all  done!');
//    }
// });

// fs.readFile('day20.txt',(err)=>{
//     if(err){
//       throw  err;
//     }
//    console.log('hello   day 20');
// });

// fs.appendFile('day20.txt','this  is  updated data 😍',(err)=>{
//   if(err){
//    console.log('all  done------');
//   }
// });

// fs.unlink('day20.txt',(err)=>{
//     if(err){
//      console.log('file   delete');
//     }
// });

//  file   rename    async  operation
// fs.rename('twday.txt','20day.txt',(err)=>{
//    if(err){
//      console.log('some  error   in   file',err);
//       return;
//    }
//    console.log(" file   rename   successfully.....");
// });

// CRUD   operation  in  folder
//   create   folder   with     module
// fs.mkdir('myfolder',(err)=>{
//   if(err){
//     console.log('some error',err);
//     return;
//   }
//    console.log("new    folder   create    successfully...");

// });

//  read  dirctory  content
// fs.readdir("myfolder", (err, files) => {
//   if (err) {
//     throw err;

//     return;
//   }
//   console.log("folder    read    successfully....");
//     console.log(files);
// });

// fs.rm('myfolder.txt',{recursive : true, force : true},(err)=>{
//  if(err){
//    throw  err;

//  }
//   console.log("folder   delete  successfully....");
// });

// path  module
const path = require("path");

// const filepath = "C:\\jsallproject\\TrainingDay\\hello.pdf";

// // const result = path.basename(filepath);
// const result =  path.extname(filepath);   //.pdf
//  if(result  ===  '.pdf'){
//     console.log("successfull");
//  }else{
//      console.log("please   upload  pdf   file");
//  }

// console.log(result);

// dir name  file
// console.log(path.dirname('C:\\jsallproject\\TrainingDay'));

//path  resolve()

// const  result  =  path.resolve('myfolder','TrainingDay');
//  console.log(result);

// console.log(__dirname);
// console.log(__filename);

//  modern  approach  to write  file

// const fs = require("fs").promises;

async function writeFileExample() {
  try {
   await fs.writeFile("mi.txt",'hello  jp     how  are  you ? , I am    fine and  You');
   console.log('file write   successfully....');
  } catch (err) {
    console.log("some issue.....!", err);
  }
}


writeFileExample();