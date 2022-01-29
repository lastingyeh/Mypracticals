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
var isBalanced = function (root) {
	let ib = true;

	const balanced = root => {
		if (root === null) {
			return 0;
		}

		let l = balanced(root.left);
		let r = balanced(root.right);

		if (Math.abs(l - r) > 1) {
			ib = false;
		}

		return Math.max(l, r) + 1;
	};

	balanced(root);

	return ib;
};
