/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	const getPartIdx = (nums, left, right) => {
		const pivot = nums[right];
		let partIdx = left;

		for (let j = left; j < right; j++) {
			if (nums[j] <= pivot) {
				[nums[j], nums[partIdx]] = [nums[partIdx], nums[j]];

				partIdx++;
			}
		}

		[nums[partIdx], nums[right]] = [nums[right], nums[partIdx]];

		return partIdx;
	};
	const quickSort = (nums, left, right) => {
		if (left < right) {
			const partIdx = getPartIdx(nums, left, right);

			quickSort(nums, left, partIdx - 1);
			quickSort(nums, partIdx + 1, right);
		}
	};

	quickSort(nums, 0, nums.length - 1);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

// https://leetcode.com/problems/sort-colors/
