// check if given number is power of two or not

// ex: 4 true, 8 true, 9 false

function isPowerOfTwo(num) {
  let n = 2;

  if (num < n) return false;

  while (n <= num) {
    if (n == num) return true;
    n *= 2;
  }

  return false;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(9));
