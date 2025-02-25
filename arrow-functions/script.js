//Function Declaration
//Function that can be used before it's declared
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

//Function expression
//Essentially a function value stored in a variable
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

console.log(calcAge1(1992));
console.log(calcAge2(1992));
console.log(calcAge3(1992));
