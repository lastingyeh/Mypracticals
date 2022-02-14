/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
	// AB => 2 * 26 ^0 + 1 * 26 ^
	// ZY => 25 * 26 ^0 + 26 * 26 ^ 1
	const ascii = 64;

	let sum = 0;
	let pow = 0;

	for (let i = columnTitle.length - 1; i >= 0; i--) {
		let num = columnTitle.charCodeAt(i) - ascii;

		sum += num * Math.pow(26, pow);

		pow++;
	}

	return sum;
};

console.log(titleToNumber('ZY'));
