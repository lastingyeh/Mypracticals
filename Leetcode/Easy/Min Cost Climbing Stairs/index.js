/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	// minCost(n) = cost(n) + min(minCost(n-1), minCost(n-2))
	const n = cost.length;

	return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
};

const minCost = (n, cost) => {
	if (n < 0) return 0;

	if (n === 0 || n === 1) return cost[n];

	return cost[n] + Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
};

// https://leetcode.com/problems/min-cost-climbing-stairs/
console.log(minCostClimbingStairs([10, 15, 20]));
