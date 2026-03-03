"use strict";

//--------------------------------------------
// Sets: New Operations (ES2025) + (ES2026) ✨
//-------------------------------------------

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// ES6 ⭐ SHADC -> size, has, add, delete, clear
// ES2025 🌟 IUD-SD-Sub-Sup-Dis
// ES2026 specs MORE Methods from MDN ✨ entries(), forEach(), values()

/*
Until 2025, sets only had 5 methods that we learned about
-> size
-> has
-> add
-> delete
-> clear

✨ ES2025: Sets got 7 New Methods:
Perfect when used with Arrays! 

*/

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

//---------------------------
// 1) ✨ Intersection METHOD
//---------------------------
// Find same/overlapping items in two sets: Can be used instead of "filter" method

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(`Intersection: `, commonFoods); // Intersection:  Set(2) {'tomatoes', 'garlic'}

// Convert Set to Array
console.log([...commonFoods]); // (2) ['tomatoes', 'garlic']

//---------------------------
// 2) ✨ Union METHOD
//---------------------------
// Find Unique items and provide the new Set
const italianAndMexicanFusion = italianFoods.union(mexicanFoods);
console.log(`Union: `, italianAndMexicanFusion); // Union:  Set(10) {'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', …}

// ANOTHER Way to do the same thing: COMBINE 2 Arrays?
console.log([...new Set([...italianFoods, ...mexicanFoods])]);
// (10) ['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'avocado']

//---------------------------
// 3)✨ Difference METHOD:
//---------------------------
// HERE, What Set we use first MATTERS!
// Gives us a new set which will contain all the elements
// that are present in the first set but are not there in the second one
// Simply put: Gives us all the elements that are unique in the first set
const uniqueItalianFood = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFood);
// Set(4) {'pasta', 'gnocchi', 'olive oil', 'basil'}

const uniqueMexicanFood = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFood);
// Set(4) {'tortillas', 'beans', 'rice', 'avocado'}

//---------------------------
// 4)✨ Symmetric METHOD (Opposite of the Intersection Method)
//---------------------------
// Gives us elements that are there in EITHER SET, but not in BOTH
// Simply put, gives us all the elements EXCEPT the Overlapping Ones

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);
// Set(8) {'pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas','beans', 'rice', 'avocado'}

//---------------------------
// 5, 6, 7)✨ Three METHODS: isSubsetOf, isSupersetOf, isDisjointFrom
//---------------------------
// isSubsetOf
// isSuperSetOf
// isDisjointFrom

//-------------------
// ⁉️ isDisjointFrom
//-----------------
// Whether One of the Sets contains the other set

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // false
