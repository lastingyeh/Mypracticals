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
 * @return {boolean}
 */

// T: O(N)
// S: O(N)
var isValidBST = function (root) {
	if (!root) return true;

	return dfs(root, -Infinity, Infinity);
};

const dfs = (node, min, max) => {
	if (node.val <= min || node.val >= max) return false;

    // left
	if (node.left) {
		if (!dfs(node.left, min, node.val)) {
			return false;
		}
	}
    // right
	if (node.right) {
		if (!dfs(node.right, node.val, max)) {
			return false;
		}
	}

    return true;
};
// test case 1
// [12,7,18,5,9,16,25] => true
// test case 2
// [12,15,17] => false
// test case 3
// [15,12,17,10,16,16,18] => false

// https://leetcode.com/problems/validate-binary-search-tree/