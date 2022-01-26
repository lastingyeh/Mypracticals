/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let start = 0;
	let end = nums.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (target > nums[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return start;
};

console.log(searchInsert([1, 2, 5, 6, 7], 6));
