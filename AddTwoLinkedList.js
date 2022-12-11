// Add two Linked Lists -5:52:35
// Description

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the head of the updated linked list (In reverse order)


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// First Line contains the number of elements in the first linked list (t1)

// Next t1 lines contains a single node of linked list in which the first element is the head

// The next line contains the number of elements in the second linked list (t2)

// Next t2 lines contains a single node of linked list in which the first element is the head

// t1,t2 <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 2
// 4
// 3
// 3
// 5
// 6
// 4
// Sample Output 1

// 7 0 8



const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
      let carry = 0;
  let additionNode = new ListNode(0);
  let ansNode = additionNode;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;
    ansNode.next = new ListNode(sum);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    ansNode = ansNode.next;
  }

  return additionNode.next;
};

