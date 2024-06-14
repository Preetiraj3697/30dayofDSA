// Problem statement
// Ninja has been given two sorted arrays/lists, ‘ARR1’ and ‘ARR2’ of lengths ‘M’ and ‘N’ respectively. He is also provided with an integer ‘K’. He has to find the ‘K’th element (1 based indexing) in the sorted array/list of length ‘M + N’ made by merging ‘ARR1’ and ‘ARR2’.
// For example :
// ‘ARR1’ = {1, 4, 6, 7}
// ‘ARR2’ = {2, 3, 5, 6}
// ‘K’ = 6

// So the sorted array after merging ‘ARR1’ and ‘ARR2’ will be:
// {1, 2, 3, 4, 5, 6, 6, 7}
// So the 6th element (1 based indexing) is in the new sorted merged array/list is 6.

// Sample input 1:
// 2
// 4 3 4
// 1 4 7 10
// 2 5 6
// 1 1 2
// 7
// 1
// Sample output 1:
// 5
// 7
// Explanation for sample input 1:
// For test case 1:
// The sorted array/list made by merging ‘ARR1’ and ‘ARR2’ = {1, 2, 4, 5, 6, 7, 10}.
//  We can see the element at the 4th position is 5.

// For test case 2:
// The sorted arraylist made by merging ‘ARR1’ and ‘ARR2’ = {1, 7}.
// We can see the element at the 2nd position is 7.
// Sample input 2:
// 2
// 5 5 6
// 1 2 3 4 5
// 7 8 9 10 11
// 2 3 1
// 5 6
// 1 4 8
// Sample output 2:
// 7
// 1
// Explanation for sample input 2:
// For test case 1:
// The sorted array made by merging ‘ARR1’ and ‘ARR2’ = {1, 2,3 ,4, 5, 7, 8, 9, 10, 11}.
// We can see the element at the 6th position is 7.

// For test case 2:
// The sorted array made by merging ‘ARR1’ and ‘ARR2’ = {1, 4, 5, 6, 8}.
// We can see the element at the 1st position is 1.

function findKthElement(arr1, arr2, k) {
    const m = arr1.length;
    const n = arr2.length;
    
    // Helper function to perform the recursive search
    function kth(arr1, m, arr2, n, k) {
        // Base cases
        if (m === 0) return arr2[k - 1];
        if (n === 0) return arr1[k - 1];
        if (k === 1) return Math.min(arr1[0], arr2[0]);
        
        // Calculate mid indices
        const i = Math.min(Math.floor(k / 2), m);
        const j = Math.min(Math.floor(k / 2), n);
        
        if (arr1[i - 1] <= arr2[j - 1]) {
            // Discard the first i elements of arr1 and adjust k
            return kth(arr1.slice(i), m - i, arr2, n, k - i);
        } else {
            // Discard the first j elements of arr2 and adjust k
            return kth(arr1, m, arr2.slice(j), n - j, k - j);
        }
    }
    
    return kth(arr1, m, arr2, n, k);
}

// Example usage
const arr1 = [1, 4, 6, 7];
const arr2 = [2, 3, 5, 6];
const k = 6;
console.log(findKthElement(arr1, arr2, k)); // Output: 6

// Additional test cases
console.log(findKthElement([1, 4, 7, 10], [2, 5, 6], 4)); // Output: 5
console.log(findKthElement([1, 7], [], 2)); // Output: 7
console.log(findKthElement([1, 2, 3, 4, 5], [7, 8, 9, 10, 11], 6)); // Output: 7
console.log(findKthElement([5, 6], [1, 4, 8], 1)); // Output: 1
















