// https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 1) return s;

	let result = '';
	let arr = [];

	for (let r = 0; r < numRows; r++) {
		arr[r] = [];
	}

	console.log('arr', arr);

	let counter = 0;
	let countUp = false;

	for (let i = 0; i < s.length; i++) {
		if (counter === numRows - 1 || counter === 0) {
			countUp = !countUp;
		}

		arr[counter].push(s[i]);

		if (countUp) {
			counter++;
		} else {
			counter--;
		}
	}

	for (let x = 0; x < arr.length; x++) {
		arr[x] = arr[x].join('');
	}
	result = arr.join('');

	return result;
};

console.log(convert('PAYPALISHIRING', 3));
