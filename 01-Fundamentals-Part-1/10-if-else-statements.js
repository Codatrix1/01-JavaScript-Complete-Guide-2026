//----------------------------------------
// Taking Decisions (if/else) Statements
//----------------------------------------

// This is called a Control Structure since we are taking decisions from this code which may or may not be linear

const currentAge = 15;

if (currentAge >= 18) {
  console.log(`Morty can have his Driving License`);
} else {
  const yearsLeft = 18 - currentAge;
  console.log(`Morty have to wait ${yearsLeft} years to drive :)`);
}

//-------------------------------------------

const birthYear = 2015;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`The person was born in ${century}st century`);
