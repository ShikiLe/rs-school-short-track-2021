/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function sum(num) {
    let result = 0;
    let myFunc = (num) => Number(num);
    var arr = Array.from(String(num), myFunc);
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
  while (n > 9) {
    n = sum(n);
  }
  return n;
}

module.exports = getSumOfDigits;
