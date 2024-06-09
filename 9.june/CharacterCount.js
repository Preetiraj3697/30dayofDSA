// Character Counts
// Given a string of alphabets (from a to z), Print the count of the character appearing in the string right next to it. This is also called Run Length Encoding.

// Example
// Input
// str = "aabbcccddddeeeee"
// Output
// str = "2a2b3c4d5e"
// Explanation
// Every character appearing in the string will have the count printed right next to it. In the above example, a appeared 2 times, b appeared 3 times and so on.

// Example
// Input
// str = "azvdaaarrtaaa"
// Output
// str = "7a1z1v1d2r1t"

function characterCount(str) {
    let obj = {}, res = "";
    for (let i = 0; i < str.length; i++){
        obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    }
    for (let key in obj) {
        res += obj[key] + key;
    }
    return res;
}
const res = characterCount("azvdaaarrtaaa");
console.log(res);