/*Uee Extension Code Runner
to test your code in VS Code terminal*/

//Math operators
const now = 2037
const ageJonas = now - 1991;//result: 46
const ageSarah = now - 2018;//result: 19
console.log(ageJonas, ageSarah);
//result: 46 19

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //2 ** 3: means 2 to the power of 3 = 2 * 2 * 2 = 8
//result: 92 4.6 8

//concatenating strings with + operator
const firstName = 'Jonas';
const lastName= 'Smith';
console.log(firstName + ' ' + lastName); //result: Jonas Smith
console.log(typeof(firstName)); //result: string

//Assignment operators
let x = 10 + 5;
x += 10;//result: x + 10 = 25
x *= 4; //result:x = x * 4 = 100
x++; //result:x = x + 1 = 101
x--; //result:x = x - 1 = 100
x--; //result:x = x - 1 = 99
console.log(x); //result: 99

//Comparison operators
console.log(ageJonas > ageSarah); //result: true
console.log(ageSarah >= 18); //result:true
console.log(ageSarah >= 80); //result:false

const isFullAge = ageSarah >= 18 //sara is 19
console.log(isFullAge); //result:true

console.log(now - 1991 > now - 2018); //result:true