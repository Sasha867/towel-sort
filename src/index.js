// You should implement your task here.

module.exports = function towelSort(matrix) {
    let unitArray = [];
    if (matrix && matrix.length > 0) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                matrix[i].forEach((number) => unitArray.push(number));
            } else if (i % 2 !== 0) {
                matrix[i].reverse().forEach((number) => unitArray.push(number));
            }
        }
    }
    return unitArray;
};
