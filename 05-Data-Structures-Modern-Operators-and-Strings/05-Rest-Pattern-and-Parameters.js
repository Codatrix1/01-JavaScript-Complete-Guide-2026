"use strict";
//-------------------------------------------
// REST PATTERNS And PARAMETERS
//-------------------------------------------
/*

Rest Pattern looks exactly like the Spread (...) Operater  ---> With the same syntax (...)

But it does the opposite of the Spread Operator

With Spread We Expand ⭕, ..... With REST we compress.....💢


⭕ Spread Operator  ------->  [to Unpack or Expand an Array to individual elements]

                             Use Case 1.) To Build New Arrays
                             Use Case 2.) to Pass Multiple Values into a Function

⭕ Rest Patterns <----------- [to collect multiple elements and Pack Elements into An Array]



*/

//------------------------------------
// ⭐ PART - 1 - ABOUT DESTRUCTURING
//-------------------------------------
//------------------------
// SPREAD SYNTAX (...): BECAUSE on RIGHT SIDE of the Assignment Operator =
//-----------------------
const arr = [1, 2, 3, ...[34, 56]];
console.log(arr); // (5) [1, 2, 3, 34, 56]

//------------------------------------------------------------
// (...) REST PATTERN  (with Destructuring): LEFT SIDE of Assignment =
//-----------------------------------------------------------
// Rest Pattern collects the remaining items in the destructuring
// assignment
const [x, y, ...others] = [34, 67, 89, 12, 23, 90];
console.log(x, y, others); // 34 67 (4) [89, 12, 23, 90]

//----------------
// Our OBJECT
//----------------
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring in the args itself: Order Does not matter ✨✨
  // Also adding in the default values, if its not passed in the argument
  foodDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    return `Order received! You will get ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} delivered to ${address}`;
  },

  // METHOD: Function to order pasta using the Spread Operator
  orderPasta: function (ing1, ing2, ing3) {
    return `Pasta with ${ing1}, ${ing2} and ${ing3}`;
  },

  // METHOD: Function to order Pizza: This function uses the REST Pattern
  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant, otherIngrediants);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//-----------------------------------------------
// USING BOTH REST and SPREAD OPERATOR TOGETHER
//----------------------------------------------
// ---> not include the SKIPPED Elements,
// ✨  REST must always be the LAST ELEMENT
// There only can be one REST element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);
// Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//-----------------
// Objects
//-------------
// Using REST: Remaining elements will be collected into an Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // {open: 0, close: 24} {thu: {…}, fri: {…}}

//------------------------------------
// ⭐ PART - 2 - ABOUT FUNCTIONS
//-------------------------------------

// Any arbitrary amount of arguments should work
// for example: In addValues function

const addValues = function (...numbers) {
  //   console.log(numbers);
  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  return sum;
};

console.log(addValues(2, 4)); // 6
console.log(addValues(2, 4, 6, 8)); // 20
console.log(addValues(45, 78, 23, 56, 78, 98)); // 378

//-----------------------------------------
// using SPREAD in params and REST in args
//-----------------------------------------
const random = [4, 6, 7, 8];
console.log(addValues(...random)); // 25

// UTILIZING METHOD
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// mushrooms (3) ['onion', 'olives', 'spinach']

restaurant.orderPizza("mushrooms");
// mushrooms []

//------------------
// THE KEY TAKEAWAY
//------------------
// The Rest Prameters ----> The rest parameters serves to collect all of the remaining, basically, unused parameters that were not used in the mainIngrediant Parameter

//------------------------------------------------------------------------------------
// ✅ Whats the BIG difference between the Spread Operator and the Rest Pattern ❓❓
//--------------------------------------------------------------------------------------
/*
The Spread(...) Operator and the Rest Patterns , both have the same looking syntax, but they work in opposite ways, depending upon where they are used.

The Spread(...) Operator -------> It is used where we would otherwise write values, separated by a comma

The Rest Patterns  -------> It is used where we would otherwise write variable names, separated by a comma, and not the values separated by commas

*/
