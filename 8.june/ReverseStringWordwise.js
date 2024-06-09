// Problem statement
// Reverse the given string word-wise. The last word in the given string should come at 1st place, the last-second word at 2nd place, and so on. Individual words should remain as it is.

// where |S| represents the length of string, S.
// Sample Input 1:
// Welcome to Coding Ninjas
// Sample Output 1:
// Ninjas Coding to Welcome
// Sample Input 2:
// Always indent your code
// Sample Output 2:
// code your indent Always

// Ist soln
// function reverse(str) {
//     str = str.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ");
//     return str;
// }
//2nd soln
// function reverse(str) {
//     let arr = str.trim().split(/\s+/);
//     let start = 0, end = arr.length - 1;
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr.join(" ")
// }

// 3rd solution;
function reverse(str) {
    let arr = str.split(" ");
    arr = arr.filter(word => word !== "");
    arr = arr.reverse().join(" ");
    return arr;
}
const res = reverse("Welcome to Coding          Ninjas")
console.log(res);
const res2 = reverse("            Always indent           your code      ");
console.log(res2)