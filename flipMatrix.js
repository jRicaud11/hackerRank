//Link to challenge https://www.hackerrank.com/challenges/flipping-the-matrix/problem?isFullScreen=true

let matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
]

function flipMatrix(matrix) {
    let subMatrix = matrix.length / 2; //Marked the submatrix inside the square matrix
    let total = 0; //Sum of all the items inside the submatrix
    let max = Number.MIN_VALUE; //Get the min value posible 

    for(let i=0; i < subMatrix; i++){
         for(let j=0; j < subMatrix; j++){
            max = Math.max(matrix[i][j], max); //Compare the upper left corner with the current max
            max = Math.max(matrix[i][subMatrix * 2 - 1 - j],max); //Compare the upper right corner with current max
            max = Math.max(matrix[subMatrix * 2 - 1 - i][j], max); //Compare the lower left corner with current max
            max = Math.max(matrix[subMatrix * 2 - 1 - i][subMatrix * 2 - 1 - j], max); //Compare the lower right corner with current max

            total += max;
            max = Number.MIN_VALUE
        }
    }

    return (total);
}

console.log(flipMatrix(matrix))