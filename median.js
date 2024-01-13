// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const nums1 = [2, 4, 6, 8, 10],
  nums2 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

function mergeAndSortArray(arr1 = [], arr2 = []) {
  let mergedAndSortArray = [...arr1, ...arr2];

  for (let i = 0; i < mergedAndSortArray.length; i++) {
    for (let j = 0; j < mergedAndSortArray.length; j++) {
      if (mergedAndSortArray[j] > mergedAndSortArray[j + 1]) {
        let temp = mergedAndSortArray[j];
        mergedAndSortArray[j] = mergedAndSortArray[j + 1];
        mergedAndSortArray[j + 1] = temp;
      }
    }
  }
  return mergedAndSortArray;
}

function isOddOrEven(value) {
  if (value % 2 === 0) return true;
  else return false;
}

function findMedian(arr = []) {
  let median = 0;
  let length = arr.length;
  let index = parseInt((length - 1) / 2);
  if (isOddOrEven(length)) {
    median = (arr[index] + arr[index + 1]) / 2;
  } else {
    median = arr[index];
  }
  return { median, arr };
}

const output = findMedian(mergeAndSortArray(nums1, nums2));
console.log(output);

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const f = (i, j, k) => {
    if (i >= m) {
      return nums2[j + k - 1];
    }
    if (j >= n) {
      return nums1[i + k - 1];
    }
    if (k == 1) {
      return Math.min(nums1[i], nums2[j]);
    }
    const p = Math.floor(k / 2);
    const x = i + p - 1 < m ? nums1[i + p - 1] : 1 << 30;
    const y = j + p - 1 < n ? nums2[j + p - 1] : 1 << 30;
    return x < y ? f(i + p, j, k - p) : f(i, j + p, k - p);
  };
  const a = f(0, 0, Math.floor((m + n + 1) / 2));
  const b = f(0, 0, Math.floor((m + n + 2) / 2));
  return (a + b) / 2;
};

console.log(findMedianSortedArrays(nums1, nums2));

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var merge = (arr1, arr2) => {
  let res = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};

var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge(left, right);
};

console.log(sortArray(nums2));
