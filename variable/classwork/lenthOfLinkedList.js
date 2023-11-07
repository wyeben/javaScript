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
    checkLength(){
        const newLength = 0;
        const current = this.head;
        while(!current === null){
            newLength +=1
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
    removeDuplicate(){
        const duplicate = 0;
        const count = 0;
        while(this.head !== null){
             count++
           if(count !== count){
            duplicate += 1
           }else{
            duplicate -= 1
           }
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

newLinkedList.checkLength();
newLinkedList.removeDuplicate()

newLinkedList.display()