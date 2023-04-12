const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrA = s1.split("")
  let arrB = s2.split("")
  let result = [];
  for (let i = 0; i < arrA.length; i += 1) {
    for (let j = 0; j < arrB.length;j++) {
      if (arrA[i] == arrB[j]) {
        result.push(arrA[i]);
        arrB.splice(j,1)
        break;
      }
    }
  }
  return result.length;

}
module.exports = {
  getCommonCharacterCount
};
