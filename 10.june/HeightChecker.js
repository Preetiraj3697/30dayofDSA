// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

function HeightsChecker(heights) {
    let expected = heights.slice().sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++){
        if (heights[i] !== expected[i]) {
            count++;
        }
    }
    return count;
}
console.log(HeightsChecker([5, 1, 2, 3, 4]))
console.log(HeightsChecker([1,1,4,2,1,3]))
console.log(HeightsChecker([1, 2, 3, 4, 5]))

// 2nd solution
var heightChecker = function(heights) {
    let ex=[...heights].sort((a,b)=>a-b);
     console.log(ex)
     return heights.filter((ele,index)=>{
         return ele!==ex[index];
     }).length
 };
 console.log(heightChecker([5, 1, 2, 3, 4]))
 console.log(heightChecker([1,1,4,2,1,3]))
 console.log(heightChecker([1, 2, 3, 4, 5]))