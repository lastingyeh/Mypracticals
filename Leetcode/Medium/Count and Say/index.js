/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
	/**
	 * @param {string} s
	 * @return {string}
	 */
	const createString = s => {
		let c = 1;
		let res = '';

		for (let i = 0; i < s.length - 1; i++) {
			if (s[i] === s[i + 1]) {
				c++;
			} else {
				res += c + s[i];
				c = 1;
			}
		}

		res += c + s[s.length - 1];

		return res;
	};

	if (n === 1) return '1';

	let res = countAndSay(n - 1);

	return createString(res);
};

console.log(countAndSay(4));

// https://leetcode.com/problems/count-and-say/
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
