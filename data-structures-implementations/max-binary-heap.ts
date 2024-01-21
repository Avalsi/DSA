import { cp } from "fs";
import { compileFunction } from "vm";

class MaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [];
  }

  insert(value: number) {
    //push the value into the values property
    this.values.push(value);
    //bubbble up
    this.bubbleUp();
  }

  bubbleUp() {
    //create a value called index which is the lenght of the values -1
    let index = this.values.length - 1;
    const element = this.values[index];
    //keep looping as long as the values element at the parent index is less than the values element at the child index
    while (index > 0) {
      //create a value called parentIndex which is the (index-1)/2 floored
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      //swap value of the values element at the parentIndex with the value ot the element property at the child index
      this.values[parentIndex] = element;
      this.values[index] = parent;
      //set the index to be the parentIndex and start over
      index = parentIndex;
    }
  }

  extractMax() {
    //swap first value with last
    this.swapIndices(0);
    //pop from the values so you can return the value at the end
    const result = this.values.pop();
    
    let index = 0;

    //find index of right (2*index + 1) and left (2*index + 2) child, if they exist
    while (index >= 0) {
    
        //find which child is greater
        let childIdx = this.findBiggerChildIdx(index);
      
        //swap with largest child if it's greater than the element
        if(childIdx > 0){
          if(this.values[index] < this.values[childIdx]){
            this.swapIndices(index,childIdx);
          }
        }
        //the child index becomes parent index
        index = childIdx
        //keep looping until none of the children are larger
    }
    //return (extracted) root
    return result;
  }

  private swapIndices(firstIdx: number, secondIdx: number = this.values.length - 1) {
    const firstElement = this.values[firstIdx];
    this.values[firstIdx] = this.values[secondIdx];
    this.values[secondIdx] = firstElement;
  }

  private findBiggerChildIdx(index: number) {
    let maxIndex = this.values.length - 1;

    let rightChildIdx = 2 * index + 1;
    let leftChildIdx = 2 * index + 2;

    if (rightChildIdx <= maxIndex && leftChildIdx <= maxIndex) {
      let rightChild = this.values[rightChildIdx];
      let leftChild = this.values[leftChildIdx];
      if(rightChild < leftChild){
        return leftChildIdx
      } else if (rightChild > leftChild){
        return rightChildIdx
      }
    } else if (rightChildIdx <= maxIndex) {
      return rightChildIdx;
    } else if (leftChildIdx <= maxIndex) {
      return leftChildIdx;
    } else {
        return -1
    }
    
  }
}
// let heap = new MaxBinaryHeap();
// heap.values = [41, 39, 33, 18, 27, 12];
// heap.insert(55);
// console.log(heap.extractMax());
// console.log(heap.values);
