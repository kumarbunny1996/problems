const array = [25, 55, 83, 1, 22, 35, 6];

function reversingArray(array = []) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

const result = reversingArray(array);
console.log(result);

// Given a string s, find the length of the longest
// substring
//  without repeating characters.
// string = ""abcabcbb""

const inputVal = "abcabcbbdddeee";

function findLengthOfStrWithoutRepeating(array = []) {
  let charIndexMap = {};
  let keys = [];
  for (let i = 0; i < array.length; i++) {
    let currentChar = array[i];
    charIndexMap[currentChar] = i;
  }
  for (const key in charIndexMap) {
    keys.push(key);
  }
  return keys.length;
}

const length = findLengthOfStrWithoutRepeating(inputVal);
console.log(length);
