/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// T: O(logN)
// S: O(1)
var binarySearch = function (nums, target) {
	let left = 0,
		right = nums.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (target === nums[mid]) return mid;

		if (target > nums[mid]) {
			left = mid + 1;
		} else if (target < nums[mid]) {
			right = mid - 1;
		}
	}
	return -1;
};

console.log(binarySearch([1,2,3,4,5], 0));
