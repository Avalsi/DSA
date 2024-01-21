// function bubbleSort(n, ...array) {
//   let isDone = false;
//   while (!isDone) {
//     isDone = true; //it's done until you have to change some numbers
//     for (let i = 0; i < array.length - 1; i++) {
//       let a = array[i];
//       let b = array[i + 1];
//       if (a > b) {
//         isDone = false; //becomes undone because you want to go through it again after the changes
//         array[i] = b;
//         array[i + 1] = a;
//       }
//     }
//   }
//   console.log(array);
// }

function bubbleSort(arr) {
  let noSwaps;
  for (let i = 0; i < arr.length; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
