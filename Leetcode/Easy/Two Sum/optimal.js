/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// const numsMap = nums.reduce((prev, curr, idx) => {
	// 	prev[target - curr] = idx;
	// 	return prev;
	// }, {});
	const numsMap = {};

	for (let p = 0; p < nums.length; p++) {
		const currentMapVal = numsMap[nums[p]];

		if (currentMapVal >= 0) {
			return [currentMapVal, p];
		}

		const numberToFind = target - nums[p];
		numsMap[numberToFind] = p;
	}

	return null;
};

twoSum([1, 3, 7, 9, 2], 11);
// https://leetcode.com/problems/two-sum
