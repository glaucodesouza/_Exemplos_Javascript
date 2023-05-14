// Arrow functions
var originalRecords = [1,2,3,4,5]
var guests = [
  {name: 'John Doe', age: 30},
  {name: 'Lily Bush', age: 20},
  {name: 'William Gate', age: 25}
];

var guestsNew = [];
console.clear;

console.log('BEFORE CHANGES');
console.log(guests);
console.log(guestsNew);

let name1 = 'Lily Bush';
addDelete(name1,guests, guestsNew);
console.log('AFTER CHANGE OF', name1);
console.log(guests);
console.log(guestsNew);

name1 = 'John Doe';
addDelete(name1,guests, guestsNew);
console.log('AFTER CHANGE OF', name1);
console.log(guests);
console.log(guestsNew);

name1 = 'William Gate';
addDelete(name1,guests, guestsNew);
console.log('AFTER CHANGE OF', name1);
console.log(guests);
console.log(guestsNew);

function addDelete(name1, guests, guestsNew){
  //Is there name1 in originalRecords ? 
  if(guests.find((guest) => guest.name == name1)){
    //IF YES, copy to add it to guestsNew.
    let oname = guests.find((guest) => guest.name == name1);
    let index = guests.findIndex((guest) => guest.name == name1);
    guests.splice(index, 1);
    guestsNew.push(oname);
  }
} 