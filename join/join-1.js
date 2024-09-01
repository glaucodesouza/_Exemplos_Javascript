/*
(from page: https://www.w3schools.com/jsref/jsref_join.asp)

Description
The join() method returns an array as a string.

array.join(separator)
default separator is a comma (,)
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text); //result= Banana,Orange,Apple,Mango

let text2 = fruits.join(" and ");
console.log(text2); //result= Banana and Orange and Apple and Mango

let text3 = fruits.join(" or ");
console.log(text3); //result= Banana or Orange or Apple or Mango
