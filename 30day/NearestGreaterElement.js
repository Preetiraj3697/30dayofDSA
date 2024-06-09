// Nearest Greater Element Ended
// Description

// You are given an array A of size N. For each element, print the closest greater element, to that particular element. If there is no greater element for a particular element, print -1.

// If the two values, are equidistant from a particular value, print the value that occurs to the left of it.

// Refer the sample I/O for better understanding


// Input
// The first line of the input contains T, the number of test cases. The first line of each test case contains N, the size of the array.

// The next line contains N space separated integers, denoting the array elements.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 1 <= A[i] <= 10^4


// Output
// For each test case, print N space separated integers, denoting the nearest greater element in the array, and -1, if no such element exists, on a new line.


// Sample Input 1 

// 1
// 5
// 5 4 1 3 2
// Sample Output 1

// -1 5 4 4 3
// Hint

// In the sample test case, the first element 5 has no element greater than it, either to the left of it, or to the right of it, therefore, the output is -1.

// The second element 4 has only one element greater than it, which is 5, which occurs to the left of it, therefore, the output for 4 is 5.

// The third element is 1, which has four elements greater than it in the array, which are {5,4,3,2}. The closest to 1 are {4,3}, but 4 occurs to the left side. therefore, the output is 4.

// The fourth element is 3, the elements greater than 3 in the array are {4,5} which both occur to the left of it. But the closer one is 4, therefore, the output is 4.

// The fifth element 2 has three elements greater than it, {5,4,3}. The value closest to the element 2 is 3, therefore, the output is 3.
function Nearest_Greater_ElementNelem(size,arr){
    let result1 =[];
    let result2 =[];
    let result3 = [];
    let n= size-1;
      
    let s1=[];
    for(let i =0 ; i<= n ;i++){
        result1.push(0);
        result2.push(0);
        result3.push(0);
    }
    for(let i=0; i<=n ; i++){
        while(s1.length>0 && arr[s1[s1.length-1]]<=arr[i]){
            s1.pop();
        }
        if(s1.length===0){
            result1[i]= -1;
            s1.push(i);
        }
        else{
            result1[i]=s1[s1.length-1];
            s1.push(i);
        }
    }
    // console.log(result1);
    let s2 = [];
    for(let i=n ; i>=0 ; i--){
        while(s2.length>0 && arr[s2[s2.length-1]]<=arr[i]){
            s2.pop()
        }
        if(s2.length===0){
            result2[i]=-1;
            s2.push(i);
        }
        else{
            result2[i]=s2[s2.length-1];
            s2.push(i);
        }
    }
    result3 = [];
    
    for(let i=0 ; i<=n ; i++){
        if(result1[i]===-1 && result2[i]===-1) {
            result3[i] = -1;
        }
        else if (result1[i] === -1){
            result3[i] = arr[result2[i]];
        }
        else if (result2[i] === -1){
            result3[i] = arr[result1[i]];
        }
        else {
            if (Math.abs(i-result1[i]) <= Math.abs(i-result2[i])){
                result3[i] = arr[result1[i]];
            }
            else {
                result3[i] = arr[result2[i]];
            }
        }
    }
    // console.log(result1, result2);
    console.log(result3.join(" "));
}


function runProgram(read){
    read = read.trim().split("\n");
    let tc=+read[0];
    let line=1;
    for(let i=0; i<tc ;i++){
        let size = +read[line++];
        let arr = read[line++].trim().split(" ").map(Number);
        Nearest_Greater_ElementNelem(size,arr)
    }
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }
