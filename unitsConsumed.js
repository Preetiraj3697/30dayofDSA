// Units Consumed Ended
// Description

// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

// test.png

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// Given the bill, write a program to find the number of units consumed.


// Input
// Input Format:

// First and the only line of input contains the bill amount

// Constraints:

// Bill amount is an integer <= 1000


// Output
// Output the number of units consumed


// Sample Input 1 

// 930
// Sample Output 1

// 170

//code 
function fun(num){
  if(num>=730){
    num = num - 730;
    console.log(num/10+150)
  }else if(num>=230){
    num = num - 230;
    console.log(num/5+50);
  }else if(num>=80){
    num = num -80;
    console.log(num/3);
  }
}

fun(930);