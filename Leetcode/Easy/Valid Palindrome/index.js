/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	s = s.toLowerCase();

	let newStr = '';
    let output = '';

	for (let c of s) {
		if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
			newStr += c;
            output = c + output;
		}
	}

    return newStr === output;
};

console.log(isPalindrome('0P'));

// https://leetcode.com/problems/valid-palindrome