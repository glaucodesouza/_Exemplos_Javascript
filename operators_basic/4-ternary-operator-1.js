/*
Ternary operator
Ternary operator syntax: condition? valueIfTrue : valueIfFalse;

Use Extension Code Runner
to test your code in VS Code terminal*/

const age = 18;

// test 1
console.log("test 1");
const message =
  age >= 18 ? "You are old enough to drive" : "You are not old enough to drive";
console.log(message);
/*results
test 1
You are old enough to drive
*/

console.log("test 2");
age >= 18
  ? console.log("You are old enough to drive")
  : console.log("You are not old enough to drive");
/*results
test 2
You are old enough to drive
*/

console.log("test 3");
const drink = age >= 18 ? console.log("wine 🍷") : console.log("juice 🥃");
/*results
test 3
wine 🍷
*/

console.log("test 4");
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "juice 🥃";
}
console.log(drink2);

/*results
test 4
wine 🍷
*/

console.log("test 5");
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "juice 🥃"}`);
/*results
test 5
I like to drink wine 🍷
*/
