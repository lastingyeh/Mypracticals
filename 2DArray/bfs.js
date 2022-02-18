const matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]
// [13,8,14,18,12,3,9,7,15,19,17,11,4,2,10,6,20,16]

const directions = [
	[-1, 0], // up
	[0, 1], // right
	[1, 0], // down
	[0, -1], // left
];

// T: O(N)
// S: O(N)

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const traversalBFS = function (matrix) {
	const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

	// seen = [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],]

	const values = [];
	const queue = [[0, 0]];

	while (queue.length) {
		const currentPos = queue.shift(); // [0,0]
		const [row, col] = [currentPos[0], currentPos[1]];

		if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
			continue;
		}

		seen[row][col] = true;

		values.push(matrix[row][col]);

		for (let i = 0; i < directions.length; i++) {
			const currentDir = directions[i];

			queue.push([row + currentDir[0], col + currentDir[1]]);
		}
	}

	return values;
};

console.log(traversalBFS(matrix));
