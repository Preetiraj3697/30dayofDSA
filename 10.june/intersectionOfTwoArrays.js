// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// 1st solution using set
var intersection = function(nums1, nums2) {
    let result = new Set()
    for(let i =0 ; i < nums2.length; i++){
        if(nums1.includes(nums2[i])){
            result.add(nums2[i])
        }
    }
    return [...result]
};
var intersection = function(nums1, nums2) {
    const nums1Unique = [...new Set(nums1)];
    const nums2Unique = [...new Set(nums2)];

    let newArr = []
    for(let i=0; i<Math.max(nums1Unique.length,nums2Unique.length); i++){
        if(nums2Unique.includes(nums1Unique[i])){
            newArr.push(nums1Unique[i])
        }
    }

    return newArr
};
//2nd solution 
var intersection = function(nums1, nums2) {
    let arr=[]
    for(let num of nums1){
        if(nums2.includes(num) && !arr.includes(num)){
            arr.push(num)
        }
    }
    return arr
};
console.log(intersection([1,2,2,1],[2,2]))
console.log(intersection([4,9,5],[9,4,9,8,4]))
