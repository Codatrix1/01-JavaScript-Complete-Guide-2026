"use strict";

//---------------------------------------------------------------
//  SETS
//---------------------------------------------------------------

/*

METHODS SHORTCUT for Sets: ⭐ SHADC -> size, has, add, delete, clear

------------------------------
Important use cases: REACT JS used
- Remove duplicates
- Convert object to arrays with unique values with spread [...new Set({'Waiter', 'Chef', 'Manager'})]
-----------------------------------------

In the past, there were only 2 data structures built in JavaScript

Since ES6, two more Data Structures were added to the JavaScript Language.. 
They are Sets and Maps. They also exist in other languages


........................................
🔴 Data Structures in JavaScript
........................................


---> 1. Arrays

---> 2. Objects

---> 3. Maps (Since ES6)

---> 4. Sets (Since ES6) -------->⭕ A set is Collection of Unique Vales. No Duplicates.
                         -------->⭕ We need to pass an ITERABLE like an Array as the value
                         -------->⭕ It can HOLD ANY Data Type
                         -------->⭕ They are also Iterables Like an Array



🟢 Whats the difference between an ARRAY and A Set ?

They look like an array, but they are ⚡ different from an array:
--->  as the elements are Unique, 
---> and also that the Order in a Set is IRRELEVANT

// ⚡ How do we Retrieve Values from a Set?
// There is NO WAY of getting Vales from a Set. We ❌ cant Use Index. There is no point of getting value in a set, as it has no order.



>>>>>>>>>>> Most Common Iterable, is an ARRAY

*/

const cuisineSet = new Set([
  "Pizza",
  "Rissoto",
  "Pasta",
  "Pizza",
  89,
  89,
  true,
  true,
]);

// NO DUPLICATES: NO INDEXES
console.log(cuisineSet); // Set(5) {'Pizza', 'Rissoto', 'Pasta', 89, true}
console.log(new Set("Ankur")); // Set(5) {'A', 'n', 'k', 'u', 'r'}

// SIZE Method Of a Set
console.log(cuisineSet.size); // 5

// has("") Method of a Set: Similar to "includes" Method in arrays
console.log(cuisineSet.has("Pizza")); // true

// add new elements to a set
cuisineSet.add("Garlic Bread");
cuisineSet.add("Garlic Bread");

console.log(cuisineSet); // Set(6) {'Pizza', 'Rissoto', 'Pasta', 89, true,'Garlic Bread'}

// delete
cuisineSet.delete("Rissoto");
console.log(cuisineSet); // Set(5) {'Pizza', 'Pasta', 89, true, 'Garlic Bread'}

//-------------------------------------------
// ⚡ How do we Retrieve Values from a Set?
//-----------------------------------------------
// There is NO WAY of getting Vales from a Set. We ❌ cant Use Index. There is no point of getting value in a set, as it has no order.

// DELETE ALL using clear()
// cuisineSet.clear();
// console.log(cuisineSet); // Set(0) {size: 0}

//-----------------
// LOOPING on SETS
//-----------------
for (const eachItem of cuisineSet) console.log(eachItem);

/*
Pizza
Pasta
89
true
Garlic Bread

*/

//..........................................................
// ⚡ ONE BIG USE CASE of SETS ⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡
//..........................................................

//  ------> ✅ To Remove Duplicate Values in an Array

// Example: We want to see only unique positions in a restaurant staff members
const allStaff = ["Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(allStaff);

console.log(staffUnique); // Set(3) {'Waiter', 'Manager', 'Chef'}

//----------------------------------------------------
// Convert from Object to Array to make it iterable
//----------------------------------------------------
const myArray = [...new Set(allStaff)];
console.log(myArray); // (3) ['Waiter', 'Manager', 'Chef']

// GET THE UNIQUE POSITION SIZE
console.log(new Set(allStaff).size); // 3

// Other Example
console.log(new Set("Peter")); // Set(4) {'P', 'e', 't', 'r'}

// 🔴 Important Note: Sets are not intended to replace Arrays at all. Whenever we need to store data, which contains duplicates, always use ARRAYS. The arrays also have an access to a lot of ARRAY Methods. which allows us to Manipulate Data, that we have to study later. Sets are only useful, when we need to work with UNIQUE data. So, we should focus more on Array and Array Methods.
