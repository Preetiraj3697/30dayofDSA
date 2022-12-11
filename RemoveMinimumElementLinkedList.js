// Remove Minimum Element In Linked List Ended
// Description

// You are given the head of the linked list, you need to remove the minimum element in the linked list and return the head of the changed linked list.

// Note

// You don’t need to take input/output. Just implement the given function.

// If the linked list is empty, return a NULL value

// If there is more than oneminimumelement remove the last occurring element in the linked list.


// Input
// The first line contains the size of the linked list.

// The second line contains the linked list in form of an array.

// Function description


// removeMinimum(head) {

// // Write your code here

// }

// Arguments:

// head = Head node of the linked list.
// Constraints

// 1 <= N <= 10^4

// 1 <= Linked List Values <= 500


// Output
// Return the head of the modified linked list.


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 1 2 3 4 5
// 2 3 4 5
// 3 4 5
// 4 5
// 5
// -1

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMinimum = function (head) {
   let smallest = head; 
   let temp = head;
   let prev = null;

   while(temp != null) {
      if(temp.next != null && temp.next.data <= smallest.data){
        smallest = temp.next;
        prev = temp;
      }
     temp = temp.next;
   }

   if(smallest != head) { //First element is not min
      prev.next = smallest.next;
   } else {
       head = head.next; //If first element is smallest, update the head
   }
   
   return head;
};
