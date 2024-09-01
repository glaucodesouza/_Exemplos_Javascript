/*
split a string into Array with splitted elements

examples from
  https://www.w3schools.com/jsref/jsref_split.asp
*/

let text = "How are you doing today?";
console.log(text.split(" "));
console.log(text.split(""));
const myArray = text.split(" ");
console.log(myArray[1]); //get second element from split = are
const myArray3 = text.split(" ", 3); //split max elements in array = 3
console.log(myArray3[2]); //get third element from split = you
/*results:
[ 'How', 'are', 'you', 'doing', 'today?' ]
[ 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'd', 'o', 'i', 'n', 'g', ' ', 't', 'o', 'd', 'a', 'y', '?' ]
are
you
*/
