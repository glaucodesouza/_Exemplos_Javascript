'use strict'

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto']

}

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

//here destructuring array JUST FIRST AND SECOND elements ( THE MAGIC IS HERE )
const [first1, , third] = restaurant.categories;
console.log(first1, third); // Italian, Vegetatian