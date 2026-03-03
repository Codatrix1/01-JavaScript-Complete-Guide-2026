//---------------------------------
// Equality Operators == VS ===
//---------------------------------

// === Strict Equality: No type Coercion
// == loose Equality

//-----------------------------------
// LOOSE EQUALITY COMPARISON ==
//---------------------------------
const firstNumber = 88;
if (firstNumber == "88") {
  console.log("This is a loose comparison with type coercion");
}

// This is a loose comparison with type coercion

//-----------------------------------
// STRICT EQUALITY COMPARISON ===
//---------------------------------
const age = 18;
if (age === 18) {
  console.log("You are an adult");
}

// You are an adult

const newAge = 19;
if (newAge === "19") {
  console.log("You are 19 years old");
} else {
  console.log("Voila");
}
// Voila

//--------------------------------------

const favNumber = Number(prompt("What's your fav number?"));

console.log(favNumber); // 56
console.log(typeof favNumber); // number

if (favNumber === 99) {
  console.log("Cool! 99 is a nice number");
} else if (favNumber === 7) {
  console.log("7 is also a nice number");
} else {
  console.log(`${favNumber} is a nice nice number`);
}

if (favNumber !== 99) {
  console.log("Why not 99?");
}

// 56 is a nice nice number
// Why not 99?
