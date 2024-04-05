// Question - find out that given string is palindrome or not
// ex: car: false
// dad: true

function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;

    i++;
    j--;
  }

  return true;
}

const res = isPalindrome("dad");
console.log(res);
