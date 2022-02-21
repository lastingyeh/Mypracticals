/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, managers, informTime) {
	const adjList = managers.map(() => []);

	for (let emp = 0; emp < n; emp++) {
		const manager = managers[emp];

		if (manager === -1) continue;

		adjList[manager].push(emp);
	}

	return dfs(headID, adjList, informTime);
};

/**
 * @param {number} currentId
 * @param {number[][]} adjList
 * @param {number[]} informTime
 * @return {number}
 */
const dfs = (currentId, adjList, informTime) => {
	// the last subordinator
	if (adjList[currentId].length === 0) return 0;

	let max = 0;
	const subordinates = adjList[currentId];

	for (let i = 0; i < subordinates.length; i++) {
		max = Math.max(max, dfs(subordinates[i], adjList, informTime));
	}

	return max + informTime[currentId];
};

numOfMinutes(8, 4, [2, 2, 4, 6, -1, 4, 4, 5], [0, 0, 4, 0, 7, 3, 6, 0]);

// https://leetcode.com/problems/time-needed-to-inform-all-employees/
