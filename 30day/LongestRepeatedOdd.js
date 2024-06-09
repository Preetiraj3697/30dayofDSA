// Longest Repeated Odd Ended
// Description

// You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.


// Input
// Input Format

// First line contains N which is the number of element present in the array.

// Second line contains N integers which are the values of array.

// Constraints

// N<100


// Output
// Output Format

// Output one integer which the maximum number of times an odd number is repeated in array.


// Sample Input 1 

// 12
// 1 1 1 1 2 2 2 2 2 1 1 1
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// 1 is repeated 4 times from index 0 to index 3 => 4 times

// 2 is repeated 5 times from index 4 to index 8 => 5 times

// 1 is repeated 3 times from index 9 to index 11 => 3 times

// So, the output is 4 since 1 is odd.

//CODE  =>

function  LongestRepeatedOdd(loop, data){
    
    var count=0;
  
  for(var i=0;i<loop;i++)
  {
      var count1=0;
    if(data[i]%2==1)
    {
      for(var j=i;j<loop;j++)
      {
        if(data[i]==data[j])
        {
          count1++
        }
        else
        {
          break
        }
      }
    }
    if(count1>count)
    {
      count=count1
    }

  }
  console.log(count)

}


LongestRepeatedOdd(12, [1,1,1,1,2,2,2,2,2,1,1,1])