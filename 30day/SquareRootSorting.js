// Square Root Sorting Ended
// Description

// Given an array of N space-separated integers, you have to sort the given array in increasing order of their absolute value integer square root. If two numbers have the same integer square root value then the smaller number comes first in the sorted array.

// Integer Square Root Value

// of 4 is 2

// of 5 is also 2

// of 8 is also 2

// of 9 is 3

// of -9 is 3

// of -8 is 2


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains an integer n, the size of the array.

// Second-line contains n space-separated integers.

// Constraints

// 1 <= T <= 10

// 1 <= n <= 1000

// -1000 <= arr[i] <= 1000


// Output
// For each test case, print the required sorted array, in a new line.


// Sample Input 1 

// 2
// 3
// 4 9 1
// 5
// 8 4 5 11 9
// Sample Output 1

// 1 4 9
// 4 5 8 9 11
// Hint

// In the first test case

// Square root array will be like 2 3 1, after sorting this array we get 1 2 3 and then placing the corresponding number we get 1 4 9



// In the second test case

// Square root array will be 2 2 2 3 3, after sorting this array we get 2 2 2 3 3 and then place the corresponding number with the condition that if root are same then a smaller number is placed before larger therefore we get 4 5 8 9 11.

