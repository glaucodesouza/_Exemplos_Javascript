/*
5 falsy values: 0,'',undefined, null, NaN

test it with code runner extension for VS Code.
*/

let falsyValues = [0, '', undefined, null, NaN];

for (let value of falsyValues) {
    console.log(value, Boolean(value));
}
/*result of falsy values:
0 false
 false
undefined false
null false
NaN false
*/

/*trying to convert to Boolean*/
console.log(Boolean(0));//result: false
console.log(Boolean(undefined));//result: false
console.log(Boolean('Jonas'));//result: true
console.log(Boolean({}));//result: true
console.log(Boolean(''));//result:false

const money = 0;
if(money) {//javascript converts money into Bollean to make an if test
    console.log(`Don't spend it all ;)`);
} else {
    //maney=0 is false
    console.log('You should save up!');//result:You should save up!
}

const money2 = 100;
if(money2) {//javascript converts money into Bollean to make an if test
    //money2 = 100 is true
    console.log(`Don't spend it all ;)`);//reset: Don't spend it all ;)
} else {
    console.log('You should save up!');
}

let height;
if (height) {
    console.log(`YAY! heignt is defined`);
} else {
    console.log(`Height is UNDEFINED`);//result: Height is UNDEFINED
    console.log(`typeof(height)`,typeof(height));//result: typeof(height) undefined
}

console.log();
