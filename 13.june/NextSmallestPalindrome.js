function nextPalindrome(s) {
    const len = s.length;
    const isOdd = len % 2 !== 0;
    const halfLen = Math.floor(len / 2);
    
    // Extract left half and middle part
    let leftHalf = s.substring(0, halfLen);
    let middle = isOdd ? s[halfLen] : '';
    let mirrored = leftHalf + middle + reverseString(leftHalf);
    
    // If mirrored is greater than input string, return it
    if (mirrored > s) {
        return mirrored;
    }
    
    // If mirrored is not greater, increment the middle part and mirror again
    if (isOdd) {
        let newMiddle = (parseInt(leftHalf + middle) + 1).toString();
        leftHalf = newMiddle.substring(0, halfLen);
        middle = newMiddle[halfLen];
    } else {
        let newLeftHalf = (parseInt(leftHalf) + 1).toString();
        leftHalf = newLeftHalf;
    }
    
    mirrored = leftHalf + middle + reverseString(leftHalf);
    
    return mirrored;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function processInput(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);
    let results = [];
    
    for (let i = 1; i <= T; i++) {
        const len = parseInt(lines[i * 2 - 1]);
        const s = lines[i * 2];
        results.push(nextPalindrome(s));
    }
    
    return results;
}

// Sample input handling
let input = `2
4
1221
3
999`;

let output = processInput(input);
output.forEach(result => console.log(result));
