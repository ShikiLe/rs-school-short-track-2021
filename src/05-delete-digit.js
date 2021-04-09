/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(n.toString());
  const sortedArr = arr.slice().sort(function (a, b) {
    return a - b;
  });
  const result = [];
  while (arr.length !== arr.length - 2) {
    arr.forEach((el) => {
      if (el !== sortedArr[0]) {
        result.push(el);
      }
    });
  }

  return result.join('');
}

module.exports = deleteDigit;
