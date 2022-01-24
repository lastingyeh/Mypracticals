/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	var obj = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	var result = 0;
	var step = 1;

	for (var i = 0; i < s.length; i += step) {
		if (!obj[s[i]]) {
			return result;
		}

		// console.log(i);

		let val1 = obj[s[i]];
		let v1 = obj[s[i]];
		let v2 = obj[s[i + 1]];

		if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
			val1 = v2 - v1;
			step = 2;
		} else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
			val1 = v2 - v1;
			step = 2;
		} else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
			val1 = v2 - v1;
			step = 2;
		} else {
			step = 1;
		}

		console.log(val1);

		// console.log('result', val1);
		result += val1;
	}

	return result;
};

// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCVI'));
