let massMark = 78, 
heightMark = 1.69, 
massJohn = 92,
heightJohn = 1.95,
BMIMark, //body mass index for Mark
BMIJohn, //body mass index for john 
markHigherBMI;

//test 1
console.log('test1');
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('BMIMark ',BMIMark);
console.log('BMIJohn ',BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

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
console.log(markHigherBMI);