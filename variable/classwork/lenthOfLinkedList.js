class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addToList(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    checkLength() {
      let newLength = 0; 
      let current = this.head;
      while (current !== null) {
        newLength += 1;
        current = current.next;
      }
      return newLength;
    }
  
    display() {
      let current = this.head;
      const elements = [];
      while (current) {
        elements.push(current.data);
        current = current.next;
      }
      console.log(elements.join(' -> '));
    }
  
    removeDuplicate() {
      let current = this.head;
      while (current !== null) {
        let runner = current;
        while (runner.next !== null) {
          if (runner.next.data === current.data) {
            runner.next = runner.next.next;
          } else {
            runner = runner.next;
          }
        }
        current = current.next;
      }
    }
  }
  
  const newLinkedList = new LinkedList();
  
  newLinkedList.addToList(30);
  newLinkedList.addToList(40);
  newLinkedList.addToList(90);
  newLinkedList.addToList(10);
  newLinkedList.addToList(12);
  newLinkedList.addToList(40);
  
  console.log(newLinkedList.checkLength());
  newLinkedList.removeDuplicate();
  
  newLinkedList.display();
  