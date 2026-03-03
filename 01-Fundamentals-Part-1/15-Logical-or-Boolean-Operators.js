//-----------------------------------
// Boolean Logic/ Logical Operators
//-----------------------------------

const hasDriversLicense = true;
const hasGoodVision = true;
const hasOwnCar = true;

// && -> AND, || -> OR , ! -> NOT
console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

if (hasDriversLicense && hasGoodVision) {
  console.log("Morty can drive!");
} else {
  console.log("Someone else should drive");
}

// Morty can drive!

if (hasDriversLicense && hasGoodVision && hasOwnCar) {
  console.log("YES! Morty can of course drive");
}

// YES! Morty can of course drive

if (hasDriversLicense && hasGoodVision && !hasOwnCar) {
  console.log("He cannot drive since he has no car");
} else {
  console.log("Oops! He cannot");
}

// Oops! He cannot
