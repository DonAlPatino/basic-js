const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes, separator = "+",addition="",additionRepeatTimes=1,additionSeparator="|"}) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!repeatTimes) return str+addition;
  let add_str = ''
  let newstr = ''
  for (let i=0;i<parseInt(additionRepeatTimes);i++)
    add_str += (i==0?"":additionSeparator)+addition
  for (let i=0;i< parseInt(repeatTimes);i++)
    newstr += (i==0?"":separator) + str  + add_str
  return newstr
}
module.exports = {
  repeater
};
