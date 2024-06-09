// <!-- Subarrays Having Sum Less Than M Ended
// Description

// Given an array A of size n with positive numbers, find the total number of subarrays that have sum < m.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) and M as mentioned in the question.

// The second line of the test case contains n integers (1 ≤ Ai ≤ 100).


// Output
// For each test case, print the answer: The number of subarrays.


// Sample Input 1 

// 1
// 5 5
// 1 5 1 3 2
// Sample Output 1

// 5 -->

// //Code

function  suchPair(n,k,arr){
 
    let start = 0, end = 0;
           let count = 0, sum = arr[0];
     
           while (start < n && end < n) {
     
               if (sum < k) {
                   end++;
     
                   if (end >= start)
                       count += end - start;
     
                   if (end < n)
                       sum += arr[end];
               }
     
               else {
                   sum -= arr[start];
                   start++;
               }
           }
     
       console.log(count);
       
       
   }
   suchPair(5,5,[1,5,1,3,2])