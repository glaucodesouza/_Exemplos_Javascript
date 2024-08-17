/* Strings and Template Literals 
    test your code using code Runner extension for VS Code
 */

const firstName = 'Jonas';
const job = 'teacher';
const birtYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birtYear) + " years old " + job + "!";
console.log(jonas);
//result: I'm Jonas, a 46 years old teacher!

/* Using Template literal */
const greeting = `Hello, my name is ${firstName}. I'm a ${job} and I was born in ${birtYear}.`;
console.log(greeting);
// result: Hello, my name is Jonas. I'm a teacher and I was born in 1991.

console.log(`Just a regular string...`);
// result: Just a regular string...

console.log('Srting with \n\multiple \n\lines...'); //need \n\ because of a javascript bug
/* result: 
String with
multiple
lines...
*/

console.log(`String with
multiple
lines...`);
/* result: 
String with
multiple
lines...
*/