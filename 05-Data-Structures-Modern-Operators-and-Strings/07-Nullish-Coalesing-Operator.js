"use strict";
//-----------------------------------------------
// NULLISH COALESCING Operator (??)
//------------------------------------------------
/*
.............................
🟢 Introduced in ES2020 🟢
.............................
?? - For Nullish Coalescing Operator, the nullish Values are 

1.) null
2.) undefined

⭕ Note: 0 and ""(Empty String) -------------> Truthy or NON NULLISH Values

// ?? - Nullish Coalescing  - Since ES2020 - Works with the concept of Nullish values, instead of FALSY Values.. Thus, including 0 and undefined variable... 0 and "" are Truthy Values.. Only Nullish VAlues will Short-Circuit The evaluation here              

*/
//.....................................
// 🔴 OUR DATA
//.....................................
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

//---------------------------------------------------------
// Short Circuiting using || (OR) to set the default value
//---------------------------------------------------------
const guests = restaurant.numGuest || 11;
console.log(guests); // 11

//--------------------------------------------------
// THE "0" Problem: Solved with Nullish Coalescing
// 🔥 INTRODUCED in ES2020
//--------------------------------------------------

// 😥 OUR PROBLEM with the || (OR) Operator
restaurant.numGuest = 0;
const guests1 = restaurant.numGuest || 15;
console.log(guests1); // 15

// Nullish values: undefined and null (NOT 0 or "")
const guestsCorrect = restaurant.numGuest ?? 17;
console.log(guestsCorrect); // 0

// ?? - Nullish Coalescing  - Since ES2020 - Works with the concept of Nullish values, instead of FALSY Values.. Thus, including 0 and undefined variable... 0 and "" are Truthy Values.. Only Nullish VAlues will Short-Circuit The evaluation here
