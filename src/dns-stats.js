const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let myMap = new Map();
    for (let fullname of domains) {
        let tochka = 0;
        console.log(fullname)
        while (fullname && tochka>-1) {
            if (myMap.has(fullname)) {
                myMap.set(fullname, myMap.get(fullname) + 1);
            } else {
                myMap.set(fullname, 1);
            }
            tochka = fullname.indexOf('.')
            fullname = fullname.slice(tochka + 1)
        }
    }
    console.log(myMap)
    return myMap
}

module.exports = {
    getDNSStats
};
