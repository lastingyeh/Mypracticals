/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	add(element) {
		let current;
		let node = new ListNode(element);

		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}
		this.size++;
	}
}

var addTwoNumbers = function (l1, l2) {
	let output = new LinkedList();
	let c1 = l1;
	let c2 = l2;
	let borrow = 0;

	while (c1 || c2) {
		let val1 = c1 ? c1.val : 0;
		let val2 = c2 ? c2.val : 0;
		let sum = val1 + val2 + borrow;

		if (sum >= 10) {
			sum = sum % 10;
			borrow = 1;
		} else {
			borrow = 0;
		}

		output.add(sum);

		c1 = c1 ? c1.next : undefined;
		c2 = c2 ? c2.next : undefined;
	}

	if (borrow > 0) output.add(1);

	return output.head;
};
