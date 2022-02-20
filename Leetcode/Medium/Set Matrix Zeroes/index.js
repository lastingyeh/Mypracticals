/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const queue = [];

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			if (matrix[row][col] === 0) {
				queue.push([row, col]);
			}
		}
	}

	while (queue.length) {
		const [row, col] = queue.shift();

		matrix[row].fill(0);

		for (let i = 0; i < matrix.length; i++) {
			matrix[i][col] = 0;
		}
	}
};

// https://leetcode.com/problems/set-matrix-zeroes/submissions/
console.log(
	setZeroes([
		[0, 1, 2, 0],
		[3, 4, 5, 2],
		[1, 3, 1, 5],
	])
);
