// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let x=1;
    nums.sort((a, b) => a-b);
    for(let i=0;i<nums.length; i++) {
        if(nums[i] == x){
            x++
        }
    }
    return x
};
const nums = [1, 2, 0];
console.log(firstMissingPositive(nums))
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let minNumber = 1;
    nums.filter(num => num > 0);
    sortedNums = nums.sort((a, b) => {
        return a - b;
    })
    sortedNums.forEach((num, index) => {
        if ( num === minNumber) {
          minNumber++;
        } 
        else if (num > minNumber){
            minNumber;
        }
    });
    return minNumber;
};
const nums2 = [3,4,-1,1];
console.log(firstMissingPositive(nums2))
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // Function to swap elements in the array
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    const n = nums.length;
    
    // Place each positive integer i at index i-1 if possible
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            swap(nums, i, nums[i] - 1);
        }
    }
    // Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    
    // If all positive integers from 1 to n are present, return n + 1
    return n + 1;
};

const nums3 = [7,8,9,11,12];
console.log(firstMissingPositive(nums3))