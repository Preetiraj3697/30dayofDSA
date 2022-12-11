// Pattern Printing - X Square Ended
// Description

// You are given an integerN.

// Print the pattern as shown below.

// If the value stored inN = 7, then the pattern required will be

// * * * * * * * 
// * *       * * 
// *   *   *   * 
// *     *     * 
// *   *   *   * 
// * *       * * 
// * * * * * * * 


// Input
// The first and only line contains the value of N


// Output
// Print the pattern as shown in the problem statement


// Sample Input 1 

// 7
// Sample Output 1

// * * * * * * *
// * *       * *
// *   *   *   *
// *     *     *
// *   *   *   *
// * *       * *
// * * * * * * *
// Sample Input 2 

// 3
// Sample Output 2

// * * *
// * * *
// * * *

function patternPrinting(n) {
    let string = "";

    for(let i = 0; i < n; i++) { 
    for(let j = 0; j < n; j++) { 
       if(i === 0 || i === n - 1) {
         string += "*"+" ";
       }else {
         if(j === 0 || j === n - 1) {
          string += "*"+" ";
       }else if(i==j){
           string += "*"+" ";
       }else if(i+j==n-1){
            string += "*"+" ";
       }
       else {
        string += " "+" ";
       }
      }
    }
  string += "\n";
}
console.log(string);
}
