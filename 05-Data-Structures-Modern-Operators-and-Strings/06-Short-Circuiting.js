"use strict";
//-------------------------------------------
// SHORT CIRCUITING (&& AND ||)
//-------------------------------------------

//.................................................
// There are 3 Properties of the Logical Operators
//.................................................
//
//
// 1.) They can USE any Data Type
// 2.) They can RETURN any Data Type
// 3.) Short-Circuiting (Short-Circuit Evaluation)

//...................
// About Short-Ciruiting
//...................

// ⭕ In the case of OR Operator (||), if the first value (operand) is a TRUTHY Value, it will immediately return The TRUTHY Value. The other value/Operand will not be Evaluated
// ✅ The operands with the logical operators need not to be only Boolean. It can be any expression or value.

//-----------------------------------------------------
//      🔥🔥  SHORT CIRCUITING WITH OR (||) OPERATOR
//-----------------------------------------------------
// The result doesnt have to be only boolean. It just displays the truthy value
console.log("----- OR Operation -----");

console.log(24 || "Peter"); // 24
console.log("" || "Peter"); // Peter
console.log(true || 0); // true
console.log(undefined || null); // null: Its an Object (Legacy BUG).. a FALSY VALUE - NO Short-Circuiting
console.log(false || false); // false: When JavaScript finds the first value as Falsy, it will continue evaluating. When it reaches the 2nd value as FALSY it then displays it - No short-circuiting happens

console.log(undefined || 0 || "" || "Hello! Morty" || 45 || null); // Hello! Morty

// ⭕  As we already know that, in the case of OR (||), if any value is a TRUTHY Value, it will immediately evaluate to the TRUTHY Value. This this also makes sense during Short-Circuiting

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

//.....................................
// ⭕ A Practical Example
//.....................................
//
// Lets say if we want to count the number of Guests in our Restaurant Object, we don't know, if the property numGuests exists. However, we want to define a Variable, if its present.
//
//......If its NOT, we want a DEFAULT Value for it.

//--------------------------
// with TERNARY Operator
//-------------------------
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

//-------------------------
// with SHORT CIRCUITING
//------------------------
// <----- TO BE SOLVED in NEXT LECTURE: Since "0" is supposed to be a REAL NUMBER, IT SHOULD NOT BE EVALUATED AS FALSEY

restaurant.numGuests = 12;
const guests2 = restaurant.numGuests || 23;
console.log(guests2); // 12

//---------------------------------------------
// 🔥🔥 SHORT CIRCUITING WITH AND (&&) OPERATOR
//--------------------------------------------
// Works in the exact opposite way as the OR operator
// The AND operator short circuits when the first value is FALSEY without
// even evaluating the next operand
console.log("----- AND Operation -----");

console.log(0 && "Hello! There"); // 0
console.log(78 && "Peter"); // Peter

console.log("Hello" && 24 && null && 78); // null

//-------------------
// PRACTICAL EXAMPLE
//------------------
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "cheese", "corn");
}

// mushrooms (2) ['cheese', 'corn']

restaurant.orderPizza &&
  restaurant.orderPizza("mushrooms", "onion", "cheese", "corn");

// mushrooms (3) ['onion', 'cheese', 'corn']
