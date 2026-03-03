"use strict";

// Why use strict mode?
// 1) Forbids us to do certain things
// 2) Creates visible errors (in the console) in situtations in which without strict mode, JavaScript will silently fail without letting us know we did a mistake

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}
if (hasDriversLicense) {
  console.log("I can drive :D ✨");
}

// script.js:11 Uncaught ReferenceError: hasDriverLicense is not defined at script.js:11:20

const interface = "Audio";
// Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:19:7)

const private = 123;
// Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:22:7)

const if = "Hello there"; 
// 'if' is not allowed as a variable declaration name