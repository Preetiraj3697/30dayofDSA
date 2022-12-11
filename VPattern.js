// V Pattern Ended
// Description

// You need to print pattern as given in Sample Input.
// Note:- Make sure to check for spaces. In output, there is no spaces at end of each line.


// Input
// First line contains N. (1<= N <= 10)



// Output
// Print pattern for N.



// Sample Input 1 

// 1
// Sample Output 1

// \/
// Sample Input 2 

// 4
// Sample Output 2

// \      /
//  \    /
//   \  /
//    \/


function fun(n){
    for(let i=0; i<n; i++){
                let bag= "";
                for(let j=0; j<2*n; j++){
                    if(i==j){
                        bag+="\\";
                    }else if(i+j==2*n-1){
                        bag+="/";
                    }else{
                        bag+=" ";
                    }
                }
                console.log(bag);
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