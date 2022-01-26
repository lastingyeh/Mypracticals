/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let n1 = 0;

	for (let n2 = 1; n2 < nums.length; n2++) {
		if (nums[n1] !== nums[n2]) {
			nums[n1 + 1] = nums[n2];
			n1++;
		}
	}

    console.log(nums);

	return n1 + 1;
};

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 4]));
