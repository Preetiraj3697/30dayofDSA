// Smaller Neighbour Element Ended
// Description

// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.


// Input
// Input Format:

// First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

// Second line contains N space separated integers denoting the elements of the array.

// Constraints:

// N <= 100000


// Output
// Print N space separated integers denoting the array G.


// Sample Input 1 

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// -1 -1 -1 -1 4 24 24 -1

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    let tc = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
         fun(tc,arr)
    
  function fun(n,arr){
      let bag="";
      for(let i=0; i<n; i++){
          let j
          for(j=i-1; j>=0; j--){
             if (arr[j] < arr[i])
           {
                bag+=(arr[j] + " ");
               break;
           }
          }
          if (j == -1){
               bag+=(-1+" ");
          }
         
         
      }
       console.log(bag)
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