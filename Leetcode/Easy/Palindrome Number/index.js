/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0) {
		return false;
	}

	var nstr = x.toString().split('').reverse().join('');
	var nint = parseInt(nstr);

	return x === nint;
};
