"use strict";

//----------------------------------
// BASIC ARRAY METHODS (Operations)
//----------------------------------
/*

Add Elements
- push (to the end)
- unshift (to the start)

Remove Elements
- pop (removes last)
- shift (removes first)

Get the Index
- indexOf

Present or not (Boolean) ES6
USED TO WRITE CONDITIONALS
Strict Equality
- includes


KEY TAKEAWAYS (List of Basic Array Methods)
--- Adding
- unshift (to start)
- push (to end)

--- Removing
- shift (from start)
- pop (from end)

- indexOf
- includes (ES6) - uses strict equality, so can be used for conditionals

*/

const fruits = ["apples", "oranges", "banana"];

//-------------------------------
// Add elements: unshift | pop
//-------------------------------
// push: Add elements to the end
fruits.push("pineapple");
console.log(fruits); // (4) ['apples', 'oranges', 'banana', 'pineapple']

const newLength = fruits.length;
console.log(newLength); // 4

// unshift: Add elements to the start
fruits.unshift("mango");
console.log(fruits); // (5) ['mango', 'apples', 'oranges', 'banana', 'pineapple']

//-------------------------------
// Remove elements: shift | pop
//------------------------------
// pop: Remove elements from the end
fruits.pop();
const popped = fruits.pop();
console.log(fruits); // ['mango', 'apples', 'oranges']

// shift: Remove elements from the start
fruits.shift();

console.log(fruits); // ['apples', 'oranges']

//---------------
// Get Index
//---------------
console.log(fruits.indexOf("apples")); // 0
console.log(fruits.indexOf("bob")); // -1

//---------------------------------
// Element present or not (Boolean) (ES6)
//---------------------------------
console.log(fruits.includes("guava")); // false

// uses strict equality ===
const numbers = ["123", 45, "67", 98, 90];
console.log(numbers.includes(123)); // false

// Use with conditionals
if (numbers.includes(123)) {
  console.log("There's a number 123 in the array");
} else {
  console.log("There's no number 123 in the array");
} // There's no number 123 in the array
