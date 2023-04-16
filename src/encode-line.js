const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {//
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newstr = "";
  for (let i=0; i < str.length;i++){
    let p = 1;
    while(str[i]===str[i+1]){
      p++
      i++
    }
    if (p>1) newstr = newstr + p + str[i]
    else newstr = newstr + str[i]
  }
  return newstr
}

module.exports = {
  encodeLine
};
