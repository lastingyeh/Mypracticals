/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const swap = (left, right) => ([nums[left], nums[right]] = [nums[right], nums[left]]);

    const reverse = (start, end) => {
        while (start <= end) {
            swap(start++, end--);
        }
    };

	if (!nums || nums.length === 1) return;

	let left = nums.length - 2;
	let right = nums.length - 1;

	while (left >= 0 && nums[left] >= nums[left + 1]) {
		left--;
	}

	if (left >= 0) {
		while (right >= 0 && nums[right] <= nums[left]) {
			right--;
		}
		swap(left, right);
	}

	reverse(left + 1, nums.length - 1);
};


// https://leetcode.com/problems/next-permutation/
// Input: nums = [1,2,3]
// Output: [1,3,2]
