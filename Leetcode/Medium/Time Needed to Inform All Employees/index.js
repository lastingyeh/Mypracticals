/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
	const emps = {};

	for (let i = 0; i < n; i++) {
		emps[i] = [manager[i], informTime[i]];
	}

	console.log(emps);

	const head = emps[headID];
	const infoTime = head[1];
	const seen = { [headID]: true };

	const queue = [[headID, infoTime]];

	while (queue.length) {
		const top = queue.shift();

		Object.values(emps).forEach((val, idx) => {
			const [manager, informTime] = [val[0], val[1]];

			if (manager === top[0] && !seen[idx]) {
				seen[idx] = true;

				queue.push([idx, informTime]);
			}
		});
	}
};

numOfMinutes(8, 4, [2, 2, 4, 6, -1, 4, 4, 5], [0, 0, 4, 0, 7, 3, 6, 0]);

// https://leetcode.com/problems/time-needed-to-inform-all-employees/
