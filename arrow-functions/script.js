
// EXAMPLE 1
// function declaration
function calcAge1(birthYeah){
  return age = 2037 - birthYeah;
}

const age1 = calcAge1(1992);
console.log(age1);

// EXAMPLE 2
// Anonymous function
// also know as Function expression
// Function expression always return a value
const calcAge2 = function (birthYeah) {
  return age = 2037 - birthYeah;
}

const age2 = calcAge2(1992);
console.log(age1, age2);

// EXAMPLE 3
// ARROW FUNCTION
// only one parameter: birthYeah
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age1, age2, age3);

// EXAMPLE 4
// arrow function 2
// only one parameter: birthYeah
const yearsUltilRetirement = birthYeah => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return retirement;
}

console.log(yearsUltilRetirement(1991));

// EXAMPLE 5
// arrow function 3
// 2 parameters: birthYeah, firstName
const yearsUltilRetirement2 = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUltilRetirement2(1991, 'fulano de tal'));