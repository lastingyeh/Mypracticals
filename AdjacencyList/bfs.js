// according to AdjacencyList.png
const adjacencyList = [[1, 3], [0], [3, 8], [0, 2, 4, 5], [3, 6], [3], [4, 7], [6], [2]];

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const traversalBFS = function (graph) {
	const seen = {};
	const queue = [0];
	const values = [];

	while (queue.length) {
        // queue 
        // [0],[1,3],[2,4,5]
		const vertex = queue.shift(); // 0,1,3,[]

		values.push(vertex); // [0], [0,1], [0,1,3]
 
		seen[vertex] = true; // {0: true}, {0: true, 1: true}, {0: true, 1: true, 3: true}

		const connections = graph[vertex]; // [1,3], [0], [0,2,4,5]

        // [1,3]
		for (let i = 0; i < connections.length; i++) {
			const connection = connections[i]; // 1

			if (!seen[connection]) {
				queue.push(connection); // [1]
			}
		}
	}

	return values;
};

console.log(traversalBFS(adjacencyList));
