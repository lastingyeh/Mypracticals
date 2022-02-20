const directions = [
	[-1, 0], // up
	[0, 1], // right
	[1, 0], // down
	[0, -1], // left
];

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	const queue = [[0, 0]];
	const seen = new Array(matrix.length).fill(0).map(x => new Array(matrix[0].length).fill(false));

	while (queue.length) {
		const currentPos = queue.shift();
		const [row, col] = [currentPos[0], currentPos[1]];

		if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) continue;

		seen[row][col] = true;

		if (matrix[row][col] === target) return true;

		for (let i = 0; i < directions.length; i++) {
			const currentDir = directions[i];

			queue.push([row + currentDir[0], col + currentDir[1]]);
		}
	}
	return false;
};

const matrix = [
	[1, 3, 5, 7],
	[10, 11, 16, 20],
	[23, 30, 34, 60],
];

console.log(searchMatrix(matrix, 13));
