/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let sum = 0;
	// first > second -> desc
	for (let i = digits.length - 1; i >= 0; i--) {
		if (++digits[i] === 10) {
			digits[i] = 0;

			if (!i) {
				digits.unshift(1);
			}
		} else {
			break;
		}
	}

	return digits;
};

console.log(plusOne([9, 9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([8, 9, 9, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
