//Test which returns TRUE from the function.
//Because there is at least one age > 18 in the ages array.

const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
