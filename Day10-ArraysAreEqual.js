//! Check if two given arrays are equal and elements are in same order!

function checkIsArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(checkIsArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(checkIsArraysEqual([1, 2, 3], [1, 2, 4]));
console.log(checkIsArraysEqual([], []));
