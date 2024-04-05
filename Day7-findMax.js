// find the max number in the array
// ex: arr: [1, 2, 3, 4, 5] => 5

function findMaxInArray(arr) {
  let max = Number.MIN_VALUE;

  //! using max
  //  max = Math.max(...arr);

  //! 2nd way
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }

  return max;
}

const res = findMaxInArray([2, 3, 6, 4]);
console.log(res);
