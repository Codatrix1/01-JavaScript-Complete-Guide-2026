"use strict";
//------------------------
// at() Method (ES2022)
//------------------------
// Works with ARRAYS
// Also, Works with STRINGS

const arr = [23, 56, 78];

// Traditionally, taking out one item from Array
console.log(arr[0]); // 23

//........................
// with the at() METHOD
//......................
console.log(arr.at(0)); // 23

/*
🌟 TOP USE CASE of the at() METHOD; Preferred over the brackets notation
*/

//...................................................
// Let's say we wanna get the last item of the array
//...................................................
// With Two Traditional ways: BRACKETS Notation, Slice Method
console.log(arr[arr.length - 1]); // 78
console.log(arr.slice(-1)[0]); // 78

// With at()
console.log(arr.at(-1));

/*
‼⁉️🤔 When to use at() Method instead of TRADITIONAL methods?
1) Well, use what you like
2) ✨✨ PERFECT for METHOD CHAINING
*/

// 🌟🌟🌟 With Strings
console.log("Peter".at(0)); // P
console.log("Peter".at(-1)); // r
