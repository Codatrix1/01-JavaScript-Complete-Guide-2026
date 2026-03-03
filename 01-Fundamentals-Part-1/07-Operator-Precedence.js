//----------------------
// Operator Precedence
//----------------------

const yearNow = 2049;

const ageRick = yearNow - 1951;
const ageMorty = yearNow - 2000;

console.log(ageMorty > ageRick); // false
console.log(ageMorty <= ageRick); // true

console.log(ageMorty >= 18); // true

const isFullAge = ageMorty >= 18;
console.log(isFullAge); // true

// with Expression
const now = 2025;
console.log(now - 1991 > now - 2025); // true

console.log(25 - 10 - 5); // 10

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); // 10 10

// Precedence
const ageAverage = (ageMorty + ageRick) / 2;
console.log(ageMorty, ageRick, ageAverage);
