let x = 0;
x = parseFloat(a.results[0].clabs);
if (isNaN(x) || isNaN(K)) {
  let R = 0;
} else {
  if (x === 0 || K === 0) {
    R = 0;
  } else {
    R = (x / K) * 100;
  }
}
let y = R.toFixed(2);
/*result
  y=1.00
*/
