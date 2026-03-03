"use strict";

//----------------------------------
// MAPS: Fundamentals
//----------------------------------
//---------
// 🟢 ES6
//--------

// MAP SHORTCUT METHODS: ⭐ SG HD SC: set,get,has,delete,size,clear

// Maps as the name suggests are NOT The same, as we know.
//------> MAPS - Maps in JavaScript are the Data Structures that we can use to MAP/ASSIGN Values to KEYS
//
//
//    ⭕ MAP ------>   MAP Values ------> Keys

//    🔴 Just like the Object, this also makes the KEY : "VALUE" pairs
//
//.......................................................
//    🟢 Whats the difference between OBJECTS and SETS ?
//.......................................................
//
// In MAPS, The KEY can be of any type. And This is very useful

//  OBJECTS --------> Keys -----> Strings Only

//  MAPS ------------> Keys -----> Strings, Numbers, Booleans, Objects, Arrays, Other Maps

// ⭕ When we keep adding elements, Programmtically using CODE, then the set method is used

//-----------------------------------------
// Create a new Map using the constructor
//-----------------------------------------
const restaurant = new Map();

//-----------------------
// add key: value pairs
//-----------------------
restaurant.set("name", "Classico Italiano");
restaurant.set(1, "Firenze, Itealy");

// Calling the set method like this not only updates the map
// that it's called ON, but also RETURNS the map
console.log(restaurant.set(2, "Lisbon, Portugal"));
// Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Itealy', 2 => 'Lisbon, Portugal'}

//-------------------------------------------------------------------
// 🔗 Since it also returns the map, you can Chain "set" method to add multiple items at one time since it immediately returns
restaurant
  .set("categories", ["Italian", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We're open!")
  .set(false, "We're closed!");

console.log(restaurant);
// Map(8) {'name' => 'Classico Italiano', 1 => 'Firenze, Itealy', 2 => 'Lisbon, Portugal', 'categories' => Array(3), 'open' => 11, …}

//----------------------------------------------------------------
// ⭕ Reading Data from a Map -----> mapName.get("key") Method
//---------------------------------------------------------------
// data types matter while we retrieve data
console.log(restaurant.get("name")); // Classico Italiano
console.log(restaurant.get(true)); // We're open!
console.log(restaurant.get(1)); // Firenze, Itealy

console.log(restaurant.get("1")); // undefined
console.log(restaurant.get("true")); // undefined

//---------------------------------------------------------
// Getting result: Evaluating the value and retrieving data
//----------------------------------------------------------
const time = 21;
const getStatus = restaurant.get(
  time > restaurant.get("open") && time < restaurant.get("close"),
);

console.log(getStatus);

//--------------------
// MORE MAP METHODS
//--------------------
// check for properties: has
console.log(restaurant.has("categories")); // true

// delete property
restaurant.delete(1);
console.log(restaurant);

// size property
console.log(restaurant.size); // 7

// clear all
// restaurant.clear(); // Map(0) {size: 0}

//----------------------
// USING ARRAYS AS KEYS
//----------------------
const orangeMap = new Map();

const arrayAsKey = [1, 2, 3]; // This is what get stored in the heap; and that's why we can use it to get data from the orangeMap

orangeMap.set(arrayAsKey, "Hello");

console.log(orangeMap); // Map(1) {Array(3) => 'Hello'}
console.log(orangeMap.get(arrayAsKey)); // Hello

//-----------------------------------
// setting a DOM element as the key
//------------------------------------
orangeMap.set(document.querySelector("h1"), "Heading of the DOM");
console.log(orangeMap); // Map(2) {Array(3) => 'Hello', h1 => 'Heading of the DOM'}
