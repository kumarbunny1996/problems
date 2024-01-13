const array = [45, 2, 10, 77, 44, 1, 36, 66, 55];

function findSecondHighestNum(array = []) {
  let highestNum = 0;
  let secondHighestNum = 0;
  let third = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > highestNum) {
      third = secondHighestNum;
      secondHighestNum = highestNum;
      highestNum = array[i];
    }
    //ensure that second heighest number present in array or not after the highest num
    else if (array[i] > secondHighestNum && array[i] < highestNum) {
      third = secondHighestNum;
      secondHighestNum = array[i];
    } else if (array[i] > third && array[i] < secondHighestNum) {
      third = array[i];
    }
  }
  return [highestNum, secondHighestNum, third];
}

const result = findSecondHighestNum(array);
console.log(result);
