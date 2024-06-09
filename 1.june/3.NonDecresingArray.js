// Example 1:

// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:

// Input: nums = [4,2,1]
// Output: false
// Explanation: You cannot get a non-decreasing array by modifying at most one element.

const nums = [4, 2, 1];
// const nums = [4, 2, 3];
var checkPossibility = function(nums) {
   let count=0 ;
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i] > nums[i+1]) {
             if (nums[i-1] > nums[i+1]) {
                nums[i+1] = nums[i];
            }
            count++;
        } 
        if(count>1) return false;
  
    }
    return true;
};
//second solution
var checkPossibility = function(N) {
    for (let i = 1, err = 0; i < N.length; i++)
        if (N[i] < N[i-1])
            if (err++ || (i > 1 && i < N.length - 1 && N[i-2] > N[i] && N[i+1] < N[i-1]))
                return false 
    return true
};
console.log(checkPossibility(nums))