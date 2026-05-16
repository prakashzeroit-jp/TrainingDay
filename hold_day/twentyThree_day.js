// 15 -05-2026

// const  crypto  =  require('crypto');
// const  data =  'jp123';

// const  sha256 = crypto.createHash('sha256').update(data).digest('hex');
//  console.log('SHA256',sha256);

// hash  pasd   function

// password   encryption  with crypto

// const crypto = require("crypto");

// const password = "jpr123";

// // create  hash
// const hash = crypto.createHash("sha256").update(password).digest("hex");
// console.log("hash :", hash);

// const crypto = require("crypto");
// const myPassword = "OnlyJp123";
// const hash = crypto.createHash("sha256").update(myPassword).digest("hex");
// console.log("hash :", hash);

// const  crypto  =  require('crypto');
// const  psd  = 'abc123';
//  const  hash =  crypto.createHash('sha256').update(psd).digest('hex');
//    console.log(hash);

// const   crypto  =   require('crypto');
//  const    password =  'hell jp';
//  const    hash =  crypto.createHash('sha512').update(password).digest('hex');
//   console.log("Hash :",  hash);

// const crypto = require("crypto");
// const myStrongPassword = "jkl123";
// const hash = crypto.createHash("sha1").update(myStrongPassword).digest("hex");
// console.log(hash);

// const crypto = require("crypto");
// const password = "asd123";
// const sha384 = crypto.createHash("sha384").update(password).digest("hex");
// console.log(`SHA384 : ${sha384}`);

// const crypto = require("crypto");
// const myPassword = "onml12";
// const hash = crypto.createHash("sha512").update(myPassword).digest("hex");
// console.log(hash);

// const crypto = require("crypto");
// const password = "12345";
// const hash = crypto.createHash("sha256").update(password).digest("hex");
// console.log("hash :" ,hash);

//**************** add  salt (more  secure hashing) *********************************
// const crypto = require("crypto");
// const password = "jp123";
// const salt = crypto.randomBytes(16).toString("hex");
// const  hash =   crypto.createHash('sha256').update(password + salt).digest('hex');
// console.log("salt :",salt);
// console.log("hash :",hash);

// const crypto = require("crypto");

// const myPassword = "qa12345";
// const salt = crypto.randomBytes(8).toString("hex");
// const hash = crypto
//   .createHash("sha384")
//   .update(myPassword + salt)
//   .digest("hex");
// console.log("salt :", salt);
// console.log("hash :", hash);

// const crypto = require("crypto");
// const password = "psd123";
// const salt = crypto.randomBytes(6).toString("hex");
// const hash = crypto
//   .createHash("sha1")
//   .update(password + salt)
//   .digest("hex");
// console.log("salt :", salt);
// console.log("hash :", hash);

// const crypto = require("crypto");
// const pasd = "helllo123";
// const salt = crypto.randomBytes(4).toString("hex");
// const hash = crypto
//   .createHash("sha512")
//   .update(pasd + salt)
//   .digest("hex");
// console.log("salt :", salt);
// console.log("hash :", hash);

// const crypto = require("crypto");
// const myPassword = "qwer123";
// const salt = crypto.randomBytes(12).toString("hex");
// const hash = crypto
//   .createHash("sha512")
//   .update(myPassword + salt)
//   .digest("hex");
// console.log("salt :", salt);
// console.log("hash :", hash);

// const   crypto =    require('crypto');
//  const  helloPassword = '12345';
//   const  salt =   crypto.randomBytes(16).toString('hex');
//  const hash =   crypto.createHash('sha256').update(helloPassword+salt).digest('hex');
//   console.log('hsah :',hash);
//   console.log('salt :',salt);

// ********************** HMAC (Hash-based Message Authentication Code) *********************

// const crypto = require("crypto");
// const message = "hellojp";
// const secret = "jp1234";
// const hamc = crypto.createHmac("sha256", secret).update(message).digest("hex");
// console.log("hamc :", hamc);

// const crypto = require("crypto");
// const message = "hellobro";
// const secret = "jk123";
// const hamc = crypto.createHmac("sha1", secret).update(message).digest("hex");
// console.log(hamc);

// const crypto = require("crypto");
// const message = "hiaj";
// const secret = "onp123";
// const hamc = crypto.createHmac("sha256", secret).update(message).digest("hex");
// console.log("hamc :", hamc);

// const crypto = require("crypto");
// const message = "abc";
// const secret = "12345";
// const hamc = crypto.createHmac("sha256", secret).update(message).digest("hex");
// console.log("hamc :", hamc);

// *******************symmitric Encryption,  AES (Advanced Encryption Standard) **********
// const crypto = require("crypto");
// const algorithm = "aes-256-cbc";
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);
// const text = "Sensitive   data";
// // Encrypt
// const cipher = crypto.createCipheriv(algorithm, key, iv);
// let encrypted = cipher.update(text, "utf8", "hex");
// encrypted += cipher.final("hex");
// console.log(" encrypted :", encrypted);

// //Decrypt
// const decipher =  crypto.createDecipheriv(algorithm,key,iv);
// let decrepted =  decipher.update(encrypted,'hex','utf8');
// decrepted += decipher.final('utf8');
// console.log('decrepted :', decrepted);

// const crypto = require("crypto");
// const algorithm = "aes-256-cbc";
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);
// const text = "Jyoti Prakash";
// //encrept
// const cipher = crypto.createCipheriv(algorithm, key, iv);
// let encrept = cipher.update(text, "utf-8", "hex");
// encrept += cipher.final("hex");
// console.log( "encrept :",encrept);
// //decrept
// const decipher = crypto.createDecipheriv(algorithm,key,iv);
// let  decrept =  decipher.update(encrept,'hex','utf-8');
// decrept += decipher.final('utf-8');
// console.log('decrept :',decrept);

//***************** PBKDF2 (Password-Based Key Derivation Function 2) ***************

// const crypto = require("crypto");
// const password = "OnlyJP";
// const salt = crypto.randomBytes(16).toString("hex");
// crypto.pbkdf2(password, salt, 10000, 64, "sha512", (err, drivedKey) => {
//   if (err) {
//     throw err;
//   }
//   console.log("hash :", drivedKey.toString("hex"));
// });

// const crypto = require("crypto");
// const Password = "abc1234";
// const salt = crypto.randomBytes(16).toString("hex");
// crypto.pbkdf2(Password, salt, 10000, 64, "sha512", (err, drivedKey) => {
//   if (err) {
//     throw err;
//   }
//   console.log("hash :", drivedKey.toString("hex"));
// });

// const crypto = require("crypto");
// const myPassword = "123456";
// const salt = crypto.randomBytes(32).toString("hex");
// crypto.pbkdf2(myPassword, salt, 10000, 64, "sha512", (err, drivedKey) => {
//   if (err) {
//     throw err;
//   }
//   console.log("hash :", drivedKey.toString("hex"));
// });

//********************* Generate secure Token(like JWT alternative basics) *******************************

// const  crypto  =   require('crypto');
// const token =  crypto.randomBytes(32).toString('hex');
// console.log('Secure Token :',token);

//************************Asymmetric Encryption (RSA - Advanced) ***************************************

// const   crypto =   require('crypto');

// // generate key
// const  {publicKey,privateKey} =  crypto.generateKeyPairSync('rsa',{  modulusLength : 2024, });

// // encrypt

// const  data = 'jp';
//  const  encrepted = crypto.publicEncrypt(publicKey, Buffer.from(data));

//  // decrepted
//  const   decrepted =  crypto.privateDecrypt(privateKey,encrepted);
//   console.log('decrepetd :' ,decrepted.toString());

//************************ digital  signature (Imp) **********************************************

// const crypto =  require('crypto');
// const   {publicKey,privateKey} = crypto.generateKeyPairSync('rsa',{modulusLength : 2048});
// const  data =   'jp';
// //sign
// const   sign = crypto.createSign('sha256');
// sign.update(data);
// sign.end();

// const  signature =  sign.sign(privateKey,'hex');

// //verify
// const verify =  crypto.createVerify('sha256');
// verify.update(data);
// verify.end();

// const  isValid =  verify.verify(publicKey,signature,'hex');
// console.log('Is valid :', isValid);

// const  crypto =  require('crypto');
// const  {publicKey,privateKey} =   crypto.generateKeyPairSync('rsa',{modulusLength :2028});
// const    data =   'only jp';
// const    sign =  crypto.createSign('sha512');
// sign.update(data);
// sign.end();

// const signature =    sign.sign(privateKey,'hex');
// const   verify =  crypto.createVerify('sha512');
// verify.update(data);
// verify.end();
// const  isValid =   verify.verify(publicKey,signature,'hex');
// console.log('isValid :',isValid);

// *************************** practice  ***********************************
// const   http = require('http');
// const   server =   http.createServer((req,res)=>{
//    res.writeHead(200,{'Content-Type': 'text/plain'});
//    res.end('hello     jp    how  are  you!');
// });
  
// const   port =  5000;
// server.listen(port,()=>{
//     console.log(`server run  at : http://localhost:${port}/`);
// })



