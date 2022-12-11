// Exit the Grid Ended
// Description

// You are playing the famous Maze Runner Arcade Game. The game contains a maze which has values{'L', 'R', 'U', 'D'}, where L -> indicates that you move left, R -> indicates that you move right,

// U -> indicates that you move up, while D -> indicates that you move down. The score is calculates as the number of moves in which you exit the grid. If you cannot exit the grid, that means your

// scoreshould be returned as 0. Given a square matrix, denoting the maze, write a program to calculate the score.

// Note: You will always enter that the maze through the position (0,0).


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N, the size of the maze, given in the form of square matrix.

// Next N lines contain N characters each, denoting in which direction to move.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 50


// Output
// For each test case, print the score, on a new line.


// Sample Input 1 

// 3
// 4 
// RRRR
// LLLL
// UUUU
// DDDD
// 3
// LRL
// UUU
// DLR
// 2
// RL
// DD
// Sample Output 1

// 4
// 1
// 0

function exitTheGrid(N,mat){
    let moves=0;
    let i=0;
    let j=0;
    
    while( i<N && i>=0  && j<N && j>=0 ){
       
        
        if(mat[i][j]=="L"){
            mat[i][j]="visited";
            j--;
            moves++;
        }
        else if(mat[i][j]=="R"){
            mat[i][j]="visited";
            j++;
            moves++;
        } else   if(mat[i][j]=="D"){
            mat[i][j]="visited";
            i++;
            moves++;
        }
       
        else  if(mat[i][j]=="U"){
            mat[i][j]="visited";
            i--;
             moves++;
        }else if(mat[i][j]=="visited"){
            moves=0;
            break;
       }
       
    }
    
  console.log(moves)  
}




 


 function runProgram(input){
     //Input Taking Here
    input=input.trim().split("\n")
   let tc = +input[0] ;
   let line=1 ;
  for(let i=0 ; i<tc ; i++){
   let n= +input[line] ;
   line++
   let arr=[] ;
   for(let j=0 ; j<n ;j++)
   {
       let mat=input[line].trim().split("")
       line++
       arr.push(mat)
   }
  exitTheGrid(n,arr);
    
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
