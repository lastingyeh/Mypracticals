/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var minCoinCollection = function (coins, amount) {
	const dp = new Array(amount + 1).fill(amount + 1);

	dp[0] = 0;

	for (let i = 0; i < dp.length; i++) {
		for (let coin of coins) {
			if (i - coin < 0) continue;

			dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
		}
	}

	if (dp[amount] === amount + 1) {
		return -1;
	}

	return dp[amount];
};

console.log(minCoinCollection([1, 2, 5], 11));

let m = 701 % 26;
let q = (701 - m) / 26;

let s1 = String.fromCharCode(q + 64);
let s2 = String.fromCharCode(m + 64);

return s1 + s2;

console.log(s1 + s2);
