// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} n
 * @return {number}
 */
var reverse = function (n) {
	let reverseN = 0;
	let sign = n < 0;

	n = Math.abs(n);

	while (n) {
		reverseN = reverseN * 10 + (n % 10);
		n = Math.floor(n / 10);
	}

	return reverseN > 0x7fffffff ? 0 : sign ? -reverseN : reverseN;
};

console.log(reverse(-123));

