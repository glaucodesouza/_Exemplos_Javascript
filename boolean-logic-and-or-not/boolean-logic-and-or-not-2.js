/*
Boolean logic
Using And, Or, Not.

you can run it using code runner extension for vs code

TESTING DATA:
here are two gymnastics teams: 
    Dolphins and Koalas. 
    They compete against each other 3 times. 
    The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, 
and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: 
Dolphins scored 96, 108, and 89.
Koalas scored 88, 91, and 110.
*/

console.log(`Test 1`);
let scoreDolphins = (96+108+89) / 3;
let scoreKoala = (88+91+110) / 3;
console.log(`Score Dolphins`,scoreDolphins,`\n\Score Koalas`,scoreKoala);
if (scoreDolphins > scoreKoala) {
    console.log(`Dolphins win the trophy with ${scoreDolphins}`);
} else if (scoreDolphins < scoreKoala) {
    console.log(`Koalas win the trophy with ${scoreKoala}`);
} else if (scoreDolphins === scoreKoala){
    console.log(`Both win the trophy with ${scoreKoala} and ${scoreDolphins}`);
}

//test 2
console.log(`\n\Test 2`);
let scoreDolphins2 = (97+112+101) / 3;
let scoreKoala2 = (109+95+106) / 3;
console.log(`Score Dolphins`,scoreDolphins2,`Score Koalas`,scoreKoala2);
if (scoreDolphins2 > scoreKoala2) {
    console.log(`Dolphins win the trophy with ${scoreDolphins2}`);
} else if (scoreDolphins2 < scoreKoala2) {
    console.log(`Koalas win the trophy with ${scoreKoala2}`);
} else if (scoreDolphins2 === scoreKoala2){
    console.log(`Both win the trophy with ${scoreKoala2} and ${scoreDolphins2}`);
}

//test 3
//minimum score mst be 100
console.log(`\n\Test 3`);
let scoreDolphins3 = (97+112+80) / 3;
let scoreKoala3 = (109+95+50) / 3;
console.log(`Score Dolphins`,scoreDolphins3,`Score Koalas`,scoreKoala3);
if (scoreDolphins3 > scoreKoala3 && scoreDolphins >= 100) {
    console.log(`Dolphins win the trophy with ${scoreDolphins3}`);
} else if (scoreDolphins2 < scoreKoala3 && scoreKoala2 >= 100) {
    console.log(`Koalas win the trophy with ${scoreKoala3}`);
} else if (scoreDolphins3 === scoreKoala3 && scoreDolphins >= 100 && scoreKoala2 >= 100){
    console.log(`Both win the trophy with ${scoreKoala3} and ${scoreDolphins3}`);
} else {
    console.log(`No one win the trophy because they did not score at least 100 points.`);
}

/** 
All results:

Test 1
Score Dolphins 97.66666666666667 
Score Koalas 96.33333333333333
Dolphins win the trophy with 97.66666666666667

Test 2
Score Dolphins 103.33333333333333 Score Koalas 103.33333333333333
Both win the trophy with 103.33333333333333 and 103.33333333333333

Test 3
Score Dolphins 96.33333333333333 Score Koalas 84.66666666666667
No one win the trophy because they did not score at least 100 points.
*/