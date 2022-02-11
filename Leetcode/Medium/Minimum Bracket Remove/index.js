/**
 * @param {string} s
 * @return {number}
 */

// T: O(N)
// S: O(N)
var minRemoveToMakeValid = function (s) {
	// action
	// meet '(' -> push idx to array
	// meet ')'
	// if array has value
	// pop from array
	// else
	// meet ')' -> remove from s
	const res = s.split('');
	const stack = [];

	for (let i = 0; i < res.length; i++) {
		if (res[i] === '(') {
			stack.push(i);
		} else if (res[i] === ')' && stack.length) {
			stack.pop();
		} else if (res[i] === ')') {
			res[i] = '';
		}
	}

	while (stack.length) {
		const curIdx = stack.pop();
		res[curIdx] = '';
	}

	return res.join('');
};

// a)bc(d)
console.log(minRemoveToMakeValid('a)bc(d)'));

