function transpose(matrix){
    const matrixNew = matrix[0].map((col, i) => matrix.map((row) => row[i]));
    return matrixNew;
}

module.exports = transpose;