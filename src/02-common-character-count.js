/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function count(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      let cur = array[i];
      if (obj[cur]) {
        obj[cur] = obj[cur] + 1;
      } else {
        obj[cur] = 1;
      }
    }
    return obj;
  }
  let temp = 0;
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let s1Obj = count(s1Arr);
  let s2Obj = count(s2Arr);
  let s1Keys = Object.keys(s1Obj);

  for (let i = 0; i < s1Keys.length; i++) {
    let key = s1Keys[i];
    if (s2Obj[key]) {
      temp += Math.min(s1Obj[key], s2Obj[key]);
    }
  }
  return temp;
}

module.exports = getCommonCharacterCount;
