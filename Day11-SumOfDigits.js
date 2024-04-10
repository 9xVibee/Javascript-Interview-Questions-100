// sum of digits
// ex: 1234 -> 10

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let temp = num % 10;
    sum += temp;

    num = Math.round(num / 10);
  }

  return sum;
}

console.log(sumOfDigits(1234));
