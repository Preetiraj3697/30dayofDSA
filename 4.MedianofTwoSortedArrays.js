// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Solution

function MedianOfTwoSortedArrays(nums1,nums2){
    let merge = [...nums1,nums2].sort((a,b)=>{
        return a-b;
    })
    // console.log(merge);
    if(merge.length%2!==0){
        return merge[Math.round(merge.length/2)-1];
    }
    let middle = merge[(merge.length/2)-1];
    let middle2 = merge[merge.length/2];

    return (middle+middle2)/2
}
let middle = MedianOfTwoSortedArrays([1,2],[3,4])
console.log('middle: ', middle);
