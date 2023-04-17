const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 && i+1 < matrix.length) {
                    matrix[i+1][j] = 0;
            }
        }
    }
    let total = 0;
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            total += matrix[x][y]
        }
    }

    return total;

}

module.exports = {
    getMatrixElementsSum
};
