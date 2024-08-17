const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("You're old enough to drive.");
}

if (age >= 18) {
    console.log("You're old enough to drive.");
} else {
    const yearsLeft = 18 - age;
    console.log(`You're not old enough to drive. You need ${yearsLeft} more years.`);
}

const birthYear = 1991;
let century;
if(birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);