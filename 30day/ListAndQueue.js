// List and Queue Ended
// Description

// You need to implement a queue data structure with a list using plain list methods. You can only use list.append() and list.pop() methods in this question.

// Note-You can't uselist.pop(index) too in this question.


// Input
// The first line contains the number of operations (t).

// Next t lines contains commands for the queue.

// Eg- E 3 means add 3 in the queue

// D means to remove the front element of the queue and print it on the screen

// Note-If the queue is empty print- 'Empty' (Without the quotes)


// Output
// Print the front element as a single integer on the screen.


// Sample Input 1 

// 4
// E 2
// E 3
// D
// D
// Sample Output 1

// 2
// 3

function List_and_Queue(str,N){
    if(str == "E"){
        enqueue(N,list);
    }else{
        dequeue();
    }
}


let f=0;
let r=0;
let list=[];
  
function enqueue(num,list){
    list[r]= num;
    r++;
}

function dequeue(){
    if(f==r){
        console.log('Empty');
        return;
    }
    console.log(list[f]);
    f++;
}

function runProgram(input){
    input= input.trim().split('\n');
    var tc = +input[0];
    var line=1;
    
    for(let i=0;i<tc;i++){
         let x = input[line].trim().split(" ");
         let str = x[0];
         let N = +x[1];
         line++;
        
        List_and_Queue(str,N);
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
