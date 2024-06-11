// Given 2 strings, find the minimum number of operations required to change one string to the other. An operation is defined as either replacement of a character, deletion of a character, or addition of a character. This problem is also called Levenshtein Distance. Levenshtein distance is a string metric for measuring the difference between two sequences.

// Example
// Input:
// str1 = 'abc'
// str2 = 'yabd'
// Output: 2
// Explanation:
// To convert abc to yabd, there are two ways:
// add character y to string abc at position str[0], replace character c to characterd at position str1[2]
// Remove character y at position str2[0], replace character d with character c at position str2[3].

function fun(str1, str2) {
    let edits = [];
    // creating the matrix
    for(let i = 0; i < str2.length + 1; i++) {
        let row = [];

        for(let j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        edits.push(row);
    }
    // DP Solution
    for(let i = 1; i < str2.length + 1; i++) {
        for(let j = 1; j < str1.length + 1; j++) {
            if(str2[i-1] === str1[j-1]) {
                edits[i][j] = edits[i-1][j-1]
            } else {
                edits[i][j] = 1+ Math.min(edits[i-1][j], edits[i][j-1], edits[i-1][j-1]);
            }
        }
    }
    // console.log('edits', edits);
    return edits[str2.length][str1.length];
}
console.log(fun('abcd','yaabdcd'))

function levenshteinDistance(str1, str2) {
    function helper(i, j) {
        // If the first string is empty, all characters of the second string need to be inserted
        if (i === 0) return j;
        // If the second string is empty, all characters of the first string need to be deleted
        if (j === 0) return i;

        // If the last characters are the same, ignore the last character and continue with the rest
        if (str1[i - 1] === str2[j - 1]) {
            return helper(i - 1, j - 1);
        }

        // If the last characters are different, consider all three operations
        let insert = helper(i, j - 1); // Insert a character
        let remove = helper(i - 1, j); // Remove a character
        let replace = helper(i - 1, j - 1); // Replace a character

        // Return the minimum of the three operations plus one
        return 1 + Math.min(insert, remove, replace);
    }

    // Call the helper function with the full lengths of both strings
    return helper(str1.length, str2.length);
}

console.log(levenshteinDistance('abc', 'yabd')); // Output: 2
console.log(levenshteinDistance('abcd', 'yaabdcd')); // Output will depend on the example given
