// 17-05-2026

// const http = require("http");
// const  port  =      3000;
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome jp  this  is    http    server!  ");
//   })
//   .listen(port, ()=>{
//     console.log(`Server   run   at : http://localhost:3000`)
//   });

// const express = require("express");
// const port = 8000;

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome  Jp ,your     New    world");
// });

// app.listen(port, () => {
//   console.log(`Server   run  at : http://localhost:${port}`);
// });

//************************* post  routing with express.js ******************************

// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());
// app.post("/submit", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send("welcome jp!, Data recevied");
// });

// app.listen(port, () => {
//   console.log(`Server run  at : http://localhost:${port}`);
// });

// const  express = require('express');
// const app = express();
// const  port =  3000;

// app.use(express.json());
// app.post('/',(req,res)=>{
//    const data = req.body;
//    console.log(data);
//   res.send('this   is   post   method!');
// });

// app.listen(port,()=>{
//     console.log(`Server run at : http://localhost:${port}`);
// });

// const  express  =   require('express');
// const  app  =    express();
// const  port =  3000;

// app.use(express.json());
// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.send('Tuday  is Sunday 😍');
// });

// app.listen(port,()=>{
//     console.log(`Server  run  at : http://localhost:${port}`);
// });

// const  express =  require('express');
// const app =   express();
// const  port  =  8000;

// app.use(express.json());
// app.post('/',(req,res)=>{
//     console.log(req.body);
//    res.send('Hello  and    welcome Jp 😎');
// });

// app.listen(port,()=>{
//     console.log(`Server  run  at : http://localhost:${port}`);
// });

// const express  =    require('express');
// const app  =   express();
// const   port  =  3000;

// app.use(express.json());
// app.post('/',(req,res)=>{
//    const data  =req.body;
//    console.log(data);
//    res.send('Welcome Pr 😍😍');
// });

// app.listen(port,()=>{
//     console.log(`Server  run  at : http://localhost:${port}`);
// });

// ******************** put  method  in express.js ***************************

// const express = require("express");
// const app = express();
// const port = 8000;

// app.use(express.json());
// app.put("/user", (req, res) => {
//   const user = req.body;
//   console.log("Updated User ", user);
//   res.send("User Updated  Successfully ✅!");
// });

// app.listen(port, () => {
//   console.log(`Server run at : http://localhost:${port}`);
// });

const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

//fake  database
let users = [
  { id: 1, email: "old1@gmail.com", password: "111" },
  { id: 2, email: "old2@gmail.com", password: "222" },
];

app.put("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body;

  let user = users.find((u) => u.id === id);

  if (!user) {
    console.log("User not   found!");
  }

  // update
  user.email = newData.email;
  user.password = newData.password;
  console.log("Updated   user list : ", users);
  res.send("User  updated   succefully ✅");
});
