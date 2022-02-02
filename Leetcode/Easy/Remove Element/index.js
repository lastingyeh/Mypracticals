/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let count = 0;
    let length = nums.length;

	while (length > 0) {
		let n = nums.pop();

		if (n !== val) {
            nums.unshift(n);
			count ++
		}

        length--;
	}

    return count;
};

console.log(removeElement([3, 2, 2, 3], 3));

// https://leetcode.com/problems/remove-element