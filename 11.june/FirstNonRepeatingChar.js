function fun(str){
    let obj = {};
      for(let i=0; i<str.length; i++){
          obj[str[i]] = obj[str[i]] ? obj[str[i]]+1: 1;
      }
      for(let key in obj){
          if(obj[key]==1){
              return key;
          }
      }
  }
  console.log(fun("aDcadhc"));
  console.log(fun("AabBcC"));
  console.log(fun("ABcd"));
  console.log(fun("AAAbcdb"));
  
// Same leetcode question
// 387. First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

var firstUniqChar = function(s) {
    if(!s.length || s.length > Math.pow(10,5)){
        return s;
    }
    let obj = {}
    let res = -1;
    for(let i = 0; i < s.length; i++){
       obj[s[i]] = (obj[s[i]] || 0)+1;
    }
    for(let i = 0; i < s.length; i++){
       if(obj[s[i]] == 1) {
           res = i;
           return res  
        }
    }
    return res;
};
console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))
