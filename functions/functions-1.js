/*
functions

Use Extension Code Runner
to test your code in VS Code terminal
*/

"use strict"; // to show errors when executing

console.log("test 1");
function logger() {
  console.log("My name is Jonas");
}

logger();
logger();
logger();
/*results
test 1
My name is Jonas
My name is Jonas
My name is Jonas
*/

console.log("test 2");
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juices = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juices;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
/*results
test 2
5 0
Juice with 5 apples and 0 oranges.
5 0
Juice with 5 apples and 0 oranges.
*/

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
/*results
2 4
Juice with 2 apples and 4 oranges.
*/

// Number Javascript function
const num = Number("23");
console.log(num);
/*results
23
*/
