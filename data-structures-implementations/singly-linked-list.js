var SLLNode = /** @class */ (function () {
    function SLLNode(value) {
        this.value = value;
        this.next = null;
    }
    return SLLNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new SLLNode(value);
        this.tail = this.head;
        this.size = 1;
    }
    LinkedList.prototype.printList = function () {
        var array = [];
        var current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        console.log(array.join("-->"));
    };
    //append node to the end of the list
    LinkedList.prototype.append = function (value) {
        var node = new SLLNode(value);
        this.tail.next = node;
        this.tail = node;
        this.size++;
        this.printList();
        return this;
    };
    //add element in the beggining of the list
    LinkedList.prototype.prepend = function (value) {
        var node = new SLLNode(value);
        node.next = this.head;
        this.head = node;
        this.size++;
        this.printList();
        return this;
    };
    LinkedList.prototype.insert = function (value, index) {
        if (!Number.isInteger(index) || index < 0 || index > this.size) {
            console.log("Invalid index", index);
            return this;
        }
        if (index == 0) {
            return this.prepend(value);
        }
        var newNode = new SLLNode(value);
        if (index == this.size - 1) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        var current = this.head;
        var next;
        if (index == 1) {
            next = this.head.next;
            this.head.next = newNode;
            newNode.next = next;
        }
        for (var i = 0; i < index - 1; i++) {
            current = current.next;
            next = current.next;
            console.log("next");
        }
        newNode.next = next;
        current.next = newNode;
        return this;
    };
    LinkedList.prototype.pop = function () {
        if (!this.head)
            return null;
        var current = this.head;
        var prev = this.head;
        //loop through the list until you reach the tail
        for (var i = 0; i < this.size - 1; i++) {
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
    };
    return LinkedList;
}());
var myList = new LinkedList("A");
myList.append("B");
myList.append("C");
myList.append("D");
console.log(myList.insert("E", 2), "------");
myList.printList();
// console.log(myList.tail);
// console.log(myList.pop());
