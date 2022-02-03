/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (!digits) return [];

	const map = {
		2: 'abc',
		3: 'def',
		4: 'ghi',
		5: 'jkl',
		6: 'mno',
		7: 'pqrs',
		8: 'tuv',
		9: 'wxyz',
	};

	let result = [];

	const helper = (arr, idx) => {
		if (arr.length === digits.length) {
			result.push(arr.join(''));
			return;
		}

		for (let item of map[digits[idx]]) {
			arr.push(item);
			helper(arr, idx + 1);
			arr.pop();
		}
	};

	helper([], 0);

	return result;
};

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
console.log(letterCombinations('23'));

