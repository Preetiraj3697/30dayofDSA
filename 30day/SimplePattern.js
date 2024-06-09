// Simple Pattern Drawing Ended
// Description

// You have to write code that draws a Snake for you according to the following rules:

// A snake is a pattern on a n by m table. Denote c-th cell of r-th row as (r, c). The tail of the snake is located at (1, 1), then it's body extends to (1, m), then goes down 2 rows to (3, m), then goes left to (3, 1) and so on.

// The empty cells should be represented as dot characters ('.') and the snake cells should be filled with number signs ('#').

// Consider sample tests in order to understand the snake pattern.


// Input
// Input Format

// The only line contains two integers: n and m.

// n is an odd number.



// Constraints

// 3 ≤ n,m ≤ 50


// Output
// Output Format

// Output n lines. Each line should contain a string consisting of m characters. Do not output spaces.


// Sample Input 1 

// 3 3
// Sample Output 1

// ###
// ..#
// ###
// Sample Input 2 

// 5 3
// Sample Output 2

// ###
// ..#
// ###
// #..
// ###
// Sample Input 3 

// 9 9
// Sample Output 3

// #########
// ........#
// #########
// #........
// #########
// ........#
// #########
// #........
// #########


function fun(n,m){
    let count =0;let bag="";
   for(let i=0; i<n; i++){
       if(i%2===0){
            for(let j=0; j<m; j++){
           bag+="#";
          }
       }else{
           count++;
           for(let j=0;j<m;j++){
                   if(count%2==1&&j==m-1){
                        bag+="#";
                   }
                   else if(count%2===0&&j===0){
                        bag+="#";

                   }
                   else {
                        bag+=".";
                   }
           }
       }
      bag+="\n";
   }
   console.log(bag);
}

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    let [n,m] = input[0].trim().split(" ").map(Number);
    fun(n,m);
    
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