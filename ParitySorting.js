// Parity Sorting Ended
// Description

// Given an integer array. Sort the array in such a way that all the odd number are in the beginning of the array followed by the even numbers.

// The odd number and even number should follow an ascending order.

// Input
// Input Format

// The first line contains the number of integers N

// The second line contains the elements of the array

// Constraints

// 1<=N<=10^4


// Output
// Print the final array.


// Sample Input 1 

// 5
// 2 5 1 4 2 
// Sample Output 1

// 1 5 2 2 4 


function compare(N,arr){
	
let l = 0, r = N - 1;
		let k = 0;
		while (l < r)
		{
			while(arr[l] % 2 !== 0)
			{
				l++;
				k++;
			}
			while(arr[r] % 2 === 0 && l < r)
				r--;
			if (l < r)
			{
				let temp = arr[l];
				arr[l] = arr[r];
				arr[r] = temp;
			}
		}
		
		let odd=[];
		for(let i=0;i<k;i++)
		{
			odd[i]=arr[i];
		}
		let even=[];
		for(let i=0;i<N-k;i++)
		{
			even[i]=arr[k+i];
		}
	
		odd.sort(function(a,b){return a-b;});
	
		even.sort(function(a,b){return a-b;});
		
		console.log(odd.concat(even).join(" ")) ;

}



 
 
 
 function runProgram(input){
     input=input.trim().split("\n");
     var N= +input[0];
  
           var arr=input[1].trim().split(" ").map(Number);
     
   
     //console.log(N,arr)
     compare(N,arr);
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