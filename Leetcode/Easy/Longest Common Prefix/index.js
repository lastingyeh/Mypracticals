/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 1) return strs[0];

	let res = strs[0];
	let i = 1;

	while (res && i < strs.length) {
		if (strs[i].startsWith(res)) {
			i++;
		} else {
			res = res.slice(0, res.length - 1);
		}
	}

	return res;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
