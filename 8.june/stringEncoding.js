// Problem statement
// You have been given a text message. You have to return the Run-length Encoding of the given message.

// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as the character and a single count. For example, the string "aaaabbbccdaa" would be encoded as "a4b3c2d1a2".

// Detailed explanation ( Input/output format, Notes, Images )
// Constraints :
// 1 <= T <= 10
// 1 <= N <= 100000

// Where 'N' is the length of the message string.

// Time Limit: 1 sec
// Sample Input 1 :
// 3
// aabbc
// abcd
// abbdcaas
// Sample Output 1 :
// a2b2c1
// a1b1c1d1
// a1b2d1c1a2s1
// Explaination for Sample Input 1:
// Test Case 1: As 2 consecutive 'a', 2 consecutive 'b', and 1 'c' are present in the given string so output is "a2b2c1".

// Test Case 2: As 1 consecutive 'a', 1 consecutive 'b', 1 consecutive 'c' and 1 consecutive 'd' are present in the given string so output is "a1b1c1d1".

// Test Case 3: As 1 consecutive 'a', 2 consecutive 'b', 1 consecutive 'd', 1consecutive 'c', 2 consecutive 'a' and 1 consecutive 's' are present in the given string so output is "a1b2d1c1a2s1".
// Sample Input 2:
// 2
// sadasd
// adsad
// Sample Output 2:
// s1a1d1a1s1d1
// a1d1s1a1d1

function fun(messages) {
    function generateRLE(str) {
        let encodedStr = '';
        let n = str.length;

        for (let i = 0; i < n; i++) {
            let count = 1;
            while (i < n - 1 && str[i] === str[i + 1]) {
                count++;
                i++;
            }
            encodedStr += str[i] + count;
        }

        return encodedStr;
    }
    // Process each message
    const results = messages.map(message => generateRLE(message));

    // Return the results
    return results;
}

// Sample input
const input = [
    "aabbc",
    "abcd",
    "abbdcaas",
    "sadasd",
    "adsad"
];

// Run the function
const output = fun(input);

// Print the output
output.forEach(result => console.log(result));