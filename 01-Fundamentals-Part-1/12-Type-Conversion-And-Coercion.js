//------------------------------------
// Type Conversion and Type Coercion
//------------------------------------

//----------------------------------------------------------------
// Type Conversion: We manually convert from one type to another
//----------------------------------------------------------------
const birthYear = "1991";
console.log(typeof birthYear); // string

console.log(typeof Number(birthYear)); // number
console.log(typeof +birthYear); // number

const firstName = "Peter";
console.log(Number(firstName)); // NaN

console.log(2025, String(2025)); // 2025 '2025'

console.log(typeof NaN); // number

//------------------------------------------------------------------
// Type Coercion: JavaScript automatically converts from one type to another.
// Coercion happens when an operator converts the value type to some other.
// JavaScript does that behind the scenes.
//-------------------------------------------------------------------

// +, *, / triggers coercion: Numbers to string

console.log(`I am ` + 30 + " years old"); // I am 30 years old
console.log(`I am ` + "30" + " years old"); // I am 30 years old

// - does not trigger type coercion to string
console.log("100" - "8" - 1); // 91

//-------------------
// Guess the number
//-------------------
let n = "1" + 1; // 11
n = n - 1;
console.log(n); // 10

//----------------
// More examples
//----------------
console.log(100 + "1" + "1"); // 10011
console.log(100 - "2" - "2"); // 96

console.log(100 * "2" + "2"); // 2002
console.log(100 / "2" + "4"); // 504

console.log(100 / "2" / "4"); // 12.5
