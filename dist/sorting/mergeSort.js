function mergeSort(array) {
    if (array.length <= 1) return array;
  
    let middle = Math.floor(array.length / 2);
    let array1 = mergeSort(array.slice(0, middle));
    let array2 = mergeSort(array.slice(middle));
  
    return merge(array1, array2);
  }
  
  function merge(array1, array2) {
    let sorted = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        sorted.push(array1.shift());
      } else {
        sorted.push(array2.shift())
      }
    }
  
    return [...sorted, ...array1, ...array2]
  }