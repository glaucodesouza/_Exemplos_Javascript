// Arrow functions
const brands = [
  {id:1, name:'a'},
  {id:2, name:'b'},
  {id:3, name:'c'}
]

console.log("Printing if exists:", brands.find((brand) => brand.name === 'b'));

if (brands.find((brand) => brand.name === 'b'))
  console.log("IF Exists, name b")
else console.log("If Doesn't exist name b");