const arrList = ["demo", 55, 1, 7, "3", 2];

function convertNumandSorting(array = [], order = "asc") {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i] * 1;
    if (!isNaN(num)) {
      result.push(num);
    }
  }
  //sorting array in ascending order
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      const isAsc = result[j] > result[j + 1];
      const isDes = result[j] < result[j + 1];
      if (order === "des" ? isDes : isAsc) {
        // swap the elements
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const result = convertNumandSorting(arrList, "des");
console.log(result);
