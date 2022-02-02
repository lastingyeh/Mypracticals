/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	let aLen = a.length - 1;
	let bLen = b.length - 1;

	let binaryCount = '';
	let hasCarry = false;

	while (aLen >= 0 || bLen >= 0) {
		let num1 = aLen >= 0 ? Number.parseInt(a[aLen]) : 0;
		let num2 = bLen >= 0 ? Number.parseInt(b[bLen]) : 0;

		let value = hasCarry ? 1 ^ (num1 ^ num2) : num1 ^ num2;

		binaryCount = value.toString().concat(binaryCount);

		hasCarry = (num1 === num2 && num1 === 1) || (hasCarry && (num1 === 1 || num2 === 1));

		aLen--;
		bLen--;
	}

	return hasCarry ? '1'.concat(binaryCount) : binaryCount;
};

console.log(addBinary('11', '1'));

// https://leetcode.com/problems/add-binary
