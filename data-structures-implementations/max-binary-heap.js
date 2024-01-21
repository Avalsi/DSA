"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaxBinaryHeap = /** @class */ (function () {
    function MaxBinaryHeap() {
        this.values = [];
    }
    MaxBinaryHeap.prototype.insert = function (value) {
        //push the value into the values property
        this.values.push(value);
        //bubbble up
        this.bubbleUp();
    };
    MaxBinaryHeap.prototype.bubbleUp = function () {
        //create a value called index which is the lenght of the values -1
        var index = this.values.length - 1;
        var element = this.values[index];
        //keep looping as long as the values element at the parent index is less than the values element at the child index
        while (index > 0) {
            //create a value called parentIndex which is the (index-1)/2 floored
            var parentIndex = Math.floor((index - 1) / 2);
            var parent_1 = this.values[parentIndex];
            if (element <= parent_1)
                break;
            //swap value of the values element at the parentIndex with the value ot the element property at the child index
            this.values[parentIndex] = element;
            this.values[index] = parent_1;
            //set the index to be the parentIndex and start over
            index = parentIndex;
        }
    };
    MaxBinaryHeap.prototype.extractMax = function () {
        //swap first value with last
        this.swapIndices(0);
        //pop from the values so you can return the value at the end
        var result = this.values.pop();
        console.log(result, 'result');
        var index = 0;
        //find index of right (2*index + 1) and left (2*index + 2) child, if they exist
        while (index >= 0) {
            //find which child is greater
            var childIdx = this.findBiggerChildIdx(index);
            console.log(childIdx, 'child index');
            //swap with largest child if it's greater than the element
            if (childIdx > 0) {
                if (this.values[index] < this.values[childIdx]) {
                    this.swapIndices(index, childIdx);
                }
            }
            //the child index becomes parent index
            index = childIdx;
            //keep looping until none of the children are larger
        }
        //return (extracted) root
        return result;
    };
    MaxBinaryHeap.prototype.swapIndices = function (firstIdx, secondIdx) {
        if (secondIdx === void 0) { secondIdx = this.values.length - 1; }
        var firstElement = this.values[firstIdx];
        this.values[firstIdx] = this.values[secondIdx];
        this.values[secondIdx] = firstElement;
    };
    MaxBinaryHeap.prototype.findBiggerChildIdx = function (index) {
        var maxIndex = this.values.length - 1;
        var rightChildIdx = 2 * index + 1;
        var leftChildIdx = 2 * index + 2;
        if (rightChildIdx <= maxIndex && leftChildIdx <= maxIndex) {
            var rightChild = this.values[rightChildIdx];
            var leftChild = this.values[leftChildIdx];
            if (rightChild < leftChild) {
                return leftChildIdx;
            }
            else if (rightChild > leftChild) {
                return rightChildIdx;
            }
        }
        else if (rightChildIdx < maxIndex) {
            return rightChildIdx;
        }
        else if (leftChildIdx < maxIndex) {
            return leftChildIdx;
        }
        else {
            return -1;
        }
    };
    return MaxBinaryHeap;
}());
var heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
heap.insert(55);
console.log(heap.extractMax());
console.log(heap.values);
