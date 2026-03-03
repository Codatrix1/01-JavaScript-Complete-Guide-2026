// Operators - Allows us to transform values OR combine multiple values

//----------------------------------------------
// 1) Mathematical or Arithematic Operators
//----------------------------------------------
const yearNow = 2049;

const ageRick = yearNow - 1951;
const ageMorty = yearNow - 2000;

console.log(ageRick, ageMorty); // 98 49

console.log(ageRick * 2, ageMorty / 10, 2 ** 3); // 196 4.9 8
// 2 ** 3 means 2 raised to the power of 3 = 2 * 2 * 2

const firstName = "Morty";
const lastName = "Smith";

console.log(firstName + " " + lastName); // Morty Smith

//---------------------
// 2) typeof operator
//---------------------
console.log(typeof 345); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof yearNow); // number

//-------------------------
// 3) Assignment Operator
//------------------------
let x = 10 + 5;
console.log(x); // 15

x += 10; // x = x + 10
console.log(x); // 25

x *= 4; // 25 * 4
console.log(x); // 100

x++; // x = x + 1
console.log(x); // 101

x--;
x--;
console.log(x); // 99

//------------------------------------------------------
// 4) Comparison operators: To produce boolean values
//-----------------------------------------------------

// >, < , <=, >=

console.log(ageMorty > ageRick); // false
console.log(ageMorty <= ageRick); // true

console.log(ageMorty >= 18); // true

const isFullAge = ageMorty >= 18;
console.log(isFullAge); // true

// with Expression
const now = 2025;
console.log(now - 1991 > now - 2025); // true
