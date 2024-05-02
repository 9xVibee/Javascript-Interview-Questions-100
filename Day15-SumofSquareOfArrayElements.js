// write a program which will calculate the sum of square of array elements

function sumOfSquareOfElements(arr) {
  let sum = arr.reduce((sum, cur) => {
    return sum + cur * cur;
  }, 0);

  return sum;
}

console.log(sumOfSquareOfElements([1, 2, 3]));
