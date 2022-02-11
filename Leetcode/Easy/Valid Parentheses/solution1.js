/**
 * @param {string} s
 * @return {boolean}
 */
// '' -> true
// {([])} -> true
// {([)] -> false
// {[(]]} -> false
// {[]()} -> true
// {{}[(])}

// T: O(N)
// S: O(N)
var isValid = function (s) {
	const params = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	if (s.length === 0) return true;

	const stack = [];

	for (let c of s) {
		if (params[c]) {
			stack.push(c);
		} else {
			const leftBracket = stack.pop();
			const correctBracket = params[leftBracket];

			if (c !== correctBracket) return false;
		}
	}

	return stack.length === 0;
};

console.log(isValid('{{}[(])}'));
