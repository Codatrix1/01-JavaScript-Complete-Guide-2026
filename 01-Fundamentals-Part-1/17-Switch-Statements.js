//--------------------
// SWITCH Statements
//-------------------

const day = "friday";

switch (
  day // day === "monday" : STRICT Comparison
) {
  case "monday":
    console.log("Plan for the week");
    console.log("Go to the code meetup");
    break;
  case "tuesday":
    console.log("Prepare for coding lessons");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code");
    break;
  case "friday":
    console.log("More code");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("Not a valid day");
}

//-----------------------------------------------
if (day === "monday") {
  console.log("Plan for the week");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare for coding lessons");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("More code code code");
} else if (day === "saturday" || day === "friday") {
  console.log("Enjoy weekend! ✨");
} else {
  console.log("Not a valid day");
}
