class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head,length) {
    // Your code here
    this.head = head || null;
    this.length = length || 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

  }

  addToTail(val) {
    // Your code here
    let newNode1 = new LinkedListNode(val);
    if(this.head == null){
      this.head = newNode1;
      this.length++;
    }
    else{
      let current =  this.head;
      while(current){
        if(current.next == null){
          current.next = newNode1;
          this.length++;
        }
        if(this.length == val){
          return;
        }
        current = current.next;
      }
    }
}

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;