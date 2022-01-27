/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	var arr = s.trim().split(' ');

	return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
