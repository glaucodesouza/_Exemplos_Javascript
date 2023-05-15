const numbers = [1,2,3];
console.log(numbers);

// add in the start of array 
numbers.unshift(0);
console.log(numbers);

// add in the middle of array 
numbers.splice(1,0,'a');
console.log(numbers);

// add in the end of array 
numbers.push(5);
console.log(numbers);