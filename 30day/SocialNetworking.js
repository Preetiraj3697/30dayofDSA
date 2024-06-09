// Social Networking for Everyone Ended
// Description

// You are designing a social networking website that makes everyone make friends in their neighborhood. But, the distance within which people can make friends depends on their age. If a person is of age less than 13, they can make friends within 1 Kms of their area, if the age of person is greater than or equal to 13 but less than 18, they can make friends within 5 Kms of their area, and if the age of the person is greater than or equal to  18 but less than 30, then they can make friends within 10 Kms of their area, else the person can make friends from anywhere.

// If the age of the person is less than 13 print "1 Kms", else if the age of the person is more than or equal to 13, and less than 18, then print "5 Kms", else if the age of the person is greater than or equal to 18 and less than 30, then print "10 Kms", else print "You can have friends from anywhere".


// Input
// The first and the only line of the input contains N, the age of the person.



// Constraints

// 1 <= N <= 65


// Output
// Print the output as mentioned in the question.


// Sample Input 1 

// 15
// Sample Output 1

// 5 Kms
// Sample Input 2 

// 30
// Sample Output 2

// You can have friends from anywhere
// Hint

// In the first sample test case, the age of the person is 15, therefore, the output  is "5 Kms".

// In the sample test case, the age of the person is 30, therefore, the output is "You can have friends from anywhere".

//Code


 
    function age(num){
        if(num<13){
            console.log("1 Kms");
        }else if(num>=13 && num<18){
            console.log("5 Kms");
        }else if(num>=18 && num<30){
            console.log("10 Kms");
        }else{
            console.log("You can have friends from anywhere")
        }
    }
    
    age(5);