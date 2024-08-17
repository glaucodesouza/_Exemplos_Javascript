/*
Boolean logic
Using And, Or, Not.

you can run it using code runner extension for vs code
*/

//Example 1
console.log("Test 1");
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const shouldDrive = hasDriversLicense && hasGoodVision;
console.log(hasDriversLicense && hasGoodVision);//result: true

if (shouldDrive) {
    console.log("Sarah should drive!");
} else {
    console.log("Sarah should not drive!");
}

// Example 2 john
console.log(`\n\Test 2`);
const johnHasDriversLicense = true; // A
const johnHasGoodVision = false; // B
const johnIsTired = false; // C
const johnShouldDrive = johnHasDriversLicense && johnHasGoodVision;
console.log(`johnHasDriversLicense || johnHasGoodVision`,johnHasDriversLicense || johnHasGoodVision);//result: true
console.log(`!johnHasDriversLicense`,!johnHasDriversLicense);//result: false
console.log(`johnHasDriversLicense && johnHasGoodVision && johnIsTired`,johnHasDriversLicense && johnHasGoodVision && johnIsTired);//result: true
if (johnShouldDrive) {
    console.log("John should drive!");
} else {
    console.log("John should not drive!");
}