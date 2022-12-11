// Pattern Printing - Rhombus Ended
// Description

// A Rhombus is a flat shape with 4 equal straight sides. A rhombus looks like a diamond. All sides have equal length. Opposite sides are parallel, and opposite angles are equal (it is a Parallelogram)

// Given a digit n, form a rhombus.

// The rules for forming the rhombus are:

// - n should be present in the centre of the rhombus

// - digits should decrease as they approach the edges of rhombus

// For example, for n = 5 the pattern should look like shown below:

// Screenshot.png



// You have to write a program that prints a pattern for a given value of n


// Input
// Input Format

// The first line contains the single integer n

// Constraints

// 2 ≤ n ≤ 9


// Output
// Print a picture for the given n. You should strictly observe the number of spaces before the first digit on each line.

// Every two adjacent digits in the same line should be separated by exactly one space.

// There should be no spaces after the last digit at the end of each line.


// Sample Input 1 

// 2
// Sample Output 1

//     0
//   0 1 0
// 0 1 2 1 0
//   0 1 0
//     0

function fun(n){
    let sec=[];
   for(let i=0; i<=n; i++){ 
     let bag="";
   for(let j=1; j<=n-i; j++){  
        bag+="  ";
   }
   for(let k=0; k<=i; k++){ 
      bag+=k+" ";
   }
   for(let l=i-1; l>=0; l--){
      bag+=l+" ";
   }
    console.log(bag);
    sec.push(bag);
   }
   // console.log(sec);
   sec.reverse();
  
    for(let i=1; i<sec.length; i++){
        console.log(sec[i]);
    }
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
