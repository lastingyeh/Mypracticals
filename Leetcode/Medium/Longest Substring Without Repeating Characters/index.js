// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let array = s.split('');
	let target = [];

	let leftPtr = 0;
	let maxLength = 0;

	for (let i = 0; i < array.length; i++) {
		while (target.includes(array[i])) {
			target.shift();
			leftPtr++;
			console.log('target', target);
		}

		target.push(array[i]);
		maxLength = Math.max(maxLength, i - leftPtr + 1);
	}

	return maxLength;
};

console.log(lengthOfLongestSubstring('pwwkew'));
