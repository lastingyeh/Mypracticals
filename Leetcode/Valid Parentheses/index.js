/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length % 2 !== 0) {
		return false;
	}

	const dictObj = {
		'{': '}',
		'[': ']',
		'(': ')',
	};

	// {[]} = [0,3],[1,2]
	// [{[]}] = [0,5],[1,4],[2,3]
	let isValidFlag = false;

	for (let i = 0; i < s.length / 2; i += 1) {
		let targetIdx = s.length - i - 1;
		// console.log(s[i], s[targetIdx], i, targetIdx);
		if (dictObj[s[i]] === s[targetIdx] || dictObj[s[i * 2]] === s[i * 2 + 1]) {
            console.log(i);
			isValidFlag = true;
		}
	}
	return isValidFlag;
};

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('[{[]}]'));
// console.log(isValid('{}[]()'));
console.log(isValid('(){}}{'));
