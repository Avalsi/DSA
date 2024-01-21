var StackNode = /** @class */ (function () {
    function StackNode(val) {
        this.val = val;
        this.next = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //PUSH
    //create a function that accepts a value
    Stack.prototype.push = function (val) {
        //create new node with value
        var newNode = new StackNode(val);
        //if stack is empty set first and last node to equal new node
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            //if stack is not empty create a value that stores previous first node
            var prev = this.first;
            //set first node to the new node
            this.first = newNode;
            //set previous first node as next
            this.first.next = prev;
        }
        //increment size of stack
        ++this.size;
    };
    //POP
    Stack.prototype.pop = function () {
        //if stack is empty return null
        if (this.size == 0)
            return null;
        //save node to return in variable
        var firstNode = this.first;
        //check if stack has only one node and set first and lest to null
        if (this.size == 1) {
            this.first = null;
            this.last = null;
        }
        else {
            //save first.next node in next variable
            var nextNode = this.first.next;
            //set first node to be equal to next node
            this.first = nextNode;
        }
        //decrement the size of the stack
        --this.size;
        //return first node
        return firstNode.val;
    };
    return Stack;
}());
var stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log(stack.first);
console.log(stack.last);
console.log(stack.size);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
