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
 * @return {number}
 */
 var minDepth = function(root) {
	if (!root) return 0;

	let que = [[root, 1]];

	while (que.length) {
		let [node, depth] = que.pop();

		if (!node.left && !node.right) return depth;
		if (node.left) que.unshift([node.left, depth + 1]);
		if (node.right) que.unshift([node.right, depth + 1]);
	}

	return -1;
};
