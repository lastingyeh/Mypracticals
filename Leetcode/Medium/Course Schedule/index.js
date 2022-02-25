const p = [
	[1, 0],
	[2, 1],
	[2, 5],
	[0, 3],
	[4, 3],
	[3, 5],
	[4, 5],
];

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
	const adjList = new Array(numCourses).fill(0).map(() => []);

	for (let i = 0; i < prerequisites.length; i++) {
		const pair = prerequisites[i];

		adjList[pair[1]].push(pair[0]);
	}

	for (let v = 0; v < numCourses; v++) {
		const queue = [];
		const seen = {};

		for (let i = 0; i < adjList[v].length; i++) {
			queue.push(adjList[v][i]);
		}

		while (queue.length) {
			const current = queue.shift();

			seen[current] = true;

			if (current === v) return false;

			const adjacent = adjList[current];

			for (let i = 0; i < adjacent.length; i++) {
				const next = adjacent[i];

				if (!seen[next]) {
					queue.push(next);
				}
			}
		}
	}

	return true;
};

canFinish(6, p);

// https://leetcode.com/problems/course-schedule/