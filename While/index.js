// loop WHILE
let i = 0;
while (i < 5) {
  console.log(`I'm learning`, i);
  i++;
}

//----------------------------------------------------------------
// The while Loop
//----------------------------------------------------------------
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}