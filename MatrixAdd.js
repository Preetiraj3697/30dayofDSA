// Matrix Add Ended
// Description

// Given 2 matrix , find and print the matrix which is the sum of both the matrix. If they cannot be added together output -1



// Note: 2 matrix can only be added if both of them have same number of rows and same number of columns


// Input
// The first line of input will contain 4 integers denoting R1, C1, R2, C2, which is the number of rows of matrix 1, the number columns of matrix 1,the number of rows of matrix 2, number columns of matrix 2 respectively.

// Next R1 lines will contain C1 integers, which are the matrix elements.

// Next R2 lines will contain C2 integers, which are the matrix elements.



// Constraints:
// 1<= R1,C1,R2,C2 <=100

// 1<= Matrix[i][j] <= 100


// Output
// Output the new matrix ( sum of matrix 1 and matrix 2 ), if it cannot be added then output -1


// Sample Input 1 

// 2 2 2 2
// 1 2
// 3 4
// 2 3
// 4 5
// Sample Output 1

// 3 5
// 7 9

function matrixadd(r1,c1,r2,c2,mat,mat2){
 
    let sum=0;
   if(r1!==r2 && c1!==c2){
       console.log(-1)
   }else{
        
       for(let i=0; i<r1; i++){
                let bag=[];
           for(let j=0; j<c1; j++){
               bag.push(sum+(mat[i][j]+mat2[i][j])) 
                  
           }
           console.log(bag.join(" ")) 
       }
      
   }
 
    
 }
 function runProgram(input){
      input=input.trim().split("\n")
       let [r1,c1,r2,c2]=input[0].trim().split(" ").map(Number);
      let line=1;
  
          let mat=[];
          for(let i=0; i<r1; i++){
              mat.push(input[line++].trim().split(" ").map(Number));
          }
           let mat2=[];
          for(let i=0; i<r2; i++){
              mat2.push(input[line++].trim().split(" ").map(Number));
          }
          //console.log(r1,c1,r2,c2,mat)
          matrixadd(r1,c1,r2,c2,mat,mat2)
          //diffV(N,M,mat);
      
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
 


