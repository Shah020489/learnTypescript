"use strict";
// This example is to understand the string consepts in typescript:
/**
 * Below mention line of code is declearing the string variable in firstName.
 */
let firstName = "Shakeel Ahmed";
//We will write our out in the console.
console.log(firstName);
//We will write the first character of string variable by providing the index number
console.log(firstName[0]);
//Negative indexing is not work in typescript.
// console.log(firstName[-1])
console.log("TO lower case ", firstName.toLowerCase());
console.log("TO upper case ", firstName.toUpperCase());
console.log("Length character ", firstName.length);
console.log("string function to declear string function", firstName.charAt(0));
console.log("Type of operator", typeof (firstName));
console.log("***** Slice Function *****");
console.log("Slice function without parameter", firstName.slice());
console.log("Slice function with parameter", firstName.slice(0, 5));
console.log("Slice function with parameter", firstName.slice(0, 14));
/**Concatenate function*/
let lastName = "Ahmed";
console.log(firstName.concat(lastName));
let str = "Hello";
let greeting = `${str}  Welcome here`;
console.log(greeting);
console.log(str.length);
let str1 = "Hello, TypeScript";
console.log(str1.startsWith("hello")); // Output: true
console.log(str1.startsWith("Type")); // Output: false
