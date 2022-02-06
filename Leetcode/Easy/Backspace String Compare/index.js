/**
 * @param {String} string
 * @return {String[]}
 */

var buildString = function (string) {
	const builtArray = [];

	for (let p = 0; p < string.length; p++) {
		if (string[p] !== '#') {
			builtArray.push(string[p]);
		} else {
			builtArray.pop();
		}
	}
	return builtArray;
};

/**
 * @param {String} s
 * @param {String} t
 * @return {boolean}
 */
// T: O(a+b)
// S: O(a+b)
var backspaceCompare = function (s, t) {
	const finalS = buildString(s); // O(a)
	const finalT = buildString(t); // O(b)

	if (finalS.length !== finalT.length) {
		return false;
	}
    // O(a+b)
	for (let p = 0; p < finalS.length; p++) {
		if (finalS[p] !== finalT[p]) {
			return false;
		}
	}

	return true;
};

// [ab#d] [ac#d] => true
// [a#b#c#] [""] => true

// https://leetcode.com/problems/backspace-string-compare/

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
