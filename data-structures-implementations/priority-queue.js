"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.values = [];
    }
    PriorityQueue.prototype.enqueue = function (val, priority) {
        var newNode = new PriorityNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    };
    PriorityQueue.prototype.bubbleUp = function () {
        var idx = this.values.length - 1;
        var element = this.values[idx];
        while (idx > 0) {
            var parentIdx = Math.floor((idx - 1) / 2);
            var parent_1 = this.values[parentIdx];
            if (element.priority >= parent_1.priority)
                break;
            this.values[parentIdx] = element;
            this.values[idx] = parent_1;
            idx = parentIdx;
        }
    };
    PriorityQueue.prototype.dequeue = function () {
        var min = this.values[0];
        var end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    };
    PriorityQueue.prototype.sinkDown = function () {
        var idx = 0;
        var length = this.values.length;
        var element = this.values[0];
        while (true) {
            var leftChildIdx = 2 * idx + 1;
            var rightChildIdx = 2 * idx + 2;
            var leftChild = void 0, rightChild = void 0;
            var swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (swap === null && rightChild.priority < element.priority ||
                    swap !== null && rightChild.priority < leftChild.priority) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null)
                break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    };
    return PriorityQueue;
}());
var PriorityNode = /** @class */ (function () {
    function PriorityNode(val, priority) {
        this.val = val,
            this.priority = priority;
    }
    return PriorityNode;
}());
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("a", 1);
priorityQueue.enqueue("c", 3);
priorityQueue.enqueue("e", 5);
priorityQueue.enqueue("b", 2);
priorityQueue.enqueue("d", 4);
priorityQueue.enqueue("f", 6);
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
console.log(priorityQueue.values);
