// Fixing Maze Ended
// Description

// Consider a maze represented using a grid consisting of n rows and m columns. The cell in the i-th row from the top and the j-th column from the left is defined (i,j).

// Every cell, except (n,m), has a direction assigned to it i.e either right or down (R and D respectively). If the matrix (i,j) is assigned direction R, anyone on that cell moves to the cell (i, j+1) and if it is assigned D, anyone on that cell moves to the cell (i+1, j).

// If at any moment, the moves make the person out of the maze, it is considered to be lost.

// There is an exit at the cell (n,m) from where everyone can exit. The cell (n,m) is assigned E for this reason. The maze is functional if and only if any person reaches the exit regardless of which cell it is placed in initially i.e, eventually end up in the cell (n,m). (Consider they do not go out of the maze in between and are not lost)

// The maze may not be functional initially. Determine the minimum number of changes to make it functional. The answer always exists.

// Check the sample input/output for more clarification.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains two integers n,m (1 ≤ n ≤ 100, 1≤ m ≤100)  — the number of rows and columns, respectively.

// The following n lines each contain m characters. The j-th character in the i-th line, Aij is the initial direction of the cell (i,j).


// Output
// For each case, output in a new line the minimum number of cells that you have to change to make the maze functional.


// Sample Input 1 

// 4
// 3 3
// RRD
// DDR
// RRC
// 1 4
// DDDC
// 6 9
// RDDDDDRRR
// RRDDRRDDD
// RRDRDRRDR
// DDDDRDDRR
// DRRDRDDDR
// DDRDRRDDC
// 1 1
// C
// Sample Output 1

// 1
// 3
// 9
// 0

function runProgram(input){
    //Input Taking Here
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let [n,m] = input[line++].trim().split(" ").map(Number);
        let mat = [];
        for(let j=0; j<n; j++){
            let arr = input[line++];
            mat.push(arr);
        }
        fun(n,m,mat)
    }
    function fun(n,m,mat){
        let count = 0; 
        for(let i=0; i<n; i++){
            if(mat[i][m-1]=="R"){
                count++;
            }
        }
        for(let i=0; i<m; i++){
            if(mat[n-1][i] == "D"){
                count++;
            }
        }
        console.log(count)
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