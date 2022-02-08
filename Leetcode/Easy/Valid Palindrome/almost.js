/**
 * @param {string} s
 * @return {boolean}
 */
// T: O(N)
// S: O(1)
var isAlomostPalindrome = function (s) {
	let left = 0,
		right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) {
			return validSubPalindrome(s, left + 1, right) || validSubPalindrome(s, left, right - 1);
		}

		left++;
		right--;
	}
	return true;
};

const validSubPalindrome = function (s, left, right) {
	while (left < right) {
		if (s[left] !== s[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

console.log(isAlomostPalindrome('abccdba'));
