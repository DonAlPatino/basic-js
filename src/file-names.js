const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let mySet = new Set();
  for (let name of names){
    if (mySet.has(name)) {
      let tmp = parseInt(name[name.length-2])
      if (tmp) name = name + "("+(tmp+1)+")"
      else name = name + "(1)"
      mySet.add(name);
    } else {
      mySet.add(name);
    }

  }
  console.log(mySet)
}
//renameFiles(["file", "file", "image", "file(1)", "file"])
module.exports = {
  renameFiles
};
