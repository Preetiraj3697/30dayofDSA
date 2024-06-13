// Sample Input 1:
// 2
// listen silent
// east eats
// Sample Output 1:
// 1
// 1
// Explanation for Sample Output 1:
// In test case 1, "listen" and "silent" has same set of characters.

// In test case 2, "east" and "eats" has same set of characters.
// Sample Input 2:
// 2
// triangle integral
// hearts earth
// Sample Output 2:
// 1
// 0
// Explanation for Sample Output 1:
// In test case 1, "triangle" and "integral" has same set of characters.
// In test case 2, "hearts" and "earth" does not have same set of characters.

function fun(str1, str2) {
    if (str1.length !== str2.length) {
        return 0;
    }
    
    // Create frequency objects for both strings
    let charCount1 = {};
    let charCount2 = {};
    
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    
    // Compare the frequency objects
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return 0;
        }
    }
    
    return 1;
}
console.log(fun("listen", "silent"))
console.log(fun("east","eats"))
console.log(fun("triangle","integral"))
console.log(fun("hearts","earth"))
