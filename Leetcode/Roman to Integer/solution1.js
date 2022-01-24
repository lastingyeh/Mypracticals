/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let obj = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let res = 0;
    
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]] < obj[s[i + 1]]) {
			res -= obj[s[i]];
			continue;
		}
		res += obj[s[i]];
	}
	return res;
};
