// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	if (s.length === 0) return 0;

	let start = 0;

	while (s[start] === ' ') {
		start++;
	}

	let isPositive = 1;

	if (s[start] === '-' || s[start] === '+') {
		if (s[start] === '-') {
			isPositive = -1;
		}
		start++;
	}

	let currentInt = 0;
	let nums = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true };

	while (nums[s[start]]) {
		let newVal = currentInt * 10;

		currentInt = newVal + parseInt(s[start]);
		start++;
	}

	const MAX_INT = 2 ** 31 - 1;
	const MIN_INT = -1 * 2 ** 31;

	currentInt = currentInt * isPositive;

	if (currentInt < 0 && currentInt < MIN_INT) return MIN_INT;
	if (currentInt > 0 && currentInt > MAX_INT) return MAX_INT;

	return currentInt;
};

console.log(myAtoi('42'));
