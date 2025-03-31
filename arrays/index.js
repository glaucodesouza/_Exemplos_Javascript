//----------------------------------------------------------------
// Basic Array Operations (Methods)
//----------------------------------------------------------------
const friends = ['Michael', 'Steven', 'Peter'];

//----------------------------------------------------------------
// Add elements
//----------------------------------------------------------------
const newLength = friends.push('Jay'); //last
console.log(friends);
console.log(newLength);

friends.unshift('John'); //first
console.log(friends);

//----------------------------------------------------------------
// Remove elements
//----------------------------------------------------------------
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

//----------------------------------------------------------------
//Array, insert multiple lines
//----------------------------------------------------------------
let array1 = []
let array2 = [
  {name: 'john', age: '22'},
  {name: 'marie', age: '19'},
]
array1.push(...array2);

//----------------------------------------------------------------
//find in Array
//----------------------------------------------------------------
var guests = [
  {name: 'John Doe', age: 30},
  {name: 'Lily Bush', age: 20},
  {name: 'William Gate', age: 25}
];

console.log(guests.find((guest) => guest.name == 'Lily Bush'));
console.log(guests.findIndex((guest) => guest.name == 'Lily Bush'));

//----------------------------------------------------------------
//Array insert
//----------------------------------------------------------------
const numbers = [1,2,3];
console.log(numbers);

// add in the start of array 
numbers.unshift(0);
console.log(numbers);

// add in the middle of array 
numbers.splice(1,0,'a');
console.log(numbers);

// add in the end of array 
numbers.push(5);
console.log(numbers);

//----------------------------------------------------------------
//Array remove
//----------------------------------------------------------------
const array = [2, 5, 9];
console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}
// array = [2, 9]
console.log(array); 

//----------------------------------------------------------------
//Array some
//----------------------------------------------------------------
//Test which returns TRUE from the function.
//Check if there is at least one age > 18 in the ages array.
const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

//----------------------------------------------------------------
// Coding Challenge #2
//----------------------------------------------------------------
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);