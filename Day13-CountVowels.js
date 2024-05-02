let str = "hellow World";
let str2 = "The quick brown fox";

function countNumberOfVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    )
      count++;
  }

  return count;
}

console.log(countNumberOfVowels(str));
console.log(countNumberOfVowels(str2));
