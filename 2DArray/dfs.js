// current
// row
// col
// directions = [[-1,0],[0,1],[1,0],[0,-1]]

const directions = [
	[-1, 0], // up
	[0, 1], // right
	[1, 0], // down
	[0, -1], // left
];
/**
 * @param {number[]} matrix
 * @return {number[]}
 */
const traversalDFS = function (matrix) {
	const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

	// seen = [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],]

	const values = [];

	dfs(matrix, 0, 0, seen, values);

	return values;
};

/**
 * @param {number[]} matrix
 * @param {number} row
 * @param {number} col
 * @param {number[][]} seen
 * @param {number[]} values
 * @return {void}
 */
const dfs = (matrix, row, col, seen, values) => {
	if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;

	values.push(matrix[row][col]);

	seen[row][col] = true;

    // cycle action [up -> right -> down -> left]
	for (let i = 0; i < directions.length; i++) {
		const currentDir = directions[i];

		dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
	}
};

// matrix
const matrix = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
];
