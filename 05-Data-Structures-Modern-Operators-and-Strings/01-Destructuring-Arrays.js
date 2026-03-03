"use strict";

//------------------------------------
// Destructuring ARRAYS {[], [], []}
//-------------------------------------

/*
------------------
❗ DESTRUCTURING 
-----------------

- This is an ES6 feature, 
- its a way of unpacking values, from an ARRAY or an OBJECT into seperate variables. 
- It means to break a complex data structure down 
- like arrays or objects, in a smaller data structure, like a VARIABLE

For Arrays, we use destructuring to retrieve elements from the Array and store them into variables in a very easy way


The theme here will be to simulate a Food Delivery Application

*/

const firstArray = [3, 4, 5];
const [x, y, z] = firstArray; // Destructuring assigment

console.log(x, y, z); // 3 4 5

// The original array is not affected
console.log(firstArray); // (3) [3, 4, 5]

//------------------------------------------
// DESTRUCTURING ARRAYS from OBJECT EXAMPLE
//---------------------------------------

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, , secondary] = restaurant.categories;

console.log(main, secondary); // Italian Vegetarian

//-------------------------------
// Switching variables: Reassigning
//-------------------------------
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// A function returning an array, and we can immediately destructure it
// allows us to get multiple values from a function

console.log(restaurant.order(2, 0)); // (2) ['Garlic Bread', 'Pizza']

// Receive 2 return values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse); // Garlic Bread Pizza

//-------------------------
// 🔥 NESTED Destructuring
//-------------------------
// This is called Nested De-Structuring

const nestedArr = [2, 3, ["Hello", "There"]];

const [i, j, k] = nestedArr;
console.log(i, j, k); // 2 3 (2) ['Hello', 'There']

// .... What if, we want individual items?..
// We have to do de-structuring, inside de-structuring---

const [a, , [b, c]] = nestedArr;
console.log(a, b, c); // 2 'Hello' 'There'

//-----------------------------
// 🔥 ASSIGNING DEFAULT VALUES
//-----------------------------
// We use this when we get data from an API
// If we try to unpack values and it isn't there, we can put a default value for it
// such as 1 or "-1", or "defaultValue"

const [p = -1, q = -1, r = -1] = [7, 8];
console.log(p, q, r); // 7 8 -1
