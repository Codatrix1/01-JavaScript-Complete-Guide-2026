"use strict";

//-----------------------------------------------
// LECTURE 111: LOOPING ARRAYS: THE FOR-OF LOOP
//----------------------------------------------

// 🟢 ES6

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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//---------------
// 🔥 while LOOP
//--------------
let idx = 0;
while (idx < menu.length) {
  console.log(menu[idx]);
  idx++;
}

//-------------
// 🔥 for LOOP
//-------------
for (let idx = 0; idx <= menu.length - 1; idx++) {
  console.log(menu[idx]);
}

//-----------------
// 🔥 for-of LOOP
//----------------
for (const eachItem of menu) {
  console.log(eachItem);
}

// ✨✨ What's great about the for-of loop?
// -> 1) Provides a nice level of abstraction
// -> 2) We can use "Continue" and "Break" in it; Others way to loop over arrays
// do not allow to use "Continue" or "Break"

/*
Focaccia
Bruschetta
Garlic Bread
Caprese Salad
Pizza
Pasta
Risotto
*/

// ⭐ getting the index also using the for-of loop: ITS A PAIN 😥
for (const eachItem of menu.entries()) {
  //console.log(eachItem);
  console.log(`${eachItem[0] + 1}: ${eachItem[1]}`);
}

/*
(2) [0, 'Focaccia']
(2) [1, 'Bruschetta']
(2) [2, 'Garlic Bread']
(2) [3, 'Caprese Salad']
(2) [4, 'Pizza']
(2) [5, 'Pasta']
(2) [6, 'Risotto']

1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/

// ⭐ array destructuring right away
for (const [idx, eachItem] of menu.entries()) {
  console.log(`${idx + 1}: ${eachItem}`);
}

/*
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/
