/*convertion
use code runner extension to test in VS Code terminal
*/

console.clear();
/* type convertion*/
const inputYear = '1991'; //it is a String
console.log(typeof(inputYear)); //Type string
console.log(Number(inputYear), inputYear); //result: 1991 "1991"
console.log(inputYear + 18); //result: 199118
console.log(Number(inputYear) + 18); //result: 2009
console.log(Number('Jonas') + 18); //result: NaN
console.log(typeof NaN); //result: number (NaN is a number in Javascript)
console.log(String(23), 23); //result: 23 23

/* type COERCION:
Javascript transforms 23 in string by coercion 
IMPORTANT: 
it only transform Number to String if using + operator
otherwise it tries to calculate correctly with -, *, /, etc
*/
console.log('I am ' + 23 + ' years old'); //result: I am 23 years old
console.log('I am ' + '23' + ' years old');//result: I am 23 years old
console.log('I am ' + String(23) + ' years old');//result: I am 23 years old
console.log('23' - '10' - 3);//result: 10 (correct)
console.log('23' * '2');//result: 46 (correct)
console.log('23' / '2');//result: 11.5 (correct)

let n = '1' + 1;//result: "11"
n = n - 1; //result: 10 (number)
console.log(n); //result: 10 (number)

console.log(2+3+4+'5', typeof(2+3+4+'5') ); //result: "95" string
console.log('10'-'4'-'3'-2+'5', typeof('10'-'4'-'3'-2+'5') ); //result: "15" string