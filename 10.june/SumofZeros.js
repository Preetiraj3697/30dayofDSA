// You are given a binary matrix (it contains only 0s and 1s) with dimensions ‘N * M’. You need to find and return the sum of coverages of all zeros of the given matrix.

// Coverage for a particular 0 is defined as the total number of ‘1s’ around it (i.e., immediate left, immediate right, immediate up, and immediate bottom positions).

// Detailed explanation ( Input/output format, Notes, Images )
// Constraints:
// 1 <= T <= 10
// 1 <= N, M <= 10^3

// Time limit: 1 second
// Sample Input 1:
// 1
// 2 2 
// 1 0
// 0 1
// Sample Output 1:
// 4
// Explanation of Input 1:
// In the given matrix, there are 2 zeros. 
// For the 0 at the 1st row, 2nd column position, coverage is 2(there is 1 adjacent top one and 1 adjacent right one).
// For the 0 at the 2nd row, 2nd column the coverage is 2(there is 1 adjacent top one and 1 adjacent right one).

// Hence the net coverage is 2 + 2 = 4.
// Sample Input 2:
// 1
// 2 3
// 0 0 0
// 0 0 0
// Sample Output 2
// 0



//Doute
function sumOfCoverages(testCases) {
    function getCoverage(matrix, N, M) {
        let coverageSum = 0;
        const directions = [
            [-1, 0], // Up
            [1, 0],  // Down
            [0, -1], // Left
            [0, 1]   // Right
        ];

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (matrix[i][j] === 0) {
                    let coverage = 0;
                    for (let [dx, dy] of directions) {
                        let x = i + dx, y = j + dy;
                        if (x >= 0 && x < N && y >= 0 && y < M && matrix[x][y] === 1) {
                            coverage++;
                        }
                    }
                    coverageSum += coverage;
                }
            }
        }
        return coverageSum;
    }

    let results = [];
    for (let t = 0; t < testCases.length; t++) {
        let { N, M, matrix } = testCases[t];
        results.push(getCoverage(matrix, N, M));
    }
    return results;
}

// Sample Input 1
const testCases1 = [
    { N: 2, M: 2, matrix: [[1, 0], [0, 1]] }
];
console.log(sumOfCoverages(testCases1)); // Output: [4]

// Sample Input 2
const testCases2 = [
    { N: 2, M: 3, matrix: [[0, 0, 0], [0, 0, 0]] }
];
console.log(sumOfCoverages(testCases2)); // Output: [0]

// General Usage
// Suppose you need to read inputs and format them into the testCases array.
const input = [
    '1',
    '2 2',
    '1 0',
    '0 1'
];

let index = 0;
const T = parseInt(input[index++]);
const testCases = [];

for (let t = 0; t < T; t++) {
    const [N, M] = input[index++].split(' ').map(Number);
    const matrix = [];
    for (let i = 0; i < N; i++) {
        matrix.push(input[index++].split(' ').map(Number));
    }
    testCases.push({ N, M, matrix });
}

console.log(sumOfCoverages(testCases));
