//     *
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

//upward pyramind

for(let i=1; i<=n; i++ ){
    let bag="";
    for(let j=1; j<=n-i; j++){
        bag+=" ";
    }
    for(let k=0; k<2*i-1; k++){
        bag+="*"
    }
    console.log(bag)
}
//Downside Pyramind

for(let i=1; i<=n-1; i++){
    let bag="";
    for(let j=0; j<i; j++){
        bag+=" ";
    }
    for(let k=(n-i)*2-1; k>0; k--){
        bag+="*";
    }
    console.log(bag)
}
