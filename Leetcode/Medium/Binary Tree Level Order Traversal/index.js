/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//  { currentNode: [3,9,20,null,null,15,7], left: [9], right: [20,15,7] }
//  { currentNode: [9], left: null, right: null }
//  { currentNode: [20,15,7], left: [15], right: [7] }
//  { currentNode: [15], left: null, right: null }
//  { currentNode: [7], left: null, right: null }

// T: O(N)
// S: O(N)
var levelOrder = function (root) {
	// level 2^n
	// 1, 2, 4, 8...
	if (!root) return [];

	const result = [];
	const queue = [root];

	while (queue.length) {
		let length = queue.length,
			count = 0;

		const currentLevelValues = [];

		while (count < length) {
			// 0 < 1
			const currentNode = queue.shift(); // [3, 9, 20, null, null, 15, 7]

			currentLevelValues.push(currentNode.val); // [3]

			if (currentNode.left) queue.push(currentNode.left); // [9]
			if (currentNode.right) queue.push(currentNode.right); // [20]

			count++; // 1
		}

		result.push(currentLevelValues);
	}

	return result;
};

const bfs = function (root) {
	const res = [],
		q = [root];

	while (q.length) {
		let node = q.shift(); // [3, 9, 20, null, null, 15, 7, 9] -> [9] -> [20] -> [15] -> [7]

		res.push(node.val); // [3] -> [3,9] -> [3,9,20] -> [3,9,20,15] -> [3,9,20,15,7]

		if (node.left) q.push(node.left); // [9] -> null -> 15

		if (node.right) q.push(node.right); // [9,20] -> null -> 7
	}

	return res;
};

// input [3,9,20,null,null,15,7]

levelOrder([3, 9, 20, null, null, 15, 7]);
