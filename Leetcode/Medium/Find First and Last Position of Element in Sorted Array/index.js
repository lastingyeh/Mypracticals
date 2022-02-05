/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	/**
	 * @param {number} target
	 * @param {boolean} reverse
	 * @return {number}
	 */
	const findIndex = (target, reverse) => {
		let index = -1,
			start = 0,
			end = nums.length - 1;

		while (start <= end) {
			let mid = Math.floor((start + end) / 2);

			if (!reverse) {
				if (target <= nums[mid]) {
					end = mid - 1;
				} else {
					start = mid + 1;
				}
			} else {
				if (nums[mid] <= target) {
					start = mid + 1;
				} else {
					end = mid - 1;
				}
			}

			if (nums[mid] === target) {
				index = mid;
			}
		}
		return index;
	};

	return [findIndex(target), findIndex(target, true)];
};

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
