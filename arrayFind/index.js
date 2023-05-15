// Arrow functions
var originalRecords = [1,2,3,4,5]
var guests = [
  {name: 'John Doe', age: 30},
  {name: 'Lily Bush', age: 20},
  {name: 'William Gate', age: 25}
];

console.log(guests.find((guest) => guest.name == 'Lily Bush'));
console.log(guests.findIndex((guest) => guest.name == 'Lily Bush'));