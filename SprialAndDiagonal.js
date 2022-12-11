// Spirals and Diagonals Ended
// Description

// You are given an integer n. The next line is an array A which contains n*n elements. The spiral traversal of a square matrix of dimension (n x n) results in the given array.

// Calculate the sum of all elements which are on the diagonals of the square matrix.

// The matrix traversal happens in the manner shown in the image below

// spiral-order-traversal-of-a-matrix-.png


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100)

// The second line contains n*n integers (1 ≤ Ai ≤ 1000) - The spiral traversal of a square matrix of dimension n x n.


// Output
// For each test case, print the answer: The sum of elements present in the diagonals of the matrix.


// Sample Input 1 

// 3
// 1
// 1
// 2
// 1 2 3 4
// 3
// 1 2 3 4 5 6 7 8 9
// Sample Output 1

// 1
// 10
// 25
// Sample Input 2 

// 1
// 4
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
// Sample Output 2

// 68

function SpiralsandDiagonals(N,A){
    let array=[];
    let top=0;
    let left=0;
    let right=N-1;
    let bottom=N-1;
    let count=0;
    for(let i=0; i<N; i++){
        let arr=[];
        for(let j=0; j<N; j++){
            arr.push(count)
        }
        array.push(arr)
    }
    //console.log(array)
    while(count<N*N){
        for(let i=left; i<=right; i++ ){
            array[top][i]=A[count];
            count++;
        }
        top++;
        for(let i=top; i<=bottom; i++ ){
            array[i][right]=A[count];
            count++;
        }
        right--;
         for(let i=right; i>=left; i-- ){
            array[bottom][i]=A[count];
            count++;
        }
        bottom--;
        for(let i=bottom; i>=top; i--){
          array[i][left]=A[count]
          count++
      }
        left++;
         //console.log(array)
    }
    let sum=0;
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(i-j===0 || i+j==(N-1)){
                sum+=array[i][j]
            }
        }
    }
    console.log(sum)
   
}


function runProgram(input){
      input=input.trim().split("\n");
      var tc= +input[0];
     var line=1;
     for(let i=0; i<tc; i++){
         var N=+input[line++];
          var arr=input[line++].trim().split(" ").map(Number);
              //console.log(tc,N,arr);
            SpiralsandDiagonals(N,arr)
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