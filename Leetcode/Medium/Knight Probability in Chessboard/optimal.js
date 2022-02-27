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
	const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));

	return recurse(n, k, r, c, dp);
};

/**
 * @param {number} n
 * @param {number} k
 * @param {number} r
 * @param {number} c
 * @param {number[][]} dp
 * @return {number}
 */
// T: O(N^2 * k)
// S: O(N^2 * k)
const recurse = (n, k, r, c, dp) => {
	if (r < 0 || c < 0 || r >= n || c >= n) return 0;

	if (k === 0) return 1;

	if (dp[k][r][c] !== undefined) return dp[k][r][c];

	let res = 0;

	for (let dir of DIRECTIONS) {
		res += recurse(n, k - 1, r + dir[0], c + dir[1], dp) / 8;
	}

	dp[k][r][c] = res;

	return dp[k][r][c];
};

console.log(knightProbability(6, 2, 2, 2));
