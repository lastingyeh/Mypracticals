/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	const res = [];

	const helper = (comb, t, i) => {
		if (t === 0) return res.push(comb);

		for (let j = i; j < candidates.length; j++) {
			const num = candidates[j];

			if (num <= t) helper([...comb, num], t - num, j);
		}
	};

	helper([], target, 0);

	return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));

// https://leetcode.com/problems/combination-sum/
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
