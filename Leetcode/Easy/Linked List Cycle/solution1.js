/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// T: O(N)
// S: O(N)
var findCycle = function (head) {
	let currentNode = head;
	const seenNodes = new Set();

	while (!seenNodes.has(currentNode)) {
		if (currentNode.next === null) {
			return null;
		}

		seenNodes.add(currentNode);

		currentNode = currentNode.next;
	}

	return currentNode;
};

// https://leetcode.com/problems/linked-list-cycle
