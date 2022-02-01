/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	if (s.length < 2) return s;

	if (!s) return '';

	let longestSubstr = '';

	for (let i = 0; i < s.length; i++) {
		let odd = expandMid(s, i, i);
		let even = expandMid(s, i + 1, i);
        
		if (odd.length > longestSubstr.length) {
			longestSubstr = odd;
		}

		if (even.length > longestSubstr.length) {
			longestSubstr = even;
		}
	}

	return longestSubstr;
};

/**
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {string}
 */
const expandMid = (s, left, right) => {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left--;
		right++;
	}

	return s.slice(left + 1, right);
};

console.log(longestPalindrome('babad'));

