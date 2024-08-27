/*
use strinct

Use Extension Code Runner
to test your code in VS Code terminal
*/
"use strict";

let hasDriversLicense = false;
const passTest = true;

//use strict, tell us the ERROR hasDriverLicense is not defined
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//Error: use strict, tell us the ERROR interface is reserved word
const interface = `Audio`;

//Error: use strict, tell us private is reserved word
const private = 534;

//Error: use strict, tell us let IF is unexpected token
const if = 22;
