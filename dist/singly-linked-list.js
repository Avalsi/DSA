"use strict";
class SLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
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
    append(value) {
        const node = new SLLNode(value);
        this.tail.next = node;
        this.tail = node;
        this.size++;
        this.printList();
        return this;
    }
    //add element in the beggining of the list
    prepend(value) {
        const node = new SLLNode(value);
        node.next = this.head;
        this.head = node;
        this.size++;
        this.printList();
        return this;
    }
    insert(value, index) {
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
        console.log('here');
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
            next = current.next;
            console.log('next');
        }
        newNode.next = next;
        current.next = newNode;
        return this;
    }
    pop() {
        if (!this.head)
            return null;
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
}
const myList = new LinkedList("A");
myList.append("B");
myList.append("C");
myList.append("D");
console.log(myList.insert("E", 1), "------");
// console.log(myList.printList());
// console.log(myList.tail);
// console.log(myList.pop());
//# sourceMappingURL=singly-linked-list.js.map