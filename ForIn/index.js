// loop FOR-in

// -------------------------
// LOOP IN STRUCTURE FIELDS
// -------------------------
const person = {
  name: 'John',
  age: 25
};

console.clear;
console.log('For in STRUCTURE');

let count = 0;
for(let key in person){
  if(count == 0){
    console.log(key,person['name']);
    console.log('other way of printing NAME is:', key, person.name);
  }else{
    console.log(key,person['age']);
    console.log('other way of printing AGE is:', key, person.age);
  }
  count++;
}


// -------------------------
// LOOP IN ARRAY
// -------------------------
console.log(` `);
console.log('For in ARRAY');
const colors = ['Red','Blue', 'Green'];

for(let color in colors) {
    console.log(color,colors[color]);
}