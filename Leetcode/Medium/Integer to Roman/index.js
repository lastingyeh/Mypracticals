// https://leetcode.com/problems/integer-to-roman/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	const chars = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		40: 'XL',
		50: 'L',
		90: 'XC',
		100: 'C',
		400: 'CD',
		500: 'D',
		900: 'CM',
		1000: 'M',
	};

	const keys = Object.keys(chars);
	let result = '';

	while (num !== 0) {
		for (let i = keys.length - 1; i >= 0; i--) {
			let key = keys[i];

			if (num - key >= 0) {
				num -= key;
				result += chars[key];
				break;
			}
		}
	}

	return result;
};

console.log(intToRoman(3));
