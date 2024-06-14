// You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
// Return the minimum number of moves to make every value in nums unique.
// The test cases are generated so that the answer fits in a 32-bit integer.
// Example 1:
// Input: nums = [1,2,2]
// Output: 1
// Explanation: After 1 move, the array could be [1, 2, 3].
// Example 2:
// Input: nums = [3,2,1,2,1,7]
// Output: 6
// Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
// It can be shown with 5 or less moves that it is impossible for the array to have all unique values.


var minIncrementForUnique = function(nums) {
  
    const n = nums.length;
    let max = Math.max(...nums)
    const count = new Int32Array(max + n)
    nums.forEach(num => count[num]++);
    let moves = 0;
    let taken = 0;
    for (let i = 0; i < n + max; i++) {
      if (count[i] >= 2) {
        taken += count[i] - 1;
        moves -= i * (count[i] - 1)
      } else if (taken > 0 && count[i] === 0) {
        taken--;
        moves += i;
      }
    }
  
    return moves;
};
  
// 2nd solution

var minIncrementForUnique = function(nums) {
    nums.sort((a, b) => (a - b))
   let mincount = 0
   for (let i = 1; i < nums.length; i++) {
       if (nums[i] == nums[i - 1]) {
           nums[i] += 1
           mincount++
       }
       else if (nums[i] < nums[i - 1]) {
           let diff = Math.abs(nums[i] - nums[i - 1])
           nums[i] += diff + 1
           mincount += diff + 1
       }
   }
   return mincount
};

console.log(minIncrementForUnique([3,2,1,2,1,7]))







