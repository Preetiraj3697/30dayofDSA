// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// 1st solution
// var mySqrt = function(x) {
//      let val = 0;
//      while((val * val) <= x) val++;
//      return val - 1;
// };

// 2nd solution
// var mySqrt = function(number) {
//     if (number === 0) {
//      return 0;
//    }
 
//    var lower = 0;
//    var upper = number;
//    var guess = Math.floor((upper + lower) / 2);
 
//    while (lower <= upper) {
//      if (guess * guess === number) {
//        return guess;
//      } else if (guess * guess < number) {
//        lower = guess + 1;
//        guess = Math.floor((upper + lower) / 2);
//      } else {
//        upper = guess - 1;
//        guess = Math.floor((upper + lower) / 2);
//      }
//    }
 
//    return guess;
// };
 
//3rd solution (Binary Search)

var mySqrt = function(x) {
    if(x < 2) return x;
      let result = 0;
      let start = 1;
      let end = x/2;
  
      while(start<=end){
          let mid = Math.floor(start + (end-start)/2);
          let sqr = mid*mid;
          if(sqr == x) return mid;
          else if(sqr<x){ start = mid + 1; result = mid;}
          else end = mid - 1;
  
      }
  
      return result;
  };
const res = mySqrt(9);
console.log(res);