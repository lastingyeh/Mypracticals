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
var postorderTraversal = function (root) {
	const result = [];
	const stack = root ? [root] : [];

	while (stack.length) {
		let current = stack.pop();

		console.log({ current });

		result.unshift(current.val);

		if (current.left) stack.push(current.left);

		if (current.right) stack.push(current.right);
	}

	return result;
};

// { current: [1,null,2,3] }
// { current: [2,3] }
// { current: [3] }

// Input: root = [1,null,2,3]
// Output: [3,2,1]

// https://leetcode.com/problems/binary-tree-postorder-traversal/

// function postorderTraversal(root: TreeNode | null): number[] {
//     if (root === null) return [];
//     return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
// };

