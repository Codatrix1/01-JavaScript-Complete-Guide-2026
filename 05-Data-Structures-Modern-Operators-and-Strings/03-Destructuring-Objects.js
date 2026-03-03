"use strict";

//------------------------------------
// OBJECT DESTRUCTURING
//------------------------------------
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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

// In Object destructuring, the order does not matter
// Object destructuring is used when we deal with data from the
// external API, third-party data like weather data, Movies data, or any data that comes
// in form of objects from the API

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

/*
Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
*/

//----------------------------------------------------------------
// 🔥 Renaming the variables in the object: Using DESCTRUCTURING
//---------------------------------------------------------------
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

/*
Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
*/

//------------------------------------------------------------
// 🔥 Renaming the variables in the object: with Default Values
//-----------------------------------------------------------
// ✨ USE CASE: When dealing with theird-party API data, if the data
// isn't available, instaed of getting undefined, we can put a default
// value isn't available

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

/*
[] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
*/

//-------------------------------------
// 🔥 Mutating variables in the object
//-------------------------------------
let firstName = "Peter";
let lastName = "Quinn";

const obj = {
  firstName: "Carrie",
  lastName: "Mathison",
  location: "Washington DC",
};

// Wrap destructing assignment into Parenthesis ({})
({ firstName, lastName } = obj);

console.log(firstName, lastName); // Carrie Mathison

//-------------------------------------
// 🔥 NESTED Destructuring + Renaming
//-------------------------------------
console.log(openingHours);

/*
{thu: {…}, fri: {…}, sat: {…}}
fri
: 
{open: 11, close: 23}
sat
: 
{open: 0, close: 24}
thu
: 
{open: 12, close: 22}
[[Prototype]]
: 
Object
*/

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c); // 11 23

//--------------------------------------------------------------
// ⭐🔥🔥🔥 DESTRUCTURING OBJECT INSIDE A METHOD FUNCTION
//--------------------------------------------------------------
// 🍕🍟 Like in React while getting data from the API, or just in JavaScript

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

//------------------------------------
// WITH ALL OBJECT PROPERTIES PRESENT
//------------------------------------

console.log(
  restaurantOne.foodDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    starterIndex: 2,
    mainIndex: 2,
  }),
);

// Order received! You will get Garlic Bread and Risotto at 22:30 delivered to Via del Sole, 21

//------------------------------------
// WITH SOME OBJECT PROPERTIES MISSING
//------------------------------------
console.log(
  restaurantOne.foodDelivery({
    address: "Via del Sole, 21",
    starterIndex: 3,
  }),
);

// Order received! You will get Caprese Salad and Pizza at 20:00 delivered to Via del Sole, 21
