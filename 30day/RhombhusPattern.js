function fun(n){
    let sec=[];
   for(let i=0; i<=n; i++){ 
     let bag="";
   for(let j=1; j<=n-i; j++){  
        bag+="  ";
   }
   for(let k=0; k<=i; k++){ 
      bag+=k+" ";
   }
   for(let l=i-1; l>=0; l--){
      bag+=l+" ";
   }
    console.log(bag);
    sec.push(bag);
   }
   // console.log(sec);
   sec.reverse();
  
    for(let i=1; i<sec.length; i++){
        console.log(sec[i]);
    }
}

function runProgram(input){
//Input Taking Here
input = input.trim().split("\n");
let n = +input[0];
fun(n);
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