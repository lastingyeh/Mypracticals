/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
	const transposeArr = [];

	for (let col = 0; col < matrix[0].length; col++) {
		const subarr = [];
        
		for (let row = 0; row < matrix.length; row++) {
			subarr.push(matrix[row][col]);
		}
		transposeArr.push(subarr);
	}

	return transposeArr;
};

// https://leetcode.com/problems/transpose-matrix/

const test1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const test2 = [
	[1, 2, 3],
	[4, 5, 6],
];

console.log(transpose(test1));
console.log(transpose(test2));
