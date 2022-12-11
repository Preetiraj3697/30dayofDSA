// Palindrome List Ended
// Description

// Given a singly linked list, determine if it is a palindrome.
// No need to take any input, You'll be given the pointer to the head of the linked list,Complete the function belowand return true if it's a palindrome and false if otherwise.


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number of nodes (n)

// Next n lines contains the nodes of the linked list.

// n <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 2
// 1
// Sample Output 1

// true

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
   let fast = head, slow = head, prev = null;
   while(fast!=null && fast.next!=null){
       prev = slow;
       slow = slow.next;
       fast = fast.next.next;
   }
   let mid = null;
   if(fast != null){
       mid = slow;
       slow = slow.next;
       mid.next = null;
   }
   if(prev!=null){
       prev.next = null;
   }
   slow = reverse(slow);
   
    let t1 =head;
    let t2 = slow;
    while(t1 != null && t2 != null){
        if(t1.data != t2.data){
            return false;
        }
        t1=t1.next;
        t2=t2.next;
    }
    return true;
}

var reverse = function (head) {
    let nextNode = null;
    let previousNode = null;
    while (head) {
        nextNode = head.next;
        head.next = previousNode;
        previousNode = head;
        head = nextNode;
    }
    return previousNode;
};
