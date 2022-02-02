/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
	if (rowIndex === 0) return [1];
	if (rowIndex === 1) return [1, 1];

	let count = 2;
	let triangle = [1, 1];

	const generateArr = arr => {
		let gArr = [];

		for (let i = 0; i < arr.length - 1; i++) {
			gArr.push(arr[i] + arr[i + 1]);
		}

		return gArr;
	};

	while (count <= rowIndex) {
		triangle = [1, ...generateArr(triangle), 1];
		count++;
	}

	return triangle;
};

console.log(getRow(3));

// https://leetcode.com/problems/pascals-triangle-ii
