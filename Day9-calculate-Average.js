// calculate the average of an given array

function calculateTheAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) 
      sum += arr[i];

  let avg = sum / arr.length;

  return avg
}

console.log(calculateTheAverage([1, 2, 3, 4, 5]));
