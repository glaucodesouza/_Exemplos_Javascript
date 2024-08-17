let massMark = 78, 
heightMark = 1.69, 
massJohn = 92,
heightJohn = 1.95,
BMIMark, //body mass index for Mark
BMIJohn, //body mass index for john 
markHigherBMI;

//test 1
console.clear();
console.log('test1');
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('BMIMark ',BMIMark);
console.log('BMIJohn ',BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than John's (${BMIMark})!`);
}
/*result
test1
BMIMark  27.309968138370508
BMIJohn  24.194608809993426
Mark's BMI (27.309968138370508) is higher than John's (24.194608809993426)!
*/

//test 2
console.log('test2');
massMark = 95,
heightMark = 1.88, 
massJohn = 85,
heightJohn = 1.76,

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn ** 2); //(heightJohn ** 2) same as (heightJohn * heightJohn)
console.log('BMIMark ',BMIMark);
console.log('BMIJohn ',BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
/*result
test2
BMIMark  26.87867813490267
BMIJohn  27.44059917355372
John's BMI (27.44059917355372) is higher than John's (26.87867813490267)!
*/