/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
	quickSort(nums, 0, nums.length - 1);

	const result = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			result.push(i);
		}
	}

	return result;
};

// use quick sort
const quickSort = (nums, left, right) => {
	if (left < right) {
		// get partIdx
		const partIdx = getPartition(nums, left, right);
		// sort (left, partIdx - 1)
		quickSort(nums, left, partIdx - 1);
		// sort (partIdx + 1, right)
		quickSort(nums, partIdx + 1, right);
	}
};

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const getPartition = (nums, left, right) => {
	const pivotElement = nums[right];

	let partIdx = left;

	for (let j = left; j < right; j++) {
		if (nums[j] <= pivotElement) {
			// swap(nums, partIdx, j);
			[nums[partIdx], nums[j]] = [nums[j], nums[partIdx]];
			partIdx++;
		}
	}

	[nums[partIdx], nums[right]] = [nums[right], nums[partIdx]];

	return partIdx;
};

// const swap = (nums, left, right) => {
// 	let temp = nums[left];

// 	nums[left] = nums[right];
// 	nums[right] = temp;
// };

// console.log(targetIndices([1, 2, 5, 2, 3], 2));
// console.log(targetIndices([1, 2, 5, 2, 3], 3));
// console.log(targetIndices([1, 2, 5, 2, 3], 5));
console.log(targetIndices([48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15, 38], 6));

// https://leetcode.com/problems/find-target-indices-after-sorting-array/
