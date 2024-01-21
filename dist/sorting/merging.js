//create a function that merges two sorted arrays
//the function should return a sorted array which consists of all the elements in the input arrays
//the function shouldn't modify the arrays and shoud have O(n+m) time and space complexity
function mergeTwoSortedArrays(arr1, arr2) {
  //create an empty array, take a look at the smallest values in each input array
  let result = [];
  //while there are still values we haven't looked at...
  let i = 0;
  let j = 0;

  //if the values in the first array is smaller than the value in the second array,
  //push the value in the first array into out result and move on to the next value
  //in the first array

  //if the values in the second array is smaller than the value in the first array,
  //push the value in the second array into out result and move on to the next value
  //in the second array

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  //at the end if we have exhausted one array, take all remaining values in the other array and push them
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
//   console.log(result);
  return result;
}

function mergeSort(arr) {
  //break up the array into halves until you have arrays that are empty or have one element
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let firstPart = mergeSort(arr.slice(0, mid));
  let secondPart = mergeSort(arr.slice(mid));
  return mergeTwoSortedArrays(firstPart, secondPart);
  //once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
  //once the array has been merged back together, return the merged and sorted array
}
mergeSort([10, 24, 76, 73]);
// mergeTwoSortedArrays([1, 5, 9], [2, 4, 6, 10]);
