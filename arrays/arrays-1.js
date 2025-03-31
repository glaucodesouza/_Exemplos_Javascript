'use strict'

const arr = [7,8,9];

const badNewArray = [1,2,arr[0],arr[1],arr[2]];

const goodNewArray = [1,2,...arr];
console.log(goodNewArray);
// [ 1, 2, 7, 8, 9 ]