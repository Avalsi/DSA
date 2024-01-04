class StackNode<T> {
  val: T | null;
  next: StackNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class Stack<T> {
  first: StackNode<T> | null;
  last: StackNode<T> | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //PUSH
  //create a function that accepts a value
  push(val: T) {
    //create new node with value
    const newNode = new StackNode(val);
    //if stack is empty set first and last node to equal new node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //if stack is not empty create a value that stores previous first node
      const prev = this.first;
      //set first node to the new node
      this.first = newNode;
      //set previous first node as next
      this.first.next = prev;
    }
    //increment size of stack
    ++this.size;
  }
  //POP
  pop() {
    //if stack is empty return null
    if (this.size == 0) return null;
    //save node to return in variable
    const firstNode = this.first;

    //check if stack has only one node and set first and lest to null
    if (this.size == 1) {
      this.first = null;
      this.last = null;
    } else {
      //save first.next node in next variable
      const nextNode = this.first.next;
      //set first node to be equal to next node
      this.first = nextNode;
    }
    //decrement the size of the stack
    --this.size;
    //return first node
    return firstNode.val;
  }

  
}

const stack = new Stack<string>()
stack.push("A")
stack.push("B")
stack.push("C")

console.log(stack.first)
console.log(stack.last)
console.log(stack.size)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())



