/*
Ternary operator 2
Ternary operator syntax: condition? valueIfTrue : valueIfFalse;

Use Extension Code Runner
to test your code in VS Code terminal
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);
