const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!(team instanceof Array)) return false
  let secret = [];
  for (let i=0;i< team.length;i++){
    if (typeof team[i] !== "string") continue;
    secret.push(team[i].trim().toUpperCase().charAt(0))
  }
  return secret.sort().join('')
}

module.exports = {
  createDreamTeam
};
