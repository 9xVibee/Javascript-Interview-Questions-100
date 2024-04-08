// find the factorial of a number
// ex: 5 : 120

function factorialOfANumber(num) {
  if (num < 0) return "Enter Non-negative number";

  let fact = 1;

  for (let i = 2; i <= num; i++) fact = fact * i;

  return fact;
}

let res = factorialOfANumber(5);
console.log(res);
