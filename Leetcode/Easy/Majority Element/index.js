/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const dictCount = {};

	let maxElement = 0;
	let majority;

	for (let n of nums) {
		if (dictCount[n]) {
			dictCount[n]++;
		} else {
			dictCount[n] = 1;
		}

		if (dictCount[n] > maxElement) {
			maxElement = dictCount[n];
			majority = n;
		}
	}

	return majority;
};

// https://leetcode.com/problems/majority-element/

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
