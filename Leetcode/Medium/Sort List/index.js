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
var sortList = function (head) {
	if (head === null || head.next === null) return head;

    // confirm mid
	let mid = middleNode(head);

    // sort left
	let left = sortList(head);
	// sort right
    let right = sortList(mid);
    // set dummy to arrange left, right that merge them.
	return merge(left, right);
};

const merge = (left, right) => {
	let dummyHead = new ListNode();
	let tail = dummyHead;

	while (left && right) {
		if (left.val < right.val) {
			tail.next = left;
			left = left.next;
			tail = tail.next;
		} else {
			tail.next = right;
			right = right.next;
			tail = tail.next;
		}
	}

	tail.next = left ? left : right;

	return dummyHead.next;
};

const middleNode = head => {
	let midPrev = null;

	while (head !== null && head.next !== null) {
		midPrev = midPrev === null ? head : midPrev.next;

		head = head.next.next;
	}

	let mid = midPrev.next;
	midPrev.next = null;

	return mid;
};

// https://leetcode.com/problems/sort-list/
