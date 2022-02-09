/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// T: O(N)
// S: O(1)

var reverseBetween = function (head, m, n) {
	let currentPos = 1,
		currentNode = head,
		start = head;

	// find pre listnode
	while (currentPos < m) {
		start = currentNode;
		currentNode = currentNode.next;
		currentPos++;
	}

	let neoList = null,
		tail = currentNode;
	// handle reverse ListNode
	while (currentPos >= m && currentPos <= n) {
		// 3
		const next = currentNode.next;
		// first reverse ListNode.next = null
		currentNode.next = neoList;
		// first reverse ListNode = neoList
		neoList = currentNode;
		// second ListNode = first ListNode next
		currentNode = next;

		currentPos++;
	}

	start.next = neoList;
	tail.next = currentNode;

    if(m > 1){
        return head;
    }

    return neoList;
};

// head = [1 -> 2 -> 3 -> 4 -> 5 -> null]
// m = 2, n = 4

// output [1 -> 4 -> 3 -> 2 -> 5 -> null]
