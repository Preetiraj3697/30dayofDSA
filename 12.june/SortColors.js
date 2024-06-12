// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// brute force (1st solution)
var sortColors = function(nums) {
    for (let j = nums.length; j >= 0; j--) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                let temp = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = temp
            }
        }
    }
};

// 2nd solution
var sortColors = function(nums) {
    let left = 0; // Pointer for red elements
    let right = nums.length - 1; // Pointer for blue elements
    let i = 0; // Current index
    
    while (i <= right) {
        if (nums[i] === 0) {
            // If current element is red, swap with left pointer
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            // If current element is blue, swap with right pointer
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            // If current element is white, move to the next element
            i++;
        }
    }

};

//3rd solution
var sortColors = function(nums) {
    nums.sort((a,b) => {
        return a-b;
    })
    return nums
};

//4th solution

var sortColors = function(arr) {
    const n = arr.length;
      let low = 0,
        mid = 0,
        high = n - 1;
    
      while (mid <= high) {
        // case 1
        if (arr[mid] === 0) {
          // swap arr[low], arr[mid]
          let temp = arr[low];
          arr[low] = arr[mid];
          arr[mid] = temp;
          // increase low and mid;
          low++;
          mid++;
        }
    
        // case 2
        else if (arr[mid] === 1) {
          mid++;
        }
    
        // case 3 -> if arr[mid] === 2;
        else {
          // swap arr[mid], arr[high]
    
          let temp = arr[high];
          arr[high] = arr[mid];
          arr[mid] = temp;
          high--;
        }
      }
    };

