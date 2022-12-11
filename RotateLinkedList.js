// Rotate Linked List Ended
// Description

// Given a linked list, rotate the list to the right by k places, where k isnon-negative.

// Complete the function, and return the head of the updated list


// Input
// This is a function complete problem.

// Refer to sample input for understanding

// The first line contains the number of nodes (n)

// Next n lines contains the nodes of the linked list

// Next line contains k

// n <= 1000

// list[i] <= 1000


// Output
// Complete the function


// Sample Input 1 

// 3
// 1
// 2
// 3
// 2
// Sample Output 1

// 2 3 1

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
     let count = 0
    let headC = head
    while(headC != null)
      {
         count +=1
        
        headC = headC.next
      }
      let nodes =  new Array(count)
      
      let index = 0
      let current =  head
      while(current != null)
        {
           let FinalPos  =  (index + k) % count
           nodes[FinalPos] = current
            index += 1
          
          current = current.next
        }
        return buildList(nodes,0)
  
        
};

function buildList(arr,i)
{
  if (arr[i] == null)
    return null
  let created =  arr[i]
  created.next = buildList(arr , i +1)
  return created
};