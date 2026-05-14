// 14-05-2026
//fs,http,path module practice
//fs  module

// const fs = require("fs");
// fs.writeFileSync('twentytwoday.txt','hello  jp  this   is  22 days');
// fs.writeFile('22dayasync.txt','this   22  day  async  text file.....',(err)=>{
//   if(err){
//    throw err;
//   }
//    console.log('file   created    successfully....');
// });

// try {
//   const data = fs.readFileSync("twentytwoday.txt", "utf-8");
//   console.log(data);
// } catch (err) {
//   console.log("some error", err);
// }

// try{
//     fs.readFile("22dayasync.txt",'utf-8', (err,data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log(data);
// });
// }catch(err){
//   console.log('something  went    wrong',err);
// }

// try {
//   fs.appendFileSync("twentytwoday.txt", "this   is  updated data>>>>>>");

//   console.log("file append  succefully...");
// } catch (err) {
//   console.log("some error", err);
// }

//     fs.appendFile('22dayasync.txt','this   is   async  data  append',(err)=>{
//    if(err){
//    throw err;
// return;
//    }
//    console.log('file   append    async  successfully...');
//     });

// try {
//   fs.unlinkSync("myfolder/20day.txt");
//   console.log("file delite successfully....");
// } catch (error) {
//   if (error.code === "ENOENT") {
//     console.log("fie  did not  exist..,  nothing  to    delete");
//   } else {
//     console.log("some  error", error.message);
//   }
// }

// const fs = require("fs").promises;

// async function deleteFile() {
//   try {
//  await fs.unlink("myfolder/22dayasync.txt");

//     console.log('file  delite  succefully');
//   } catch (err) {
//     console.log("some  error", err.message);
//   }
// }

// deleteFile();

//  os  module   in   node.js

//  const  os = require('os');
// import  os from 'os';

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.freemem()/1024);
// console.log(os.release());
// console.log(os.version());

//event module in node.js
// const  EventEmitter =  require('events');
// const  myEmitter  = new EventEmitter();
// myEmitter.on('greet',()=>{
//     console.log('hello   jp....');
// });

// myEmitter.emit('greet');

// crypto  module  in   noe.js
// const  crypto  =  require('crypto');
// const hash  =  crypto.createHash('sha256');
// hash.update('jp123');

// const hashPassword = hash.digest('hex');
//  console.log(hashPassword);

// const crypto = require('crypto');

// const hash = crypto.createHash('sha256');
// hash.update('jp123');

// const hashPassword = hash.digest('hex');

// const formattedFingerprint = hashPassword
//   .toUpperCase()
//   .match(/.{1,2}/g)
//   .join(':');

// console.log(formattedFingerprint);

// const  crypto =  require('crypto');
//  const  hash =  crypto.createHash('sha256');
//  hash.update('onlyJp123');

//  const   myHashPassword =  hash.digest('hex');
//   console.log(myHashPassword);

//  const  crypto =   require('crypto');
//  const   hash =  crypto.createHash('sha256');
//  hash.update('pr123');

//  const myHash = hash.digest('hex');
//   console.log(myHash);
// const  crypto =   require('crypto');

// always  create  6 digit otp
// let otp = Math.floor(100000 + Math.random() * 900000);
// console.log(otp);

// const  crypto  =   require('crypto');
// const  otp  =  crypto.randomBytes(2).toString('hex');
//  console.log('otp is :',otp);

const crypto = require("crypto");
const data = "hello  jp!";
console.log(data);

const md5 = crypto.createHash("md5").update(data).digest("hex");
console.log("MD5:", md5);


const   sha1 =  crypto.createHash('sha1').update(data).digest('hex');
console.log('SHA1 :',sha1);

const  sha256 =  crypto.createHash('sha256').update('data').digest('hex');
 console.log('SHA256 :',sha256);


const sha384 =  crypto.createHash('sha384').update(data).digest('hex');
console.log('SHA384 :',sha384);

const sha512 =  crypto.createHash('sha512').update(data).digest('hex'); 
 console.log('SHA512 :',sha512);