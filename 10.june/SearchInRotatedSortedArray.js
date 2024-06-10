// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.
// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// 1st solution time complexity O(n) and space complexity O(1)
var search = function(arr, k) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]==k){
            return i;
        }
    }
    return -1;
};
//2nd solution Time Complexity: O(log N) and space complexity O(1)

var search = function(nums, target) {
    let start = 0, end = nums.length -1;
    while(start<=end){
        let mid = Math.floor((end+start)/2);
        if(nums[mid] == target){
            return mid;
        }
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

//3rd solution Time Complexity: O(log N) and space complexity O(1)

function searchInRotatedArray(arr, queries) {
    const results = [];

    function findPivot(arr) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > arr[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    function binarySearch(arr, left, right, target) {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    const pivot = findPivot(arr);
    const n = arr.length;

    for (let key of queries) {
        let result = -1;
        if (arr[pivot] <= key && key <= arr[n - 1]) {
            result = binarySearch(arr, pivot, n - 1, key);
        } else {
            result = binarySearch(arr, 0, pivot - 1, key);
        }
        results.push(result);
    }
    return results;
}

// Sample Input 1
const arr1 = [2, 5, -3, 0];
const queries1 = [5, 1];
console.log(search(arr1, 5))
console.log(search(arr1,1))

console.log(searchInRotatedArray(arr1, queries1)); // [1, -1]

// Sample Input 2
const arr2 = [100, -2, 6, 10, 11];
const queries2 = [100, 6];
console.log(search(arr2, 100))
console.log(search(arr2,6))

console.log(searchInRotatedArray(arr2, queries2)); // [0, 2]
