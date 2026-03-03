"use strict";

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
};

//---------------------------
// The Spread Operator (...)
//---------------------------
// Let's talk about the amazing Spread(...) operator.
// We can use the spread operator
// to basically expand an array into all its elements,
// so its unpacking all the array elements at once.

// Conventional Way

const arr = [2, 4, 5];
const badNewArr = [23, 56, arr[0], arr[1], arr[2]];

console.log(badNewArr); // (5) [23, 56, 2, 4, 5]

// Using Spread Operator {...}
// Using Spread {...}
// ✅ But we can do it in much better way using the spread operator since ES6,
// It takes the elements out of the array and write them individually.
// We use the spread array whenever we need to write mulyiple values,
// separated by commas.
// It happens when we write an array literal, like we did in our code.

const goodNewArray = [56, 78, arr];
console.log(...goodNewArray); // 56 78 (3) [2, 4, 5]

// The below writes the individual items of the array using the spread operator❗
const goodNewArrayOne = [34, 56, ...arr];
console.log(goodNewArrayOne); // (5) [34, 56, 2, 4, 5]

//----------------------------------------------------------
// 🔥 EXAMPLE: One more food item in the mainMenu Array
//---------------------------------------------------------
// CREATES A COMPLETELY NEW ARRAY: Does not mutate the original array

const newMainMenu = [...restaurant.mainMenu, "Burger"];
console.log(newMainMenu); // (4) ['Pizza', 'Pasta', 'Risotto', 'Burger']

// The Spread Operator is similar to de-structuring, as they both helps us to get elements out of arrays.

//........................................................................
// ✅ But, Whats the BIG difference between the De-Structuring and
//  the Spead Operator(...) ❓❓❓
//.....................................................................
//
//
//❗❗❗ NOTE - Important

// The Spread Operator(...) -----> Takes all the elements from the array,
// and it also DOES NOT CREATE NEW Variables.
// And as a consequence, WE CAN ONLY USE IT, in places where
// we would otherwise write the values separated by Commas

//----------------------------------------------------------------
// ⭕ The 2 VERY Important Use Cases of the Spread(...) Operator
//----------------------------------------------------------------

//------> 1. Create Shallow Copies of Arrays
//------> 2. Merge/Join 2 or more arrays Together

//--------------------------
// ✨ 1) Shallow Copy array
//--------------------------
const mainMenuCopy = [...restaurant.mainMenu];

//------------------------------------
// ✨ 2) Join/Merge Two or More arrays
//-------------------------------------
// Example: Merge the mainMenu and the starterMenu

const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu);
// (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//---------------------------------------------------------------------
//  ✅ We see that the Spread (...) Operator works entirely on arrays, but that's not
// entirely true,because the Spread(...)
// Operator works on all called ♻ ITERABLES

//-------------------------
// 🔴 What are Iterables?
//------------------------

// There are many Iterables in JavaScript. We will see that in future sections.
// For now, They are things like all arrays, strings, maps, or sets, BUT ❌ NOT OBJECTS 🔴

const str = "Peter";

// We can use Spread(...) Operater while Building an Array OR
// When We pass values into a function

// 1) Building an Array
const letters = [...str, " ", "Q."];
console.log(letters); // ['P', 'e', 't', 'e', 'r', ' ', 'Q.']

// 2) Passing a value into a function
console.log(...letters); // P e t e r   Q.

// The below is NOT ALLOWED
// console.log(`${...str} Quinn`)

// -------------------------------------------------------------
//  Real Life Example ✅ // Real World Application - Use Case
// -------------------------------------------------------------

const restaurantOne = {
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
};

// Function to order pasta using the Spread Operator: // ⭕ Very important - ES6
const ingrediants = ["mushrooms", "corns", "cheese"];

const myPasta = restaurantOne.orderPasta(...ingrediants);
console.log(myPasta);

//--------------------------------------------
// ❗❗ Since ES2018, We can also use Spead Operators on Objects..
// Even Though They are NOT Iterables ♻.
// Very Important To Remember ✅ ⭕ Very important
//--------------------------------------------------

// With Objects

const newRestaurantAnkur = {
  founder: "Ankur",
  foundingYear: 2000,
  ...restaurantOne,
};

console.log(newRestaurantAnkur);

// {founder: 'Ankur', foundingYear: 2000, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), …}

//----------------------------
// 🔥 MAKING A SHALLOW COPY
//---------------------------

const restaurantAnkurCopy = { ...newRestaurantAnkur };
restaurantAnkurCopy.name = "Taste of Punjab";

console.log(newRestaurantAnkur.name); // Classico Italiano
console.log(restaurantAnkurCopy.name); // Taste of Punjab
