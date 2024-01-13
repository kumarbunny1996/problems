// Input: nums1 = [1,2,3,0,0,0], nums2 = [2,5,6],
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] 0 should be ignored.
// Merge nums1 and nums2 into a single array sorted in ascending order.

const nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6];

function sortTheArray(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function mergeSortedArrays(nums1 = [], nums2 = []) {
  const mergedArray = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] !== 0) {
      mergedArray.push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] !== 0) {
      mergedArray.push(nums2[i]);
    }
  }
  sortTheArray(mergedArray);
  return mergedArray;
}

const output = mergeSortedArrays(nums1, nums2);

console.log(output);
