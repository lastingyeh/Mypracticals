/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	const variants = [];

	const backtrack = (leftsUsed, rightsUsed, parenthesis = '') => {
		if (parenthesis.length === n * 2) {
			variants.push(parenthesis);

			return;
		}

		if (leftsUsed < n) {
			backtrack(leftsUsed + 1, rightsUsed, parenthesis + '(');
		}

		if (rightsUsed < leftsUsed && rightsUsed < n) {
			backtrack(leftsUsed, rightsUsed + 1, parenthesis + ')');
		}
	};

	backtrack(0, 0);

	return variants;
};

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// https://leetcode.com/problems/generate-parentheses/
