const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res=0, num_digits = [];
  while (n) {
    num_digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  console.log(num_digits)
  for (let i = 0; i < num_digits.length; i++) {
    let num = 0;
    for (let j = num_digits.length - 1; j >= 0; j--) {
      if (j !== i) {
        num = num * 10 + num_digits[j];
      }
    }
    res = Math.max(num, res);
    console.log(res)
  }
  return res;
}
//console.log(deleteDigit(1001))
module.exports = {
  deleteDigit
};
