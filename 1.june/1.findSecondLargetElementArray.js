// Find the second Largest Element in an Array
// [1,25,35,25,10,34] ==> 34
// [10,10,5] ==> 5
// [10,10,10] ==> -1;


// function fun(arr) {
//     if (arr.length < 1) console.log(-1);
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (largest < arr[i]) {
//             largest = arr[i];
//         }
//     }
//     // console.log(largest);
//     let secondLargest = -1;
//     for (let i = 0; i < arr.length; i++){
//         if (secondLargest < arr[i] && largest > arr[i]) {
//             secondLargest = arr[i];
//         }
//     }
//     console.log(secondLargest)
// }
function fun(arr) {
    let largest = -1;
    let secondLargest = -1;
    if (arr.length < 1) console.log(-1);
    for (let i = 0; i < arr.length; i++){
        if (largest < arr[i]) {
            secondLargest = largest;
            largest = arr[i]
        } else if (arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    console.log(secondLargest);
}
// const arr = [1, 25, 35, 25, 10, 34];
// const arr = [10,10,5];
const arr = [10,10,10];
fun(arr)

// Summary:
// Solution 1:
// Time Complexity: 
// O(n)
// Space Complexity: 
// O(1)

// Solution 2:
// Time Complexity: 
// O(n)
// Space Complexity:
// O(1)
// Both solutions are efficient in terms of time and space, but the second solution is more optimal as it only requires a single pass through the array, making it simpler and potentially faster in practice.