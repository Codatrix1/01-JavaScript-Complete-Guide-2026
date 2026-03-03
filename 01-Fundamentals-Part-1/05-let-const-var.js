// let, const, var

// let, const --> Introduced in ES6/2015

//-----------------------------
// let (Mutable) BLOCK SCOPED
//-----------------------------
let age = 30;
age = 31;

let year = 1989;
year = 1990;

console.log(age, year); //31 1990

//--------------------
// const (Immutable)
//---------------------
const birthYear = 1989;
// birthYear = 1991; // script.js:20 Uncaught
// // TypeError: Assignment to constant variable. at script.js:20:11

// const job; // Uncaught SyntaxError: Missing initializer in const declaration (at script.js:23:7)

//--------------------------------------------
// var (Legacy -> Mutable) FUNCTION SCOPED
//--------------------------------------------
var job = "programmer";
job = "technical writer";
console.log(job); // technical writer

//-----------------------------------------
// Creating variable in the GLOBAL SCOPE
// 🚫 Dont Ever Do this
//-----------------------------------------
lastName = "smith";
console.log(lastName);
