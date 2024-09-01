/*
from: https://www.w3schools.com/jsref/jsref_map.asp
map:
  creates a new array from calling a function for every array element.

*/
//Example 1
const numbers = [4, 9, 16, 25];
const newArr1 = numbers.map(Math.sqrt)
console.log(newArr1); //result= [2,3,4,5]

//Example 2, Arrow function
//Get the full name for each person:
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const ex3 = persons.map(value => [value.firstname, value.lastname].join(' '));
console.log('example 3',ex3);//result=['malcon Reynolds', 'Kaylee Frye','Jayne Cobb']
            
//Example 4, with function
//Get the full name for each person:
const ex4 = persons.map(getFullName);
console.log('example 4',ex4);//result=['malcon Reynolds', 'Kaylee Frye','Jayne Cobb']

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
