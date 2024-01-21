function insertionSort(array) {
    let isDone = false;
    while (!isDone) {
      isDone = true;
      for (let i = 1; i < array.length; i++) {
        const current = array[i];
        const previous = array[i - 1];
        if (current < previous) {
          array[i] = previous;
          array[i - 1] = current;
          isDone = false;
        }
      }
    }
    return array;
  }
  
console.log(insertionSort([2, 1, 9, 76, 4]))
