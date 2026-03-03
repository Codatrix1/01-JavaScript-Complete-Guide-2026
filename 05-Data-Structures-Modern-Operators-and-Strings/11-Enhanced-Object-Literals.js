"use strict";

//-----------------------------------------------
// ENHANCED OBJECT LITERALS
//----------------------------------------------

// ES6 Introduced 3 easier ways to write objcet literals (like our restaurant Object)

/*
1) Adding just the varible name in the objcet
2) Adding METHODS with a shortend syntax (No Longer need to write a property added to a function expression)
3) Compute property names, instead of just writing them out manually or literally


*/

//----------
// Array:
//----------
const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

// Compute property name
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  nameOfRestaurant: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // 1] 🟢 ES6 Include object 1 in 2: Enhanced Object Literal Syntax ⭐
  openingHours,

  // 2] Shorten Function: Enhanced Object Literal Syntax ⭐
  orderNew(starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  // Destructuring inside the args itself: with default values
  orderDelivery: function ({
    starterIdx = 0,
    mainIdx = 1,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered at ${address} by ${time} hours`,
    );
  },

  // METHOD: Function to order pasta using the SPREAD Operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your order of pasta with ingrediants ${ing1}, ${ing2}, and ${ing3}`,
    );
  },

  // METHOD: Function to order pizza using the REST Operator
  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant, otherIngrediants);
  },
};

console.log(restaurant);
