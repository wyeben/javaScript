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

  append(data) {
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

  display() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(' -> '));
  }

  addAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addAtTail(data) {
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
  findNthFromEnd(n) {
    let first = this.head;
    let second = this.head;
    
    for (let i = 0; i < n; i++) {
        first = first.next;
    }
  
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    return second.data; 
}


  deleteAtHead() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  deleteAtTail() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  checkIfPresent(data) {
    let present = new Node(data);
    let lastNode = null;

    while (present !== null) {
        lastNode = present;
        present = present.next;
    }

    return lastNode;
  }

}

const myList = new LinkedList();
let nth = 3
myList.append(42);
myList.append(25);
myList.append(34);
myList.append(3);
myList.append(20);

// myList.addAtHead(0);
// myList.addAtTail(4);

// myList.deleteAtHead();
// myList.deleteAtTail();
// myList.checkIfPresent(10)


console.log(myList.findNthFromEnd(nth));
myList.display();

