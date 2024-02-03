"use strict";
//! 1
// function fnc1(...numbers) {
//   let sum = 0;
//   for (let x of numbers) {
//     sum += x;
//   }
//   return sum;
// }
// let result = fnc1(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result);

// //!

// let fnc2 = (...numbers1) => {
//   let sum1 = 0;
//   for (let x1 of numbers1) {
//     sum1 += x1 ;
//   }
//   return sum1 ;
// }

// let result1 = fnc2 (10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result1);

//! 2

// let user1 = {
//   fisrtName: "giorgi",
//   lastName: "saakadze",
//   age: 32,
//   isloggedin: true,
// };

//  let result = user1.fisrtName + " " + user1.lastName ;
//  console.log(result);
//  let result1 = `${user1.fisrtName} ${user1.lastName}`
//  console.log(result1);

// let fnc3 = function (x,y){
//     if (user1.isloggedin ===x){
//         return `${user1.fisrtName}  ${user1.lastName}`
//     }
//     else if (user1.isloggedin === y){
//         return "false";
//     }
// }
// let result = fnc3(true , false);
// console.log(result);

//!3

// function user1(...numbers) {
//   return Math.max(...numbers);
// }
// let result = user1(12, 323, 34, 45, 3567, 978, 34, 2);
// console.log(result);

// // .. //

// let user2 = function (...numbers1) {
//   return Math.max(numbers1);
// };
// let result2 = user1(12, 323, 34, 45, 3567, 978, 34, 2);
// console.log(result2);

// // .. //

// let user3 = (...numbers2) => {
//   return Math.max(...numbers2);
// };
// let result3 = user3(12, 323, 34, 45, 3567, 978, 34, 2);
// console.log(result3);

//! 4 //

// function user4(x) {
//   if (x % 2 === 0) {
//     return "this number is even";
//   } else{
//     return  "this number is odd";
//   }
// }
// let result4 = user4(11);
// console.log(result4);

// ... ///

// let user4 = function (x) {
//   if (x % 2 === 0) {
//     return "this number is even";
//   }else {
//     return "this number is odd";
//   }
// };
// let result5 = user4(9);
// console.log(result5);

// // ... //

// let user5 = (x) => {
//   if (x % 2 ===0) {
//     return "this number is even";
//   } else {
//     return "this number is odd";
//   }
// }
// let result6 = user4(9);
// console.log(result6);

//! 5 //
