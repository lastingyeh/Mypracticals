/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	const dict = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	for (char of s) {
		if (char === dict[stack[stack.length - 1]]) {
            // console.log(stack);
			if (stack.length > 0) {
                console.log(stack);
				stack.pop();
                console.log(stack);
			} else {
				return false;
			}
		} else {
            console.log(char, stack);
			stack.push(char);
		}
	}

	return stack.length === 0;
};

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('[{[]}]'));
// console.log(isValid('{}[]()'));
// console.log(isValid('(){}}{'));
console.log(isValid('(([]){})'));
