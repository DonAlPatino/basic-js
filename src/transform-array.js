const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!(arr instanceof Array)) throw new Error('\'arr\' parameter must be an instance of the Array!')
    let newarr = [];
    for (let i=0; i<arr.length;i++) {
        switch (arr[i]) {
            case '--double-next':
                if (arr[i + 1]) {
                    newarr.push(arr[i + 1]);
                }
                break
            case '--double-prev':
                if (arr[i-1]) {
                    newarr.push(arr[i-1]);
                }
                break
            case '--discard-prev':
                newarr.pop();
                break
            case '--discard-next':
                i=i+2;
                break
            default:
                newarr.push(arr[i])
        }

        console.log(newarr)
    }

    return newarr
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))

module.exports = {
    transform
};
