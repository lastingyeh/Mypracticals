/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	let m = num1.length;
	let n = num2.length;
	let answer = new Array(m + n).fill(0);

	if (num1 === '0' || num2 === '0') return '0';

	num1 = num1.split('').reverse().join('');
	num2 = num2.split('').reverse().join('');

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			const p1 = i + j;
			const p2 = i + j + 1;

			let carry = answer[p1];
			let multiple = parseInt(num2[i]) * parseInt(num1[j]) + carry;

			answer[p1] = multiple % 10;
			answer[p2] += Math.floor(multiple / 10);
		}
	}

	if (answer[answer.length - 1] === 0) {
		answer.pop();
	}

	answer.reverse();

	return answer.join('');
};

// console.log(multiply('2', '3'));
console.log(multiply('123', '456'));

// https://leetcode.com/problems/multiply-strings/

// Input: num1 = "123", num2 = "456"
// Output: "56088"
