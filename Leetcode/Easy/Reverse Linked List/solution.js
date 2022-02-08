/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 1 -> 2 -> 3 -> 4 -> 5 -> null
var reverseLinkedList = function (head) {
	// 1
	let current = head;
	let prev = null;

	while (current) {
		// 2, 3
		let next = current.next;
		// 1 -> null,
		current.next = prev;
		// 1 -> prev
		prev = current;
		// 2 -> current
		current = next;
	}
	return prev;
};
