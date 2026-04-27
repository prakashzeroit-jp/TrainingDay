
//27-04-2026
// array toString() method 
// let myArray  =  [2,4,5,60,3];
// let result = myArray.toString();
// console.log(result);
// array  at() method  in  js 
//  let   myArray = [2,54,52,2,78,43];
//   let  result =  myArray.at(2);
//   let result2 = myArray[2];
//   console.log(`at method print ${result}`);
//   console.log( `through method print ${result2}`);

//join() method in js 
// let myArray =  [2,5,6,72,4,9];
//  let result  = myArray.join("+");
//  console.log(result);

// let myArray = [3,43,46,5,65,253,];
//  let  res = myArray.join("@");
//   console.log(res);

// let myAry = ["J","Y","O","T","I"," P","R","A","K","A","S","H"];
//  let  res = myAry.join("");
//  console.log(res);

// arry pop() method
// let  myAr =  [2,34,56,84,43];
//  let  res  = myAr.pop();
//  console.log(res);
//  console.log(myAr);

// let myArray = ["phone","bag","mouse","bottle","cup"];
// let res = myArray.pop();
//   console.log(res);
//   console.log(myArray);

//arry push() method
// let  myAr =  [2,34,56,84,43];
//  let  res  = myAr.push(17);
//  console.log(res);
//  console.log(myAr);

// let myArr = [21,43,76,69,44,99];
// let  res =  myArr.push(2003);
// console.log(res);
//  console.log(myArr);

// unshift() method  in  js 
//  let   myAr = ["Bag","Mouse","Phone","charger"];
//   let  res = myAr.unshift("Jp");
//    console.log(res);
//     console.log(myAr);

// let myNum = [12,43,75,44,65,45];
//  let  res = myNum.unshift(2000);
//   console.log(res);
//    console.log(myNum);

// Sfift() method  in js 
//  let   myAr = ["Bag","Mouse","Phone","charger"];
//   let  res = myAr.shift();
//    console.log(res);
//     console.log(myAr);

// isArray()  method  in  js 
// const myAry = [2,4,5,68,56,90];
// console.log("Result" ,Array.isArray(myAry) );

// let myArray = ["Jay","ravi","jp","rohit","depak"];
//  console.log(Array.isArray(myArray)); 

//  const myArr = [23,43,42,41,45,76];
//    console.log(Array.isArray(myArr));

//concat  method in  js 
// const myArr = ["laptop","phone","mouse","charger","bag"];
// const myArr2 = ["table","pen","notebook","earphone","teffine"];
// const  res =  myArr.concat(myArr2);
//  console.log(res);

//  const myArr1 = [12,33,2,45,6,78,65,5,7,8,6,88,87,];
//  const myArr2 =  [42,3,3,4,4,4,5,6,77,9,90,9,8,909,8,7,7];
//   const   res =  myArr1.concat(myArr2);
//   console.log(res);

//  const mydata1 = ['phone','lap','mouse','earphone'];
//  const mydata2 = ['mouse','charger','tefine'];
//  const mydata3 = ['chair','notebook'];
//  const result = mydata1.concat(mydata2,mydata3);
//  console.log(result);

//Array copyWithin()   method  in  js 
// let myarray = [3,4,6,2,8,5,9,1,4,6];
//  myarray.copyWithin(1,5);
//   console.log(myarray);

// let myarray  = [3,4,45,2,6,8];
//  myarray.copyWithin(1,3);
//   console.log(myarray);

// let myArray = [2,3,22,55,7,8,9,90089,5,56];
// myArray.copyWithin(2,5);
// console.log(myArray);
// //[2,3,8,9,90089,5,56,90089,5,56]

// let arr = [3,4,6,8,94,52,6,5];
//   arr.copyWithin(1,3);
//    console.log(arr);
//   //[3,8,94,52,6,5,6,5]

// let myArray = [1,4,6,7,3,8,4];
//  myArray.copyWithin(2,4,5);
//   console.log(myArray);
//   //[1,4,3,8,3,8,4]

// let myArray = [1,4,6,7,3,8,4];
//  myArray.copyWithin(2,4,6);   // end  index  not  included 
//   console.log(myArray);
//   //[1,4,3,8,3,8,4]

// const myArray =  [12,24,6,56,77,8,89];
// console.log(myArray.copyWithin(2,3));
// [12,24,56,77,8,89,89]

//  const myData = ["phone","book","charger","raephone","cup","mouse","bottle"];
//   console.log(myData.copyWithin(1,3));
//   // ["phone","raephone","cup","mouse","bottle","mouse","bottle"]

// In array flat() method  in   js 
// let myArr = [3,45,66,[21,54,87,],23,55,[8,5,6],9,1];
//    let  result  = myArr.flat();
//    console.log(result);
// let myarry = [12,33,[2,4,5],6,[33,54,5,2],[5,9,1],39,4];
// let  result = myarry.flat();
//  console.log(result);
// flatmap() method in js 
// let  myArray =  [2,5,3,7,6];
// let   result = myArray.flatMap(x => [x,x*3]);
// console.log(result);
// // [2,6,5,10,3,9,7,21,6,18]
// let myArray =  [2,4,6,3,7];
//  let  result  = myArray.flatMap(a => [a,a+5]);
//  console.log(result);
//  // [2,7,4,9,6,11,3,8,7,12]
// sclice   method  in js 
//  let  myArray   = [12,4,5,32,6,7,4,9];
//   let  result  =  myArray.slice(2);
//   console.log(result);
//  let  myArray   = [12,4,5,32,6,7,4,9];
//   let  result  =  myArray.slice(2,5);
//   console.log(result);
// // [5,32,6]

// let myArray =  [23,43,554,5,4,5,653,3223];
// let  result =  myArray.slice(2,6);
// console.log(result);
// //554,5,4,5

// let myArray =  [2,3,5,6,9,4];
// let   result =  myArray.splice(3,2);
//  console.log(result);

// let  myArray  = [2,5,4,8,3,9,10];
//  let   result =  myArray.splice(3,4);     
//  console.log(result);
// let myArray = ['name', 'age','rollNumber','id'];
//  let result = myArray.splice(1,3);
//  console.log(result);
//   console.log(myArray);
 
// let myNumber =  [12,3,4,54,6,7,7,6,8,9];
//  let  result =  myNumber.splice(2,3);
//   console.log(result);

// let  phoneBranad = ["vivo","samsung","apple","redmi","Lava"];
//  let   result = phoneBranad.splice(2,1,"oppo","techno");
//  console.log(result);
//  console.log(`updated line ${phoneBranad}`  );

// let myArray  = [1,3,9,6,4,5,8];
// let  result =  myArray.toSpliced(2,3);
//  console.log(result);

// let myObj = ['laptop','bag','phone','mouse','charger','bottle'];      // here and  below three example  of  splice,toSpliced and  slice
//  let  result = myObj.splice(3,2);
//  console.log(result);

//  let myObj2 = ['laptop','bag','phone','mouse','charger','bottle'];
//  let  result2 = myObj2.toSpliced(3,2);
//  console.log(result2);

//   let myObj3 = ['laptop','bag','phone','mouse','charger','bottle'];
//  let  result3 = myObj3.slice(2,3);
//  console.log(result3);

//   Array Search  in js 
//  indexOf() method in js 
//  const myDatam = [12,3,45,6,7,4];
//  console.log(myDatam.indexOf(45 +1));

// const  myArr =  ["A","S","H","P","M"];
//  console.log(myArr.indexOf("H",4));

// lastIndex()    method  in js 
// let arr = [10, 20, 30, 20];
// console.log(arr.lastIndexOf(20));
// 3
// let arr = [10, 20, 30, 20];
// console.log(arr.indexOf(20));

// const myArr = ["jay","ravi","dp","sk"];
//  console.log(myArr.lastIndexOf("dp",4));
//  2

// includes()  method  in js 
// const myArr = [12,33,54,5,2,4];
//   console.log(myArr.includes(54));

// const myArr = ["A","J","S","L" ,"Y"];
//   console.log(myArr.includes("S",1));

// let x =  20;
//  x =  "hello";
//  x=  true;
//  x=  34.4;
//  x= {name : "jp"}
//  console.log(x);

//   includes() methods in js 
// const  myArr = [10,2,33,5,4];
//   console.log(myArr.includes(5));

// find method  in js 
//  const  myArr  = [10,45,65,48,32,34];
//   console.log(myArr.find());


// let numbers = [10, 20, 30, 40];

// let result = numbers.findIndex(num => num > 25);

// console.log(result);

// let numbers = [10, 20, 30, 40];

// let result = numbers.findLast(num => num > 25);

// console.log(result);

// let numbers = [10, 20, 30, 40];

// console.log(numbers.findIndex(num => num > 25));       // 2
// console.log(numbers.findLastIndex(num => num > 25));   // 3























