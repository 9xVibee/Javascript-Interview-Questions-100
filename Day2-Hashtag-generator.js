// Hast tag Generator
// ex: my name is thapa technical
// o/p: #MyNameIsThapaTechnical

let str = "my name is thapa technical";

let op = generateHashTag(str);
console.log(op);

function generateHashTag(str) {
  if (str.length > 280 || str.length === 0) return false;

  let strArr = str.split(" ");
  let ansStr = "#";

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 0) {
      ansStr += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
  }

  //   checking if string is empty or not
  if (ansStr.length == 0) return false;

  return ansStr;
}
