//03-05-2026

// function myAddFunction(a, b, c) {
//   return a + b + c;
// }

// let res = myAddFunction(12, 3, 4);
// console.log(res);

//  this add  function as   a  argument
//  function  myAddition(){
// let   sum =   0;
//  for(let  i  =  0;i<arguments.length;i++){
//    sum += arguments[i];
//  }

//  return sum;

//  }

//  let  res =  myAddition(12,23,6,34,65,45);
//  console.log(res);

// function mySubFunction() {
//   let sum = 2;
//   for (let i = 1; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// let res = mySubFunction(1200, 300,500);
// console.log(res);

function mySumFunction() {
  let sum = arguments[1];
  for (let i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let res = mySumFunction(1200, 300,500);
console.log(res);

// function mySubFunction(){
//   let  sub =  arguments[0];
//   for( let i = 1; i < arguments.length ; i++){
//    sub -= arguments[i];
//   }
//   return sub;

// }

// let  res =   mySubFunction(1200,300,500,200);
//  console.log(res);



