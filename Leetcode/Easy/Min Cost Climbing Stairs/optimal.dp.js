/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	const n = cost.length;
	const dp = [];

	return Math.min(minCost(n - 1, cost, dp), minCost(n - 2, cost, dp));
};

const minCost = (n, cost, dp) => {
	if (n < 0) return 0;

	if (n === 0 || n === 1) return cost[n];

	if (dp[n] !== undefined) return dp[n];

	dp[n] = cost[n] + Math.min(minCost(n - 1, cost, dp), minCost(n - 2, cost, dp));

	return dp[n];
};

// https://leetcode.com/problems/min-cost-climbing-stairs/
console.log(minCostClimbingStairs([10, 15, 20, 40]));
