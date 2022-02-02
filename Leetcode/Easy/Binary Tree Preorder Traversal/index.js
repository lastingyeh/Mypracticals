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
var preorderTraversal = function (root) {
	const result = [];
	const stack = root ? [root] : [];

	while (stack.length) {
		const curr = stack.pop();

		result.push(curr.val);

		if (curr.right) stack.push(curr.right);
		if (curr.left) stack.push(curr.left);
	}

    return result;
};

// const preorderTraversal = (root) => {
//     if (!root) return []
// 	return [
//          root.val,
//          ...preorderTraversal(root.left),
//          ...preorderTraversal(root.right)
//     ]
// }

// https://leetcode.com/problems/binary-tree-preorder-traversal
