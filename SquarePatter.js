// Square Pattern Ended
// Description

// Given an integer N, you need to print a square pattern as given in sample input/output.


// Input
// The first line contains a number N.

// Constraints:

// 3 <= N <= 10


// Output
// Print a square pattern for N.


// Sample Input 1 

// 4
// Sample Output 1

// * * * *
// *     *
// *     *
// * * * *
// Sample Input 2 

// 3
// Sample Output 2

// * * *
// *   *
// * * * 

function fun(n){
    let string = "";

   for(let i = 0; i < n; i++) { 
   for(let j = 0; j < n; j++) { 
      if(i === 0 || i === n - 1) {
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

