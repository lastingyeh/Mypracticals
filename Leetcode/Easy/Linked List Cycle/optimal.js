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
// S: O(1)
var findCycle = function (head) {
	let fast = head,
		slow = head;

	while (true) {
		fast = fast.next;
		slow = slow.next;

		if (fast === null || fast.next === null) {
			return null;
		}

		fast = fast.next;

		if (slow === fast) {
			break;
		}
	}

	let p1 = fast,
		p2 = slow;

	while (p1 !== p2) {
		p1 = p1.next;
		p2 = p2.next;
	}
	return p1;
};
