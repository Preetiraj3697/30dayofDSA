// Merge two Linked Lists Ended
// Description

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Complete the function below and return the head of the new linked list.


// Input
// This is a function complete problem

// To get a understanding of the input-

// The first line contains the number of nodes in the first linked list (n1)

// Next n1 lines contains the nodes of the first linked list

// Next line contains the number of nodes in the second linked list (n2)

// Next n2 lines contains the nodes of the second linked list

// n1, n2 <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 1
// 2
// 4
// 2
// 3
// 4
// 5
// Sample Output 1

// 1 1 2 2 3 4 5

const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(list1, list2) {
     let head = new ListNode, tail
    if (!list1 || !list2)
        return list2 || list1

    if (list1.val < list2.val) {
        head = list1
        list1 = list1.next
    }
    else {
        head = list2
        list2 = list2.next
    }
    tail = head
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            tail = tail.next
            list1 = list1.next
        } else {
            tail.next = list2
            tail = tail.next
            list2 = list2.next
        }
    }
     tail.next = list1 || list2




    return head
};