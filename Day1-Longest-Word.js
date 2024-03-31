// Longest word in a string

// ex: str = "demo example"
// longest word = example

let str = "demo example";

let strArr = str.split(" ");
let longestWord = "";

for (let i = 0; i < strArr.length; i++) {
  if (longestWord.length < strArr[i].length) {
    longestWord = strArr[i];
  }
}

console.log("Longest word is", longestWord);
