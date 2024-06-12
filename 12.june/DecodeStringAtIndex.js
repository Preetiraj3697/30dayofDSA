// Example 1:

// Input: s = "leet2code3", k = 10
// Output: "o"
// Explanation: The decoded string is "leetleetcodeleetleetcodeleetleetcode".
// The 10th letter in the string is "o".
// Example 2:

// Input: s = "ha22", k = 5
// Output: "h"
// Explanation: The decoded string is "hahahaha".
// The 5th letter is "h".
// Example 3:

// Input: s = "a2345678999999999999999", k = 1
// Output: "a"
// Explanation: The decoded string is "a" repeated 8301530446056247680 times.
// The 1st letter is "a".

// Sample Input 1 :
// a2b3cd3
// 8
// Sample Output 1 :
// c
//  Explanation to Sample Input 1 :
// S = "a2b3cd3"
// Decrypted String of S = "aabbbcdcdcd"
// According to 1-based indexing for S, the 8th character is 'c'.
// Sample Input 2 :
// ab12c3
// 20
// Sample Output 2 :
// b
//  Explanation to Sample Input 2 :
// S = "ab12c3"
// Decrypted String of S = "ababababababababababababccc"
// So 20th character is 'b'.

//1st resurcive solution
var decodeAtIndex = function(s, k) {
    let res = '';
    function decode(start, k, prevLen, prevCnt) {
        if (prevLen > k || start >= s.length ) {
            return k;
        }
        let i = start;
        while (i < s.length && s.charCodeAt(i) > 57) {
            i++;
        }
        const len = prevLen * prevCnt + i - start;
        k = decode(i + 1, k, len, parseInt(s[i]));
        if (!res) {
            k %= len;
            const ind = k - len + i;
            if (ind >= start) {
                res = s[ind];
            }
        }
        return k;
    }
    decode(0, k - 1, 0, 0);
    return res;
};

// 2nd solution
var decodeAtIndex = function(s, k) {
    let length = 0;
    let i = 0;

    while (length < k) {
        if (!isNaN(s[i])) {
            length *= Number(s[i]);
        } else {
            length++;
        }
        i++;
    }

    for (let j = i - 1; j >= 0; j--) {
        if (!isNaN(s[j])) {
            length /= Number(s[j]);
            k %= length;
        } else {
            if (k === 0 || k === length) {
                return s[j];
            }
            length--;
        }
    }

    return "";
};

// 3rd solution
var decodeAtIndex = function(S, K) {
    let count = 0;
    for(let i=0; i<S.length; i++){
        if(!isNaN(S[i])) count *= Number(S[i]);
        else count++;
    }
    for (let i = S.length - 1; i >= 0; i--) {
        K = K % count;

        if (K == 0 && isNaN(S[i])) return S[i]
        
        if (!isNaN(S[i])) count = Math.ceil(count / Number(S[i]))
        else count--;
    }
};

// 4th solution
const decodeAtIndex = ( s, k, i = 0 ) => {
    for ( let c of s )
        if ( +c ) {
            if ( k > c*i ) i *= c
            else return decodeAtIndex( s, k%i||i )
        } else if ( ++i == k ) return c
}