/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	if (!list1) {
		return list2;
	}

	if (!list2) {
		return list1;
	}

	if (list1.val > list2.val) {
		[list1, list2] = [list2, list1];
	}

	let head = list1;

	while (list1 && list2) {
		let node = null;

		while (list1 !== null && list1.val <= list2.val) {
			node = list1;
			list1 = list1.next;
		}

		node.next = list2;

		[list1, list2] = [list2, list1];
	}

	return head;
};
