"use strict";
/**
 * This file contains the main code for boolean values.
 */
let isPresent = true;
console.log("Is present check  ", isPresent);
console.log("Type of function", typeof (isPresent));
//Value of function used to check the values.
console.log(isPresent.valueOf());
//How to change the value of boolean in typescript
isPresent = false;
console.log(isPresent);
//Getting error message when assign the boolean variable to other values like number or string.
// isPresent=43;
// isPresent="Shakeel"
