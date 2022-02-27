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
	const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));

	dp[0][r][c] = 1;

	for (let step = 1; step <= k; step++) {
		for (let row = 0; row < n; row++) {
			for (let col = 0; col < n; col++) {
				for (let dir of DIRECTIONS) {
					const prevRow = row + dir[0];
					const prevCol = col + dir[1];

					if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
						dp[step][row][col] = dp[step][row][col] + dp[step - 1][prevRow][prevCol] / 8;
					}
				}
			}
		}
	}

	let res = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			res += dp[k][i][j];
		}
	}

	return res;
};

console.log(knightProbability(6, 2, 2, 2))
