// You are given an array/list ‘ARR’ consisting of ‘N’ distinct integers arranged in ascending order. You are also given an integer ‘TARGET’. Your task is to count all the distinct pairs in ‘ARR’ such that their sum is equal to ‘TARGET’.

// Note:

// 1. Pair (x,y) and Pair(y,x) are considered as the same pair.

// 2. If there exists no such pair with sum equals to 'TARGET', then return -1.
// Example:

// Let ‘ARR’ = [1 2 3] and ‘TARGET’ = 4. Then, there exists only one pair in ‘ARR’ with a sum of 4 which is (1, 3). (1, 3) and (3, 1) are counted as only one pair.
// Detailed explanation ( Input/output format, Notes, Images )
// Constraints:
// 1 <= ‘T’ <= 100
// 2 <= ‘N’ <= 5000
// 1 <= ‘ARR[i]’, ‘TARGET’ <= 10^5

// Where ARR[i]’ represents the elements of array/list ‘ARR’.

// Time Limit: 1 sec
// Sample Input 1:
// 2
// 5 6
// 1 2 3 4 5
// 6 7
// 1 2 3 4 5 6
// Sample Output 1:
// 2
// 3
// Explanation for Sample Output 1:
// In test case 1, there exist only 2 pairs whose sum is equal to ‘TARGET’ i.e (1, 5) and (2, 4).

// In test case 2, there are 3 pairs whose sum is equal to ‘TARGET’ which are  (1, 6), (2, 5), and (3, 4).
// Sample Input 2:
// 2
// 4 10
// 1 3 5 6
// 5 12
// 1 3 6 9 11
// Sample Output 2:
// -1
//  2
// Explanation for Sample Output 2:
// In test case 1, there is not a pair whose sum is equal to ‘TARGET’. So we return -1.

// In test case 2, there are 2 pairs whose sum is equal to ‘TARGET’, (1, 11) and (3, 9) respectively.


function pairSum(arr, k) {
    let start = 0, end = arr.length - 1;
    let sum = 0, count = 0;
    while (start < end) {
        sum = arr[start] + arr[end];
        if (sum == k) {
            count++;
            start++;
            end--;
        } else if (sum < k) {
            start++;
        } else {
            end--;
        }
    }
    return count !== 0 ? count : -1;
}
// const res = pairSum([1, 3, 5, 6], 10);
// console.log(res);
// const res2 = pairSum([1, 2, 3, 4, 5, 6], 7)
// console.log(res2);


var twoSum = function(nums, target) {
    // Brute Force
    // let count = 0;
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if((target - nums[i] == nums[j])){
    //             count++;
    //         }
    //     }
    // }
    // return count !== 0 ? count : -1;
    // 2nd solutions
    // let obj = {}, count = 0;
    // for(let i=0; i<nums.length; i++){
    //    let x = nums[i];
    //    if(obj[target-x]>=0){
    //        count++;
    //    }else{
    //     obj[x] = i;
    //    }
    // }
    // return count !== 0 ? count : -1;

    // 3rd solution
    let complimentToIndexMap = {}, count = 0;

    for(i=0; i < nums.length; i++) {
        const num = nums[i]
        const compliment = target - num

        if(complimentToIndexMap.hasOwnProperty(compliment)) {
            count++;
        }

        complimentToIndexMap[num] = i
    }
    return count !== 0 ? count : -1;
};

const res = twoSum([1, 3, 5, 6], 10);
console.log(res);
const res2 = twoSum([1, 2, 3, 4, 5, 6], 7)
console.log(res2);