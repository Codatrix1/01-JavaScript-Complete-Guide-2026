"use strict";

//------------------------------------------------
// OPTIONAL CHAINING (?.) 🟢 ES2020 :
//------------------------------------------------

//-------------------------------------------------------
// 🟢 Definition: CHECKS IF VALUE ON THE LEFT EXISTS
//------------------------------------------------------

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

  // METHOD: Function to order pizza using the REST Operator
  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant, otherIngrediants);
  },
};

//-------------------------------
// GET OPENING HOURS FOR monday
//-------------------------------
// Let's say we are getting data from a WebAPI
// and we do not know if this property exists
// In our case, we do not know if the restro opens
// on Monday or not!

// console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // Error

// Check for Monday
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open); // No Output
}

//----------------------------------------------------------
// 🟢 ES2020 : Avoiding ERRORS with Optional Chaining (?.)
//----------------------------------------------------------
// With Optional Chaining, if a certain property does not exist,
// undefined is returned immediately; this helps avoids error!

// Uses the concept of Nullish; so, if there's 0 or empty string "", it still considers that a TRUTHY Value.

//console.log(restaurant.openingHours.mon.open); // Error!

// WITH OPTIONAL CHANING ?.
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined

// Example: OPTIONAL CHAINING with Nullish Coalescing
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Loop over eaach item and check restro is open or closed on each day

//----------------------------------------------------------------------
// Using OPTIONAL CHAINING + NULLISH COALESING OPERATOR (for handling 0 hours, that's saturday - its open 24/7)
//---------------------------------------------
// Also, since we need to compute day name dynamically,
// we gotta use the "BRACKETS" Notation (that we learned in the fundamentals section)

for (const eachDay of days) {
  // console.log(restaurant.openingHours[eachDay]);
  // const openAt = restaurant.openingHours[eachDay]?.open || "closed";
  const openAt = restaurant.openingHours[eachDay]?.open ?? "closed"; // To handle "0"
  console.log(`On ${eachDay}, we're open at ${openAt} hours`);
}

/*
On mon we open at closed
On tue we open at closed
On wed we open at closed
On thu we open at 12
On fri we open at 11
On sat we open at 0
On sun we open at closed

*/

//---------------------------------------------------------------
// Using Optional Chaining ?. and NULLISH COALESING with METHODS
//---------------------------------------------------------------

console.log(restaurant.order?.(0, 1) ?? "Method does not exist!"); // (2) ['Focaccia', 'Pasta']
console.log(restaurant.orderNoodles?.(0, 1) ?? "Method does not exist!"); // Method does not exist

//---------------------------------------------------------------
// Using Optional Chaining ?. and NULLISH COALESING with ARRAYS
//---------------------------------------------------------------
const users = [
  { firstName: "Peter", job: "Analyst" },
  { firstName: "Carrie", job: "Station Chief" },
];

console.log(users[0]?.firstName ?? "USER ARRAY EMPTY!");

//----------------------
// CONVENTIONAL WAY
//--------------------
if (users.length > 0) {
  console.log(users[0].firstName);
} else {
  console.log("User Array is EMPTY!");
}
