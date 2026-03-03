/*
🔴 Object type

//---------------------------
✨ 7 Primitive Data Types
//--------------------------

- Numbers -> Floating point numbers
- Strings -> Sequence of characters, text
- Booleans -> true or falso
 
- Undefined -> Value taken by the vaiable that is not defines
- Null -> Also means empty value 

- Symbols(ES2015/ES6) -> Value that is unique and cannot be changes, [Discussed Later in the course]
- BigInt(ES2020) -> Large integers than the Number types can hold [Discussed Later in the course]


JavaScript has dynamic typing: We do not have to manually define data type
of the value strored in a variable. JavaScript determines it automatically.
*/

//-----------------------------------
// Numbers: Floating point numbers
//----------------------------------
let age = 35;
console.log(typeof age); // number

// Strings
let firstName = "Ankur";
console.log(typeof firstName); // string

// Boolean
let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun); // boolean

// Dynamic Typing -> New value type assigned
// Note that variable does not have a type: Value has a type
// Reassigning
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun); // string

// Undefined
let yearNow;
console.log(yearNow); // undefined
console.log(typeof yearNow); // undefined

// Null
//🐛 BUG -> NEVER corrected due to legacy reasons
// the typeof null is actually null
let notSure = null;
console.log(typeof notSure); // object
console.log(typeof null); // object

//---------------
// Object Type
//--------------
const details = {
  name: "Peter",
  email: "peter@example.com",
  age: 35,
};

console.log(typeof details); // object
