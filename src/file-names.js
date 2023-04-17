const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {{[p: string]: any}}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let mySet = new Map();
  for (let name of names){
    if (!mySet.has(name)) {mySet.set(name, 0); continue}
    let count=0;
    let origname=name;
    while (mySet.has(name)) {
      count++;
      let num = count+parseInt(mySet.get(name))
      let tmp = name + "("+ num +")"
      name = tmp
      }
    let tmp =  origname+ "("+ count +")"
    mySet.set(tmp,0);
  }

  return Array.from(mySet.keys());
}
//renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])
module.exports = {
  renameFiles
};
