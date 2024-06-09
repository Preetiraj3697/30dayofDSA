// Equilibrium index of an array
// Given a sequence arr[] of size n, Write a function int equilibrium(int[] arr, int n) that returns an equilibrium index (if any) or -1 if no equilibrium index exists. 

// The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes. 

// Input: A[] = {-7, 1, 5, 2, -4, 3, 0}
// Output: 3
// 3 is an equilibrium index, because:
// A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

// Input: A[] = {1, 2, 3}
// Output: -1

function fun(arr) {
        var i, j, leftsum, rightsum;
        for(i = 0; i < n; ++i){
                leftsum = 0;
                 for(let j = 0; j < i; j++)
                 leftsum += arr[j];
                  
                 /*get right sum*/
                 rightsum = 0;
                 for(let j = i + 1; j < n; j++)
                 rightsum += arr[j];
                  
                 /*if leftsum and rightsum are same,
                 then we are done*/
                 if(leftsum == rightsum)
                    return i;
            }
             
            /* return -1 if no equilibrium index is found*/
               return -1;
}