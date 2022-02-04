/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let node = head;
	let length = 0;

	// move to tail node
	while (node) {
		length++;
		node = node.next;
	}

	let target = length - n;
	let currentNode = head;

	if (target === 0) {
		return head.next;
	}

    // move to target node
	while (target !== 1) {
		currentNode = currentNode.next;
		target--;
	}
    
    // set target.next node to original node.next
	currentNode.next = currentNode.next.next;

	return head;
};
