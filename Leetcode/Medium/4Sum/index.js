/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	const quads = [];
	const memo = {};

	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let p = j + 1;
			let q = nums.length - 1;

			while (p < q) {
				const sum = nums[i] + nums[j] + nums[p] + nums[q];

				if (sum === target) {
					const key = `${nums[i]}|${nums[j]}|${nums[p]}|${nums[q]}`;

					if (!memo[key]) {
						memo[key] = true;

						quads.push([nums[i], nums[j], nums[p], nums[q]]);
					}
					p++;
				} else if (sum > target) {
					q--;
				} else if (sum < target) {
					p++;
				}
			}
		}
	}
	return quads;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// https://leetcode.com/problems/4sum/
