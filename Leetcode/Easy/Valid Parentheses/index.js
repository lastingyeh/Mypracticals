/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	const dict = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	for (char of s) {
		if (char === dict[stack[stack.length - 1]]) {
			if (stack.length > 0) {
				stack.pop();
			} else {
				return false;
			}
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0;
};

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('[{[]}]'));
// console.log(isValid('{}[]()'));
// console.log(isValid('(){}}{'));
console.log(isValid('(([]){})'));

// https://leetcode.com/problems/valid-parentheses