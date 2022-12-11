// Counting valleys Ended
// Description

// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactlystepssteps, for every step it was noted if it was an uphill,U, or a downhill,Dstep. Hikes always start and end at sea level, and each step up or down represents a1unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.

// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.


// Input
// Input Format
// The first line contains an integersteps, the number of steps in the hike.

// The second line contains a single stringpath, of characters that describe the path.

// Constraints
// 2 <= steps <= 10^6

// path[i]='U' || path[i]='D


// Output
// Output Format
// Print the number of valleys walked through


// Sample Input 1 

// 8
// UDDDUDUU
// Sample Output 1

// 1
// Hint

// First testcase
// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// Capture.PNG

// The hiker enters and leaves one valley.

function countingValleys(steps, path) {
    // Write your code here

    let strArr = path.split('')
    let count = 0
    let result = 0
    for(let i=0; i<steps; i++){
        if(count == 0 && strArr[i].toLowerCase() == 'd'){
            count -= 1
           
           
        } else if(strArr[i].toLowerCase() == 'u'){
            count += 1
              
        
        } else {
            count -= 1
           
        }
        if(count===0 && strArr[i].toLowerCase() =="u"){
            result++;
        }
        
    }
    console.log(result)
}

 function runProgram(input){
     input=input.trim().split("\n")
     let steps= +input[0];
     let path = input[1];
     
     countingValleys(steps, path)
     
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
