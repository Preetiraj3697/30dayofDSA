// Given an unsorted array of integers, you have to move the array elements in a way such that all the zeroes are transferred to the end, and all the non-zero elements are moved to the front. The non-zero elements must be ordered in their order of appearance.

// For example, if the input array is: [0, 1, -2, 3, 4, 0, 5, -27, 9, 0], then the output array must be:

// [1, -2, 3, 4, 5, -27, 9, 0, 0, 0].

// Expected Complexity: Try doing it in O(n) time complexity and O(1) space complexity. Here, ‘n’ is the size of the array.

// Detailed explanation ( Input/output format, Notes, Images )
// Sample Input 1:
// 2
// 7
// 2 0 4 1 3 0 28
// 5
// 0 0 0 0 1
// Sample Output 1:
// 2 4 1 3 28 0 0
// 1 0 0 0 0
// The explanation for Sample Output 1 :
// In the first testcase, All the zeros are moved towards the end of the array, and the non-zero elements are pushed towards the left, maintaining their order with respect to the original array.

// In the second testcase, All zero are moved towards the end, hence the only non-zero element i.e 1 is in the starting of the array
// Sample Input 2:
// 2
// 5
// 0 3 0 2 0
// 4
// 0 0 0 0
// Sample Output 2:
// 3 2 0 0 0
// 0 0 0 0


var moveZeroes = function(nums) {
    let zeros = 0
  for (let i = 0; i < nums.length; i++) {
   let isZero = nums[i] === 0
     if (isZero){
        zeros++
        nums.splice(i, 1)
        i--
      }
    }
  for (let i = 0; i < zeros; i++){
      nums.push(0)
  }
 return nums
};
// 2nd solution using splice
var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
      nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
    }
  return nums
 };
console.log(moveZeroes([0, 1, -2, 3, 4, 0, 5, -27, 9, 0]))
console.log(moveZeroes([2, 0, 4, 1, 3, 0, 28]))
console.log(moveZeroes([0, 3, 0, 2, 0]))
console.log(moveZeroes([0, 0, 0, 0, 1]))

