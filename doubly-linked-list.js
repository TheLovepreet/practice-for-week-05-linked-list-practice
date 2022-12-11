class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(length,head,tail) {
    // Your code here
    this.length = length || 0;
    this.head = null;
    this.tail = null;

  }

  addToHead(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    
  }

  addToTail(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);
    if(this.head == null){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;