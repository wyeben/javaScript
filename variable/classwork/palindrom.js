class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) {
      return true;
    }
  
   
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    
    let secondHalf = slow.next;
    let prev = null;
    while (secondHalf) {
      let nextNode = secondHalf.next;
      secondHalf.next = prev;
      prev = secondHalf;
      secondHalf = nextNode;
    }
  
    
    let firstHalf = head;
    while (prev) {
      if (prev.val !== firstHalf.val) {
        return false;
      }
      prev = prev.next;
      firstHalf = firstHalf.next;
    }
  
    return true;
  }
  
  let list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(2);
  list1.next.next.next = new ListNode(1);
  
  let list2 = new ListNode(1);
  list2.next = new ListNode(2);
  
  console.log(isPalindrome(list1)); 
  console.log(isPalindrome(list2)); 
  