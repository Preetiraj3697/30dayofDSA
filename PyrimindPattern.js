
//     *     space are decrese with 1 in downward and star is increase in downward with 2.
//    ***
//   *****
//  *******
// *********

//  *******
//   *****
//    ***
//     *

//Code
let n = 5;
for(let i=1; i<=n; i++){ // 1 to 5   // i=1; //i=2 
     let bag="";
    for(let j=1; j<=n-i; j++){  //1 to 4  //j=1 //j=2<=4 /j=3<=4 //j=4<=4 bag="    "  bag="   "
           bag+=" "
    }
    for(let k=0; k<2*i-1; k++){ // 0 to 2*1-1=>1 "*" 0<1 "*" "***"
         bag+="*"
    }
    console.log(bag);   //     *
                        //    ***
                        //   *****
                        //  *******
                        // *********
}
for(let i=1; i<=n-1; i++){  // i=1; //i=2;
   let bag="";
   for(let j=0; j<i; j++){ // j=0<1  => " " //j=0<2 => "  "
      bag+=" "
   }
   for(let k=(n-i)*2-1; k>0; k--){   //k=(5-1)*2-1=> "********"
    bag+="*"                         //k=(5-2)*2=1=> "*****"
   }
   console.log(bag) //  *******
}                   //   *****
                    //    ***
                    //     *













// let n = 5;

// //upward pyramind

// for(let i=1; i<=n; i++ ){
//     let bag="";
//     for(let j=1; j<=n-i; j++){
//         bag+=" ";
//     }
//     for(let k=0; k<2*i-1; k++){
//         bag+="*"
//     }
//     console.log(bag)
// }
// //Downside Pyramind

// for(let i=1; i<=n-1; i++){
//     let bag="";
//     for(let j=0; j<i; j++){
//         bag+=" ";
//     }
//     for(let k=(n-i)*2-1; k>0; k--){
//         bag+="*";
//     }
//     console.log(bag)
// }
