// Pattern Printing IV Ended
// Description

// Given an integerN, and a pattern. Print the pattern as given in the sample I/O.

// Note: Please check for spaces.


// Input
// The first and the only line of the input contains the value ofN.

// Constraints

// 1 <=N<= 25


// Output
// Print the pattern as given in the sample test case.



// Sample Input 1 

// 5
// Sample Output 1

// * * * * *
// *       *
// *       *
// *       *
// *       *

function fun(n){
    let string = "";

   for(let i = 0; i < n; i++) { 
   for(let j = 0; j < n; j++) { 
      if(i === 0) {
        string += "*"+" ";
      }else {
        if(j === 0 || j === n - 1) {
         string += "*"+" ";
      }else {
       string += " "+" ";
      }
     }
   }
 // newline after each row
 string += "\n";
}
// printing the string
console.log(string);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    let n = +input[0];
    fun(n);
    
}
if(process.env.USER===""){
    runProgram('');
}else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read="";
    process.stdin.on("data",function(input){
        read+=input;
    });
    process.stdin.on("end",function(){
        read=read.replace(/\n$/,"");
        read=read.replace(/\n$/,'');
        runProgram(read);
    });
    process.on('SIGINT',function(){
        read=read.replace(/\n$/,"");
        runProgramm(read);
        process.et(0);
    });
}