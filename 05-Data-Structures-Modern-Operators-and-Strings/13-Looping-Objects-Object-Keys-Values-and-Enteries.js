"use strict";

//---------------------------------------------------------------
// LOOPING OBJECTS: Object Keys, Values and Entries
//---------------------------------------------------------------

// We can use over Arrays, that are iterable, but we can ALSO
// LOOP Over Objects (that are not iterable) in an INDIRECT WAY!

const restaurant = {
  nameOfRestaurant: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  // Destructuring inside the args itself: with default values
  orderDelivery: function ({
    stIndex = 0,
    mnIndex = 1,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[stIndex]} and ${this.mainMenu[mnIndex]} will be delivered at ${address} by ${time} hours`,
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

//---------------------------------
// ⁉️ So, we gotta decide whether
//----------------------------------
// 1) We want to loop over OBJECT keys?
// 2) LOOP Over OBJECT values
// 3) LOOP Over BOTH!

const openingHours = {
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
};

//----------------------------------------------------
// Object.keys(), Object.values(), Object.entries()
//----------------------------------------------------

//--------------------
// 1) Looping Over Keys
//-------------------
for (const eachDay of Object.keys(openingHours)) {
  console.log(eachDay);
}

/*
thu
fri
sat
*/

const properties = Object.keys(openingHours);
console.log(properties); // (3) ['thu', 'fri', 'sat']

for (const eachDay of properties) {
  console.log(eachDay);
}

//--------------------------------------
// Calculate how many days are we open
//-------------------------------------
let openStr = `We're open on ${properties.length} days: `;
console.log(openStr); // We're open on 3 days:

for (const eachDay of properties) {
  openStr = openStr + `${eachDay}, `;
}

console.log(openStr);
// We're open on 3 days: thu, fri, sat,

//---------------------------------------
// 2) Looping Over Object to get Values
//--------------------------------------
for (const eachValue of Object.values(openingHours)) {
  console.log(eachValue);
}
/*

{open: 12, close: 22}
{open: 11, close: 23}
{open: 0, close: 24}

*/

const values = Object.values(openingHours);
console.log(values);

/*
(3) [{…}, {…}, {…}]
*/

//--------------------------------------------
// ✨✨✨ 3) Looping Over Object to get Entire OBJECT
// 🎊 MOST USED in Real-world Projects
//--------------------------------------------
// ENTIRE OBJECT: Property NAMES + Property VALUES
for (const eachEntry of Object.entries(openingHours)) {
  console.log(eachEntry);
}

/*

(2) ['thu', {…}]
(2) ['fri', {…}]
(2) ['sat', {…}]
*/

// simple destructuring[ key, value]
for (const [key, value] of Object.entries(openingHours)) {
  console.log(key, value);
}

/*
thu {open: 12, close: 22}
fri {open: 11, close: 23}
sat {open: 0, close: 24}

*/

//-------------------------
// NESTED DESTRUCTURING
//----------------------
// nested destructuring: [key, { open, close }]

for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(
    `On ${day}, we open at ${open} hours and close at ${close} hours`,
  );
}

console.log(Object.entries());
