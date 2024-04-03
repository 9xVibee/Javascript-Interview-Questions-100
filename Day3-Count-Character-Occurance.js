// Count Occurance of character

// Function should take to arguments
// 1) string 2)character
// case-insensitive

// ex: count(Abhay, a) -> 2

function countCharacterOccurance(str, char) {
  let smallChar = char.toLowerCase(),
    capitalChar = char.toUpperCase();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (smallChar === str[i] || capitalChar === str[i]) count++;
  }

  return count;
}

let ocurrance = countCharacterOccurance("Missing", "i");
console.log(ocurrance);
