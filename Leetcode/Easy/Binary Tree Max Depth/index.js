/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} node
 * @return {number}
 */

// T: O(N)
// S: Max => O(N)
const maxDepth = function (node, currentDepth) {
	if (!node) return currentDepth;

	currentDepth++;

	return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth));
};
