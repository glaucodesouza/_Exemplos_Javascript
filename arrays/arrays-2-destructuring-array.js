'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: { // thu
    open: 12,
    close: 22,
  },
  [weekdays[4]]: { //fri
    open: 11,
    close: 23,
  },
  [weekdays[5]]: { // sat
    open: 0, // Open 24 hours
    close: 24,
  }
};

// Object restaurant
const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function(obj) {
    console.log(obj);
  },

  // destructuring in function input parameters
  orderDeliveryDestructuring: function({starterIndex, mainIndex, time, address}) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

// destructuring in function input parameters (with DEFAULT VALUES)
  orderDeliveryDestructuring2: function({starterIndex = 1, mainIndex = 0, time = '20:00', address} ) {
  console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
}

}

// ----------------------------------------------------------------
// Destructuring ARRAYS
// ----------------------------------------------------------------
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//here destructuring array ( THE MAGIC IS HERE )
const [x,y,z] = arr;
console.log(x, y, z); // 2, 3, 4

//here destructuring array JUST FIRST AND SECOND elements ( THE MAGIC IS HERE )
const [first, second] = restaurant.categories;
console.log(first, second); // Italian, Pizzeria

//here destructuring array JUST FIRST AND THIRD elements ( THE MAGIC IS HERE )
const [first1, , third] = restaurant.categories;
console.log(first1, third); // Italian, Vegetatian

//getting first and third, ignoring second)
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// order of elements is not important here
[main, secondary] = [second, main];
console.log(`main: ${main}, secondary: ${secondary}`);

//receiving 2 return values from
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse); // Garlic Bread, Pizza

const nested = [2,4, [5,6]];
const [i, , j] = nested;
console.log(i, j); // 2 [ 5, 6 ]

const [i2, , [j2, k2]] = nested;
console.log(i2, j2, k2); //2 5 6

// ----------------------------------------------------------------
// Destructuring OBJECTS
// ----------------------------------------------------------------
const { restaurantName, openingHours: open1, categories } = restaurant;
console.log(`restaurant name: ${restaurantName},  opening: ${open1}, categories: ${categories}`);
// restaurantName: Classico Italiano, opening: 10:00 AM - 22:00 PM, categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

// renaming restructured variables 
const {
  restaurantName: restName, 
  openingHours: open2, 
  categories: cat } = restaurant;
console.log(`restaurant name: ${restName},  opening: ${open2}, categories: ${cat}`);

// Setting default values = [], for destructuring objects
const {
  menu = [],
  openingHours: open3 = [] } = restaurant;
console.log(`restaurant menu: ${menu},  opening: ${open3}`);

// Mutating variables
let a2 = 111;
let b2 = 999;
const obj = {a2: 23, b2: 7, c2: 14};
({ a2, b2 } = obj);
console.log(`a2: ${a2}, b2: ${b2}`); // a2: 23, b2: 7

// Nested objects
const { fri } = openingHours;
console.log(fri);

// Nested destructuring with renaming
const { fri : {open: op, close: cl}} = openingHours;
console.log(op,cl);


// ----------------------------------------------------------------

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  mainIndex: 2,
  starterIndex: 2
});

// destructuring sending an object with elements {time, address, mainIndex, starterIndex}.
restaurant.orderDeliveryDestructuring({
  time: '22:30',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  mainIndex: 2, //starterMenu element index
  starterIndex: 2 //mainMenu element index
});

restaurant.orderDeliveryDestructuring2({
  address: 'Via del Sole, 21',
  starterIndex: 1 //mainMenu element index
});
// Order received Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00.