//-------------------------
// Truthy and Falsy Values
//-------------------------

// Falsy Values

// falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean.

// In JavaScript, there are only
// 5 Falsy Values: 0, "", null, undefined, NaN

// Question: When Exactly does JavaScript does type coercion to Booleans?
// Ans: It happens in 2 scenerios:
// 1} When using logical operators
// 2} In a logical context for example, in an IF/ELSE statement

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

//---------------------------------------------
// Truthy
// Everything else is Truthy
console.log(Boolean({})); // true
console.log(Boolean("Peter")); // true

//------------
// Example 1
//------------
const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

//-------------
// Example 2
//--------------
let height;
if (height) {
  console.log("Height is defined!");
} else {
  console.log("Height is UNDEFINED");
}
// Height is UNDEFINED

//------------------
// Example 3: BUG: 🐛 This can be fixed by using logical operators
//----------------
// Its a BUG because height can be 0 initially, its actually defined

let newHeight = 0;
if (newHeight) {
  console.log("Height is DEFINED");
} else {
  console.log("Height is UNDEFINED");
}

// Height is UNDEFINED
