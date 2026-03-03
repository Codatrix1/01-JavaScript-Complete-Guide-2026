"use strict";

//------------------------------
// HOISTING AND TDZ in Practice
//------------------------------

//-----------------------
// ⭐ VARIABLES HOISTING
//-----------------------
console.log(firstName); // undefined
// console.log(job); // ❌ Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(birthYear); // ❌ Uncaught ReferenceError: Cannot access 'birthYear' before initialization

var firstName = "Peter";
let job = "Analyst";
const birthYear = 1989;

//-----------------------
// ⭐ FUNCTIONS HOISTING
//-----------------------
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(3, 4)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization

console.log(addArrow); // undefined
// console.log(addArrow(2, 3)); // Uncaught TypeError: addArrow is not a function :
// Its UNDEFINED, HOISTED USING "var", and we are trying to call it, SO we get this error

// Function declaration: HOISTED
function addDecl(a, b) {
  return a + b;
}

//----------------------
// Function Expression
const addExpr = function (a, b) {
  return a + b;
};

//---------------------
// Arrow function
var addArrow = (a, b) => a + b;

//--------------------------------------
// 💥 DANGERS OF HOISTING with "var"
//-------------------------------------
// EXAMPLE

console.log(numProducts); // undefined

if (!numProducts) deleteShoppingCart(); // All Products deleted!

var numProducts = 10; // We have produts in our cart

// Creates BUG
function deleteShoppingCart() {
  console.log("All Products deleted!");
}

//-------------------
// BEST PRACTICES
//-------------------
// 1. Just DONT USE "var" to declare variables
// 2. Use "const" for most times to declare variables
// 3. If you really need to change the value of a variable later, use "let"
// 4. To write clean code, always declare variable at the top of each scope
// 5. Always declare all your functions first, only then use them -> Even when using function declarations (that are HOISTED)

//--------------------------------
// GLOBAL OBJECT IN JavaScript
//-----------------------------

var x = 1; // Creates property in the window object, ❗ NOT RECOMMENDED At All

console.log(window);

let y = 2;
const z = 3;

// x is actually is a property in the window object
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

// ---------------------------------------
// 🔥 TEMPORAL DEAD ZONE, LET AND CONST 🔥
// ---------------------------------------

const lastName = "quinn";

if (lastName === "quinn") {
  console.log(`${lastName} is an ${job}`);
  const age = 2077 - 1989;
  console.log(age);
  const job = "Analyst"; // Uncaught ReferenceError: Cannot access 'job' before initialization
  console.log(x); // Uncaught ReferenceError: x is not defined
}
