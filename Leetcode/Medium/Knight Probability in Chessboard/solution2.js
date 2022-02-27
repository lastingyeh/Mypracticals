const DIRECTIONS = [
	[-2, -1],
	[-2, 1],
	[-1, 2],
	[1, 2],
	[2, 1],
	[2, -1],
	[1, -2],
	[-1, -2],
];
/**
 * @param {number} n
 * @param {number} k
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function (n, k, r, c) {
	let prevDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
	let nextDp = new Array(n).fill(0).map(() => new Array(n).fill(0));

	prevDp[r][c] = 1;

	for (let step = 0; step < k; step++) {
		for (let row = 0; row < n; row++) {
			for (let col = 0; col < n; col++) {
				for (let dir of DIRECTIONS) {
					const prevRow = row + dir[0];
					const prevCol = col + dir[1];

					if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
						nextDp[row][col] = nextDp[row][col] + prevDp[prevRow][prevCol] / 8;
					}
				}
			}
		}
		prevDp = nextDp;
		nextDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
	}

	let res = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			res += prevDp[i][j];
		}
	}

	return res;
};

console.log(knightProbability(6, 2, 2, 2))
