// when k > 0 => knight(k, r, c) = sum((x,y) => directions knight(k-1, r+x,c+y)/8)
// (k = 0) = 1
// otherwise r<0 || r<N || c<0 || c>N => knight(k,r,c) = 0
/*
0 <= r < N, 0 <= c < N, k === 0
probability(r, c, k) = 1

0 <= r < N, 0 <= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0
*/
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
	if (r < 0 || c < 0 || r >= n || c >= n) return 0;

	if (k === 0) return 1;

	let res = 0;

	for (let dir of DIRECTIONS) {
		res += knightProbability(n, k - 1, r + dir[0], c + dir[1]) / 8;
	}

	return res;
};

console.log(knightProbability(6, 2, 2, 2));

// https://leetcode.com/problems/knight-probability-in-chessboard/
