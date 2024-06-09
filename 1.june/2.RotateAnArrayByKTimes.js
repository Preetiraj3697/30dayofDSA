// Rotate An Array By k times in left side
// Sample Input 1:
// 8
// 7 5 2 11 2 43 1 1
// 2
// Sample Output 1:
// 2 11 2 43 1 1 7 5
// Explanation of Sample Input 1:
// Rotate 1 steps to the left: 5 2 11 2 43 1 1 7
// Rotate 2 steps to the left: 2 11 2 43 1 1 7 5
// Sample Input 2:
// 4
// 5 6 7 8
// 3
// Sample Output 2:
// 8 5 6 7
// Explanation of Sample Input 2:
// Rotate 1 steps to the left: 6 7 8 5
// Rotate 2 steps to the left: 7 8 5 6
// Rotate 2 steps to the left: 8 5 6 7

// const arr1 = [7,5, 2, 11, 2, 43, 1, 1];
// const k1 = 2;
// const arr1 = [5,6,7,8];
// const k1 = 3;
// function rotateLeft(arr, k) {
//     let n = arr.length;
//     k = k % n; 
//     let res = [];let res1 = []
//     for (let i = 0; i < n; i++) { 
//         if (i >= k) {  
//            res.push(arr[i]); 
//         } else {
//             res1.push(arr[i])
//         }
//     } 
//     res.push(...res1)
//     console.log(res)
// }
function rotateLeft(arr, k) {
    let n = arr.length;
    k = k % n;  // Handle cases where k is greater than the length of the array

    if (k === 0) {
        console.log(arr);
        return;
    }

    // Use array slicing to achieve the rotation
    let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
}

// Sample Inputs
// const arr1 = [7, 5, 2, 11, 2, 43, 1, 1];
// const k1 = 2;
// rotateLeft(arr1, k1);  // Expected Output: [2, 11, 2, 43, 1, 1, 7, 5]

// const arr2 = [5, 6, 7, 8];
// const k2 = 3;
// rotateLeft(arr2, k2);  // Expected Output: [8, 5, 6, 7]



// Rotate An Array by right side by k times
// Input: = [1, 3, 5, 7, 9], K = 2.
// Output: 7 9 1 3 5
// Explanation:
// After 1st rotation - [9, 1, 3, 5, 7]
// After 2nd rotation - [7, 9, 1, 3, 5]

// Input:= [1, 2, 3, 4, 5], K = 4.
// Output: 2 3 4 5 1
// const arr = [1, 2, 3, 4, 5];
// const k = 4;
// const arr = [1, 3, 5, 7, 9];
// const k = 2;
const arr = [1, 12, 4, 5, 3];
const k = 3;
function rotate(arr, k) {
    let n = arr.length;
    k = k % n; 
    let res = [];
    for (let i = 0; i < n; i++) { 
        if (i < k) { 
  
            // Printing rightmost 
            // kth elements 
           res.push(arr[n + i - k]); 
        } 
        else { 
  
            // Prints array after 
            // 'k' elements 
            res.push((arr[i - k])); 
        } 
    } 
    console.log(res)
}
rotate(arr,k)

function rotateRight(arr, k) {
    let n = arr.length;
    k = k % n;  // Handle cases where k is greater than the length of the array

    if (k === 0) {
        console.log(arr);
        return;
    }

    // Use array slicing to achieve the rotation
    let rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
    console.log(rotatedArray);
}

// Sample Inputs
const arr1 = [1, 3, 5, 7, 9];
const k1 = 2;
rotateRight(arr1, k1);  // Expected Output: [7, 9, 1, 3, 5]

const arr2 = [1, 2, 3, 4, 5];
const k2 = 4;
rotateRight(arr2, k2);  // Expected Output: [2, 3, 4, 5, 1]

const arr3 = [1, 12, 4, 5, 3];
const k3 = 3;
rotateRight(arr3, k3);  // Expected Output: [4, 5, 3, 1, 12]



// Summary:
// Time Complexity for All Solutions:O(n)
// Space Complexity for All Solutions: O(n)
// Both initial and optimized solutions for rotating the array (left or right) have the same time and space complexities. The optimized solutions are more concise and leverage built-in array operations for better readability and potentially fewer operations.