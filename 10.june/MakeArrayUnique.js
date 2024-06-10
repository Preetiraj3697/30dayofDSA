// Sample Input 1 :
// 2
// 4
// 1 2 1 2
// 5
// 3 6 7 12 13
// Sample Output 1 :
// 2
// 0
// Explanation of the Sample Input 1:
// In the first test case, there are 4 elements in the array and elements at index 2 and 3(0-based indexing) are repeated. Therefore we need to remove 2 elements to make this array of all distinct elements.

// In the second test case, there are 5 elements in the array and all the elements are unique therefore we don't need to remove any element from the array.
// Sample Input 2 :
// 2
// 4
// 1 1 1 1
// 5
// 1 2 3 1 2
// Sample Output 2 :
// 3
// 2

function fun(arr){
    let obj = {};
    for(let i=0; i<arr.length; i++){
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]]+1:1;
    }
    const arrFromObj = Object.keys(obj);
    return arr.length-arrFromObj.length;

}
const res = fun([1,1,1,1,1]);
console.log(res);

function minRemovalsToMakeDistinct(arr) {
    // Create a frequency object to count occurrences of each element
    let frequency = {};

    // Count the frequency of each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]] += 1;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    // Initialize a counter for removals
    let removals = 0;

    // Iterate over the frequency object
    for (let key in frequency) {
        // If the count is more than 1, add the extra elements to the removals counter
        if (frequency[key] > 1) {
            removals += frequency[key] - 1;
        }
    }

    return removals;
}

// Function to process multiple test cases
function processTestCases(testCases) {
    let results = [];
    for (let i = 0; i < testCases.length; i++) {
        results.push(minRemovalsToMakeDistinct(testCases[i]));
    }
    return results;
}

// Example usage
let testCases = [
    [1, 2, 1, 2],
    [3, 6, 7, 12, 13],
    [1, 1, 1, 1],
    [1, 2, 3, 1, 2]
];

let results = processTestCases(testCases);
for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
}
