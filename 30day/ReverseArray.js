//Reverse Array
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

function fun(arr){
  let bag="";
   for(let i=arr.length-1; i>=0; i--){
       bag=arr[i]+" "
      console.log(bag)
   }
  
}
fun([4,5,1,2])
