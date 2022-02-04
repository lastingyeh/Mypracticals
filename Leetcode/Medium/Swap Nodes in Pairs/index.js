/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	if (!head) return null;
	if (head.next === null) return head;

	let dummy = new ListNode(0, null);
	let temp = dummy;

	let first = head;
	let second = head.next;

	while (first && second) {
		// 2.next => 1.next
		first.next = second.next;
		second.next = first;
		temp.next = second;

		first = first.next;
		second = first ? first.next : null;
		temp = temp.next.next;
	}
	return dummy.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
// 	if (!head || !head.next) return head;

// 	let nextNode = head.next;

// 	head.next = swapPairs(nextNode.next);
// 	nextNode.next = head;

// 	return nextNode;
// };
