// 16-05-2026

// const express = require("express");
// const { conforms } = require("lodash");
// const app = express();
// const port = 8000;
// app.get('/',(req,res)=>{
//   res.send('hello    jp    you   are   create    basic    server   with    help   of Express.js ');
// });
// app.listen(port,()=>{
//      console.log(`Express  server    running  at http://localhost:${port}/`)
// });

// const   express    =   require('express');
// const  app =  express();
// const  port =  8000;
// app.get('/',(req,res)=>{
//    res.send('hello    jp ,  how   are  you');
// });
// app.listen(port,()=>{
//      console.log(`express  run   on :   http://localhost:${port}`);
// });

// const express = require("express");
// const app = express();
// app.get('/',(req,res)=>{
//   res.send('hello  jp!');
// });
// app.listen(4000,()=>{
//     console.log(`Server  run   at : http://localhost:${4000}`);
// });

// const express = require("express");
// const jp = express();

// jp.get("/", (req, res) => {
//   res.send("hi  jp    , are    u    learning  express.js?  , yes");
// });
// jp.listen(8000,()=>{
//      console.log(`This     Server   run   at : http://localhost:8000`);
// });

// const    express  =     require('express');
// const  app  =   express();

// app.get('/',(req,res)=>{
//     res.send('hello   Prakash!');
// });

// app.listen(3000,()=>{
//     console.log(`Server  run  at :   http://localhost:3000`);
// });

// const   express  =   require('express');
// const  app =   express();
// app.get('/',(req,res)=>{
//      res.send('Tuday  I am    leran   Express.js')
// });
// app.listen(8000,()=>{
//      console.log(`Express server  run  at : http://localhost:8000`);
// });

// const express =   require('express');
//  const app = express();
//  const  port = 3000;

//  app.get('/',(req,res)=>{
//     res.send('hello   Only Jp!');
//  });
// app.listen(port,()=>{
//      console.log(`Server  run  at : http://localhost:${port}`)
//  });

// const express =  require('express');
// const  app  =   express();
// const port  =  3000;
// app.get('/',(req,res)=>{
//   res.send("this  is  basic   server!");
// });

// app.listen(port,()=>{
//     console.log(`Server at : http://localhost:${port}`);
// });

// const  express  =   require('express');
//  const  app =   express();
//   const  port =  3000;

//   app.get('/',(req,res)=>{
//      res.send('this   is   my  server!');
//   });

//   app.listen(port,()=>{
//      console.log('hello')
//   });

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("hi jpp");
// });
// app.listen(port, () => {
//   console.log(`Server  run  at :  http://localhost:${port}`);
// });

//********************** express.js routing **********************************

// const express = require("express");
// const app = express();
// const port = 8000;
// app.use(express.json());

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   res.send("Hi  jp!");
// });

// app.listen(port, () => {
//   console.log(`Server run  at 3000 : http://localhost:${port}`);
// });

//************************** multiple  get route ********************************

// const express = require("express");
// const app = express();
// const port = 8000;

// app.get("/home", (req, res) => {
//   res.send("this    is    home page");
// });
// app.get("/about", (req, res) => {
//   res.send("This   is   about  page");
// });
// app.get("/contact", (req, res) => {
//   res.send("this  is   contect  page");
// });

// app.get("/json", (req, res) => {
//   res.send([
//     {
//       name: "jp",
//       age: 22,
//       email: "jp@gmail.com",
//       id: 123,
//     },
//     {
//       name: "ab",
//       age: 22,
//       email: "ab@gmail.com",
//       id: 1233,
//     },
//     {
//       name: "np",
//       age: 23,
//       email: "np@gmail.com",
//       id: 133,
//     },
//     {
//       name: "yt",
//       age: 26,
//       email: "yt@gmail.com",
//       id: 13,
//     },
//     {
//       name: "po",
//       age: 22,
//       email: "po@gmail.com",
//       id: 123,
//     },
//     {
//       name: "jw",
//       age: 22,
//       email: "jw@gmail.com",
//       id: 123,
//     },
//     {
//       name: "jp",
//       age: 22,
//       email: "jp@gmail.com",
//       id: 123,
//     },
//     {
//       name: "ab",
//       age: 22,
//       email: "ab@gmail.com",
//       id: 1233,
//     },
//     {
//       name: "np",
//       age: 23,
//       email: "np@gmail.com",
//       id: 133,
//     },
//     {
//       name: "yt",
//       age: 26,
//       email: "yt@gmail.com",
//       id: 13,
//     },
//     {
//       name: "po",
//       age: 22,
//       email: "po@gmail.com",
//       id: 123,
//     },
//     {
//       name: "jw",
//       age: 22,
//       email: "jw@gmail.com",
//       id: 123,
//     },
//     {
//       name: "jp",
//       age: 22,
//       email: "jp@gmail.com",
//       id: 123,
//     },
//     {
//       name: "ab",
//       age: 22,
//       email: "ab@gmail.com",
//       id: 1233,
//     },
//     {
//       name: "np",
//       age: 23,
//       email: "np@gmail.com",
//       id: 133,
//     },
//     {
//       name: "yt",
//       age: 26,
//       email: "yt@gmail.com",
//       id: 13,
//     },
//     {
//       name: "po",
//       age: 22,
//       email: "po@gmail.com",
//       id: 123,
//     },
//     {
//       name: "jw",
//       age: 22,
//       email: "jw@gmail.com",
//       id: 123,
//     },
//     {
//       name: "jp",
//       age: 22,
//       email: "jp@gmail.com",
//       id: 123,
//     },
//     {
//       name: "ab",
//       age: 22,
//       email: "ab@gmail.com",
//       id: 1233,
//     },
//     {
//       name: "np",
//       age: 23,
//       email: "np@gmail.com",
//       id: 133,
//     },
//     {
//       name: "yt",
//       age: 26,
//       email: "yt@gmail.com",
//       id: 13,
//     },
//     {
//       name: "po",
//       age: 22,
//       email: "po@gmail.com",
//       id: 123,
//     },
//     {
//       name: "jw",
//       age: 22,
//       email: "jw@gmail.com",
//       id: 123,
//     },
//   ]);
// });

// app.listen(3000, () => {
//   console.log(`Server  run  at : http://localhost:${port}`);
// });

// *************************** POST routing method *******************************

// const   express =  require('express');
// const app  =  express();
// const port =    3000;
// app.use(express.json());

// app.post('/',(req,res)=>{
//    res.send('hello  jp ???????????');
// });

// app.listen(port,()=>{
//   console.log(`Server    run  at : http://localhost:${port}`);
// });


