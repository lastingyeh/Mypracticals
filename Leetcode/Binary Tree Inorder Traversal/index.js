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
var inorderTraversal = function (root) {
	const stack = [];
	const ans = [];
	let current = root;

	/*
    Iterate down the left side of the graph until there are no more left nodes.
    Push each node onto the stack as we encounter them.
    */
	while (current) {
		stack.push(current);
		current = current.left;

		/*
	Once we hit the end of a left branch, and as long as the stack has nodes,
	remove nodes from the stack and push them onto the answer array.
	If a node with a right node is encountered, set it as the current node.
	This will break out of the inner loop and continue leftward traversal,
	as we did from root, but starting from the right node we just encountered.
	*/
		while (!current && stack.length) {
			let node = stack.pop();

			ans.push(node.val);

			if (node.right) {
				current = node.right;
			}
		}
	}

	return ans;
};
