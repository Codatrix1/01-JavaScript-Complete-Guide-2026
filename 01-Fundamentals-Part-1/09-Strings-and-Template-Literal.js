//-------------------------------
// Strings and Template Literal
//-------------------------------
const firstName = "Rick";
const job = "Scientist";
const birthYear = 1951;
const now = 2049;

const about = `My name is ${firstName}, a ${now - birthYear} year old ${job}!`;

console.log(about); // My name is Rick, a 98 year old Scientist!

console.log(`This is a regular string...`);

console.log(`This is a 
multi-line 
string...`);

console.log(
  "This is also \n\
multi-line \n\
string"
);
