/*
operators
=== and == 

you can run it using code runner extension for vs code
*/

let age;
age = 18;
if (age === 18 ) console.log(`You just became an adult :D`);

age = 19;
if (age === 18 ) console.log(`You just became an adult :D`);

// === and == operators are not the same. === checks if both values are of the same type and value. == checks if the values are equal.
// == does type coercion, so '18' == 18 is true
console.log(`'18' == 18`,'18' == 18); //result: '18' == 18 true

console.log(`'18' === 18`,'18' === 18); //result: '18' === 18 false

/* 
=== checks if both values are of the same type and value. 
== checks if the values are equal.
prompt so funciona em pagina web
e retorna uma string do "23"
*/
// const favorite = prompt('Favorite number?');
console.log(`'23' == 23`,'23' == 23); //result: '23' == 23 true
console.log(`'23' === 23`,'23' === 23); //result: '23' === 23 false

const favoriteString = '23';
console.log(`'23' === 23`,favoriteString === 23); //result: '23' === 23 false
console.log(`Number('23') === 23`,Number(favoriteString) === 23); //result: 23 === 23 true

const favoriteNumber = 23;
console.log(`23 === 23`,favoriteNumber === 23); //result: 23 === 23 true

console.log(`23 !== 23`,favoriteNumber !== 23); //result: 23 !== 23 false



/** 
All results
You just became an adult :D
'18' == 18 true
'18' === 18 false
'23' == 23 true
'23' === 23 false
'23' === 23 false
Number('23') === 23 true
23 === 23 true
*/