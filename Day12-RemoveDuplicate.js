//! Remove duplicate from array and return new array
// ex: [1, 2, 3, 1] -> [1, 2, 3]

//! using new Set()
function removeDuplicate(arr) {
  let setArr = new Set(arr);

  let newArr = new Array(...setArr);
  return newArr;
}

removeDuplicate([1, 2, 3, 1]);

//! using array normally
function removeDuplicateNormalWay(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

let res =removeDuplicateNormalWay([1, 2, 3, 1]);
console.log(res);
