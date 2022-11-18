// Find X Ended
// Description

// You are given a number X. Find the value of X, if

// 1. X is multiplied by 3

// 2. 10 is added to the new value of X.


// Input
// Input:

// Input will contain one number X


// Constraints:

// 0 < X < 1000


// Output
// Output:

// Output should be the number X after performing above operations


// Sample Input 1 

// 3
// Sample Output 1

// 19
// Hint

// Explanation

// The value of X = 3, after multiplying with 3, X becomes 9, and then after adding 10, it becomes 19. So, the output is 19


//Code
function findX(x) {
    // Write code here
    x=x*3;
    x=x+10;
    console.log(x);
    
}
findX(3)
