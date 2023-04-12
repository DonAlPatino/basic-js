const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!date) return 'Unable to determine the time of year!';
    let month
    if (date[Object.getOwnPropertySymbols(date)[0]] === 'Date') throw new Error('Invalid date!');
    try {
        month = date.getMonth();
    }
    catch (e) {
        throw new Error('Invalid date!');
    }
    if (month == 11 || month < 2) return 'winter'
    else if (month > 7) return 'fall'
    else if (month > 1 && month < 5) return 'spring'
    else return 'summer'
}

module.exports = {
    getSeason
};
