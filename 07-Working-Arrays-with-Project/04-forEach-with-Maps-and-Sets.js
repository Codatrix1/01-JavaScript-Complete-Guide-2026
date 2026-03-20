"use strict";
//............................
// forEach() with Maps and Sets
//............................

// forEach() Array Method: Works with Maps and for Sets

// 🗺️ forEach with Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, fullMap) {
  console.log(`${key}: ${value}`);
});

/*
USD: United States dollar
EUR: Euro
GBP: Pound sterling
*/

//...............
// 🥝 forEach with Sets
//..............
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

//.........................................
// "_" -> Underscore is the conventions to denote Throwaway/Unrequired variable in JavaScript
//-------------
currenciesUnique.forEach(function (value, _, fullSet) {
  console.log(`${value}: ${value}`);
});

// The forEach Method for Set has NO INDEX, NO KEY; It just has a Value
// To implement forEach() Method, the creators of forEach() kept the same
// signature of args arrangement to prevent confusion among devs.
