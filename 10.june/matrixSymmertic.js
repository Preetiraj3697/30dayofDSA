// You are given a square matrix, return true if the matrix is symmetric otherwise return false.

// A symmetric matrix is that matrix whose transpose is equal to the matrix itself.

// Example of symmetric matrix :


// Detailed explanation ( Input/output format, Notes, Images )
// Constraints:
// 1 <= T <= 10
// 1 <= N  <= 10^2
// -10^9 <= data <= 10^9

// Where 'data' denotes the element in the given 'matrix'.

// Time Limit: 1 sec
// Sample Input 1 :
// 1
// 3
// 1 2 3 2 4 5 3 5 8
// Sample Output 1 :
// Yes
// Explanation For The Sample Output 1 :

// Sample Input 2 :
// 1
// 3
// 1 2 3 1 4 5 3 5 8
// Sample Output 2 :
// No
// Explanation For The Sample Output 2 :


function isSymmetricMatrix(testCases) {
    let results = "";

    function checkSymmetry(matrix, N) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (matrix[i][j] !== matrix[j][i]) {
                    return false;
                }
            }
        }
        return true;
    }

    for (let t = 0; t < testCases.length; t++) {
        const { N, matrix } = testCases[t];
        results += (checkSymmetry(matrix, N) ? "Yes" : "No");
    }
    return results;
}

// Sample Input 1
const testCases1 = [
    { N: 3, matrix: [[1, 2, 3], [2, 4, 5], [3, 5, 8]] }
];
console.log(isSymmetricMatrix(testCases1)); // Output: ["Yes"]

// Sample Input 2
const testCases2 = [
    { N: 3, matrix: [[1, 2, 3], [1, 4, 5], [3, 5, 8]] }
];
console.log(isSymmetricMatrix(testCases2)); // Output: ["No"]


