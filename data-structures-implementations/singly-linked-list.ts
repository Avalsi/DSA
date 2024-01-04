class SLLNode<T> {
  value: T | null;
  next: SLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: SLLNode<T> | null;
  tail: SLLNode<T> | null;
  size: number;

  constructor(value: T) {
    this.head = new SLLNode(value);
    this.tail = this.head;
    this.size = 1;
  }

  printList() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array.join("-->"));
  }

  //append node to the end of the list
  append(value: T) {
    const node = new SLLNode(value);

    this.tail.next = node;
    this.tail = node;

    this.size++;
    this.printList();
    return this;
  }

  //add element in the beggining of the list
  prepend(value: T) {
    const node = new SLLNode(value);
    node.next = this.head;
    this.head = node;
    this.size++;
    this.printList();
    return this;
  }

  insert(value: T, index: number) {
    if (!Number.isInteger(index) || index < 0 || index > this.size) {
      console.log("Invalid index", index);
      return this;
    }

    if (index == 0) {
      return this.prepend(value);
    }

    let newNode = new SLLNode(value);

    if (index == this.size - 1) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    let current = this.head;
    let next;

    if (index == 1) {
      next = this.head.next;
      this.head.next = newNode;
      newNode.next = next;
    }

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
      next = current.next;
      console.log("next");
    }

    newNode.next = next;
    current.next = newNode;
    return this;
  }

  pop(): T | null {
    if (!this.head) return null;
    let current = this.head;
    let prev = this.head;
    //loop through the list until you reach the tail
    for (let i = 0; i < this.size - 1; i++) {
      prev = current;
      current = current.next;
    }
    //set the next property of the 2nd to last node to null
    prev.next = null;
    //set tail to be the second to last node
    this.tail = prev;
    //decrement length
    --this.size;
    //return value of the node
    return this.tail.value;
  }
  get(index: number): SLLNode<T> {
    if (index < 0 || index >= this.size) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current
  }

  set(index: number, value: T): boolean {
    let node = this.get(index);
    if(node){
        node.value = value;
        return true
    }
    return false;
  }
}

const myList = new LinkedList("A");
myList.append("B");
myList.append("C");
myList.append("D");
console.log(myList.insert("E", 2), "------");
myList.printList();
// console.log(myList.tail);
// console.log(myList.pop());
