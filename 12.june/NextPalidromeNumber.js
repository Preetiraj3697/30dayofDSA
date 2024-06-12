function isPalindrome(num)
    {
       
        // Declaring variables
        let n, k, rev = 0;
       
        // storing num in n so that we can compare it later
        n = num;
       
        // while num is not 0 we find its reverse and store
        // in rev
        while (num != 0) {
            k = num % 10;
            rev = (rev * 10) + k;
            num = Math.floor(num / 10);
        }
       
        // check if num and its reverse are same
        if (n == rev) {
            return 1;
        }
        else {
            return 0;
        }
}
console.log(isPalindrome(9687))
