/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	if (nums.length === 1) return new TreeNode(nums[0]);

	const insertToBST = (root, nums) => {
		if (nums.length === 0) return null;

		const rootIndex = Math.floor(nums.length / 2);
		const rootVal = nums[rootIndex];
        
		root.val = rootVal;
		root.left = rootVal > nums[0] ? insertToBST(new TreeNode(), nums.slice(0, rootIndex)) : null;
		root.right = rootVal < nums[nums.length - 1] ? insertToBST(new TreeNode(), nums.slice(rootIndex + 1)) : null;

		return root;
	};

	return insertToBST(new TreeNode(), nums);
};
