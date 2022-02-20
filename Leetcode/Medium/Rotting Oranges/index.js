const directions = [
	[-1, 0],
	[0, 1],
	[1, 0],
	[0, -1],
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

// sequential order:
// - count fresh oranges
// put rotten oranges into queue

// bfs:
// - use queue size to take minutes
// - process rotting oranges
//   - rot adjacent fresh oranges
//   - push into queue
//   - decrement fresh oranges count

// T:O(N)
// S:O(N)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	if (grid.length === 0) return 0;

	const queue = [];
	let freshOranges = 0;

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === ROTTEN) {
				queue.push([row, col]);
			}

			if (grid[row][col] === FRESH) {
				freshOranges++;
			}
		}
	}

	let currentQueueSize = queue.length;
	let minutes = 0;

	// BFS
	while (queue.length > 0) {
		if (currentQueueSize === 0) {
			currentQueueSize = queue.length;
			minutes++;
		}

		const currentOrang = queue.shift();

		currentQueueSize--;

		const [row, col] = [currentOrang[0], currentOrang[1]];

		for (let i = 0; i < directions.length; i++) {
			const currentDir = directions[i];
			const nextRow = row + currentDir[0];
			const nextCol = col + currentDir[1];

			if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) continue;

			if (grid[nextRow][nextCol] === FRESH) {
				grid[nextRow][nextCol] = ROTTEN;

				freshOranges--;

				queue.push([nextRow, nextCol]);
			}
		}
	}

	if (freshOranges !== 0) return -1;

	return minutes;
};

console.log(
	orangesRotting([
		[2, 1, 1],
		[1, 1, 0],
		[0, 1, 1],
	])
);
