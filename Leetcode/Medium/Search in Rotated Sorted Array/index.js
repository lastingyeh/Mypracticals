/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let right = nums.length - 1;
	let left = 0;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) return mid;

		if (nums[left] <= nums[mid]) {
			if (nums[left] <= target && target < nums[mid]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (nums[mid] < target && target <= nums[right]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
};

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// https://leetcode.com/problems/search-in-rotated-sorted-array/

// var search = function(nums, target) {
//     let shift = nums.length - 1;
    
//     for (let x = 0; x < nums.length; x++) {
//         if (nums[x] < nums[shift]) shift = x;
//     }
    
//     let left = true;
//     if (nums[shift] === target) return shift;
//     else if (target > nums[shift] && target <= nums[nums.length - 1]) left = false;
    
//     let min = left ? 0 : shift, max = left ? shift : nums.length-1;
//     while (min <= max) {
//         const half = Math.floor((min + max) / 2);
        
//         if (nums[half] === target) return half;
//         if (nums[half] < target) min = half + 1;
//         else max = half - 1;
//     }
    
//     return -1;
// };
