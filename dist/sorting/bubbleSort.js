"use strict";
function bubbleSort(n, ...array) {
    let isDone = false;
    while (!isDone) {
        isDone = true; //it's done until you have to change some numbers
        for (let i = 0; i < array.length - 1; i++) {
            let a = array[i];
            let b = array[i + 1];
            if (a > b) {
                isDone = false; //becomes undone because you want to go through it again after the changes
                array[i] = b;
                array[i + 1] = a;
            }
        }
    }
    console.log(array);
}
//# sourceMappingURL=bubbleSort.js.map