/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let temp = [];
  arr.forEach(elem=>{
      if (elem !== -1) {
          temp.push(elem)
      }
  }
  )
  temp.sort(function(a, b) {
      return a - b;
  });
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < temp.length; j++) {
          if (arr[i] === -1) {
              result.push(-1);
              break;
          } else {
              result.push(temp[j]);
              temp.shift()
              break;
          }
      }
  }
  return result;
}

module.exports = sortByHeight;
