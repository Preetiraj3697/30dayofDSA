// Set Zeroes Ended
// Description

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.


// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the size of the matrix, n and m
// The next n lines each contains m values (0 or 1)
// Constraints

// 1<=t<=10

// 1<=n,m<=500


// Output
// Print the modified matrix.


// Sample Input 1 

// 1
// 3 3
// 1 1 1
// 1 0 1
// 1 1 1
// Sample Output 1

// 1 0 1
// 0 0 0 
// 1 0 1


function   setZeroes(row,col,matrix) {
   
    
    let mat=[];
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(matrix[i][j]===0){
                  mat.push([i,j])
            }
          
        }
    }
    //console.log(mat)
    for(let i=0; i<mat.length; i++){
        let [m,n]=mat[i];
        //console.log(m,n)
        final(m,n,row,col)
    }
    function final(m,n,row,col){
       
       for(let i=0; i<col; i++){
           matrix[m][i]=0;
       }
       for(let j=0; j<row; j++){
           matrix[j][n]=0
       }
       
        //console.log(matrix)
       
    }
      for(let s=0; s<matrix.length; s++){
           console.log(matrix[s].join(" "))
        }
}
// let matrix=[[1,1,1],[1,0,1],[1,1,1]]
// setZeroes(matrix)

 function runProgram(input){
      input=input.trim().split("\n");
    var tc= +input[0];
    var line=1;
    for(let i=0; i<tc; i++){
        var [n,m]= input[line++].trim().split(" ").map(Number);
        var mat=[];
        for(var j=0; j<n; j++){
            var temp= input[line++].trim().split(" ").map(Number);
            mat.push(temp);
           
        }
        //console.log(n,m,mat)
        setZeroes(n,m,mat)
 }
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
