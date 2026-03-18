"use strict";
//----------------------------------
// PART - 1) BASIC ARRAY METHODS (Operations)
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

//--------------------------------
// PART 2 - Simple Array Methods
//-------------------------------
/*
Methods are the built-in functions that are attached to 🔴 Objects in JavaScript.
Since ♻️ Arrays are 🔴 Objects too, we have methods on Arrays.

⁉️ Q: Why arrays have these Methods?
A: Covered in the later sections in Prototypal Inheritance

*/

//......................
// 🍎 1) SLICE Method
//......................
// Helps extract part of the Array without changing the original Array
// Similar to slice method in strings

const fruitsArray = [
  "apple",
  "banana",
  "orange",
  "pineapple",
  "mango",
  "grapes",
];

// With Postive parameters: Start, End
console.log(fruitsArray.slice(2)); // (4) ['orange', 'pineapple', 'mango', 'grapes']
console.log(fruitsArray.slice(2, 4)); // (2) ['orange', 'pineapple']

// With Negative Params
console.log(fruitsArray.slice(-2)); // (2) ['mango', 'grapes']
console.log(fruitsArray.slice(-1)); // ['grapes']

// Negative index as the End param
console.log(fruitsArray.slice(1, -2)); // (3) ['banana', 'orange', 'pineapple']

//...........................................................................
// We can also use the slice() method to create a shallow copy of any Array
//............................................................................
console.log(fruitsArray.slice()); // (6) ['apple', 'banana', 'orange', 'pineapple', 'mango', 'grapes']

//..... Spread Operator [...] gives the exact same result
console.log([...fruitsArray]);

// ⁉️ Q: What to use to create Shallow Copy of array?
// Depends on Personal Preference;
//....................................................
// ✨ USE CASE for slice() Method then? When you gotta chain multiple methods
// together.

//......................
// 🗡️ 2) SPLICE Method
//......................
// Working almost the same as slice() Method
// The fundamental difference: ‼️ It changes/mutates the ORIGINAL ARRAY‼️

// console.log(fruitsArray.splice(2)); // (4) ['orange', 'pineapple', 'mango', 'grapes']

//.......................
// Most Common Use case of SPLICE Method: Removing the last item in an array
console.log(fruitsArray.splice(-1)); // ['grapes']
console.log(fruitsArray); // (5) ['apple', 'banana', 'orange', 'pineapple', 'mango']

// Below, the first PARAM is the starting element, and the second element is the number
// of elements to delete.
console.log(fruitsArray.splice(1, 2)); // (2) ['banana', 'orange']
console.log(fruitsArray); // (3) ['apple', 'pineapple', 'mango']

//......................
// ⬅️ 3) REVERSE Method
//......................
// The reverse method ‼️ MUTATES the Origianl Array ‼️
const alphaArrayOne = ["a", "b", "c", "d", "e"];

const alphaArrayTwo = ["j", "i", "h", "g", "f"];
console.log(alphaArrayTwo.reverse()); // (5) ['f', 'g', 'h', 'i', 'j']
console.log(alphaArrayTwo); // (5) ['f', 'g', 'h', 'i', 'j']

//......................
// ➕ 4) CONCAT Method
//......................
const letters = alphaArrayOne.concat(alphaArrayTwo);
console.log(letters);
// (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log([...alphaArrayOne, ...alphaArrayTwo]); // Same thing with Spread Operator
// (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//......................
//  ✨ 5) JOIN Method
//......................
console.log(letters.join("-")); // a-b-c-d-e-f-g-h-i-j
