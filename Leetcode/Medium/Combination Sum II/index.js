/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	const result = [];

	candidates.sort((a, b) => a - b);

	const dfs = (idx, remaining, subResult) => {
		if (remaining === 0) {
			result.push([...subResult]);
			return;
		}

		if (remaining < 0) {
			return;
		}

		let prev = -1;

		for (let i = idx; i < candidates.length; i++) {
			if (candidates[i] === prev) {
				continue;
			}

			subResult.push(candidates[i]);

			dfs(i + 1, remaining - candidates[i], subResult);

			prev = subResult.pop();
		}
	};

	dfs(0, target, []);

	return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// https://leetcode.com/problems/combination-sum-ii/

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

