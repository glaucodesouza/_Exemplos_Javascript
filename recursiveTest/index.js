// Arrow functions
var originalRecords = [1,2,3,4,5]
var guests = [
  {name: 'John Doe', age: 30},
  {name: 'Lily Bush', age: 20},
  {name: 'William Gate', age: 25}
];

console.log(guests.find((guest) => guest.name == 'Lily Bush'));
console.log(guests.findIndex((guest) => guest.name == 'Lily Bush'));
let a = guests.find((guest) => guest.name == 'Lily Bush'); 
let b = guests.findIndex((guest) => guest.name == 'Lily Bush'); 

// montarLanes(originalRecords);
// console.log('fora ', originalRecords);

// function montarLanes(originalRecords){
//   let a = originalRecords.indexOf(2);
//   originalRecords.splice(2,1);
//   console.log('dentro ',originalRecords);
//   return originalRecords;
//   // for (originalRecord in originalRecords){
    
//   // }
// }