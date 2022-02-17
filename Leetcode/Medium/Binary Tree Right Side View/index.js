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
 * @return {number[]}
 */
var rightSideView = function (root) {
	// 1. identify the end of level
	// 2. add last node to result
	const result = [];

	dfs(root, 0, result);

	return result;
};

/**
 * @param {TreeNode} node
 * @param {number} currentLevel
 * @param {number[]} result
 * @return {void}
 */
const dfs = function (node, currentLevel, result) {
	if (!node) return;

	if (currentLevel >= result.length) {
		result.push(node.val);
	}

	if (node.right) {
		dfs(node.right, currentLevel + 1, result);
	}

	if (node.left) {
		dfs(node.left, currentLevel + 1, result);
	}
};

// rule: take first val from right to left at same level
// [1,2,3,4,5,null,6,null,7,null,null, null, null, null,null, 8]
// https://leetcode.com/problems/binary-tree-right-side-view/